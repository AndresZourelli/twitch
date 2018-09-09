const express = require('express');
const session = require('express-session');
const jwksRsa = require('jwks-rsa');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bcrypt = require("bcrypt");
const { Client } = require("pg");
const jwt = require('jsonwebtoken');
require('dotenv').load();
const checkAuth = require('./server/check-auth');
const knex = require('knex');
const app = express();
const port = process.env.PORT || 5000;
const { check, validationResult } = require('express-validator/check');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const KnexSessionStore = require('connect-session-knex')(session);
const LocalStrategy = require('passport-local').Strategy;

const db = knex({
  client: 'pg',
  connection: {
  user: process.env.DB_User,
  host: process.env.DB_host,
  database: process.env.DB,
  password: process.env.DB_password,
  port: process.env.DB_Port,
  ssl: true,
debug: true},
});

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

app.use(cookieParser());

const store = new KnexSessionStore({
    knex: db,
    tablename: 'session' // optional. Defaults to 'sessions'
});

app.use(session({
    secret: 'keyboard cat',
    cookie: {
        maxAge: 10000 // ten seconds, for testing
    },
    store: store,
    resave: false,
    saveUninitialized: false

}));


app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
      db('users').where({
        username: username
       }).select('password','id')
      .then((err, results, fields) => {
       if(err){
        done(err)
       };
       console.log(results[0].password.toString());
      hash = results[0].password.toString();
       if(results.length === 0){
        done(null, false);
       } 
       else{

          bcrypt.compare(password, hash, (err, res)=>{
            if (res){
              return done(null, {user_id: results[0].id });
            }
            else{
              return done(null, false);
            }
          });

        }


      })
      
    }
  
));


app.post('/api/hello',(req, res) => {
  console.log(req.user);
  console.log(req.isAuthenticated());
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port hi ${port}`));

app.post("/signup",[
  check('username').exists().withMessage('Username field cannot be empty.'),
  check('username').matches(/^[A-Za-z0-9_-]+$/, 'i').withMessage('Username can only contain letters, numbers, or underscores.'),
  check('username').isLength({min: 4, max:15}).withMessage('Username must be between 4-15 characters long.'),
  check('email').exists().isEmail().withMessage('The email you entered is invalid, please try again.'),
  check('email').isLength({min: 4, max:100}).withMessage('Email address must be between 4-100 characters long, please try again.'),
  check('password').isLength({min: 8, max: 100}).withMessage('Password must be between 8-100 characters long.'),
  check('password').exists().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage('Password must include one lowercase character, one uppercase character, a number, and a special character.'),
  check('passwordMatch').exists().isLength({min: 8, max: 100}).withMessage('Password must be between 8-100 characters long.'),
  check('password').custom((value, {req})=> value === req.body.passwordMatch).withMessage('Passwords do not match, please try again.')] 
  ,(req, res) => {

  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).json({ errors: errors.array() });
  }
  
  else{

    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err
        });
      } else {
        db('users').returning('id')
        .insert(
        { username: req.body.username, 
         email: req.body.email, 
         password: hash ,
         joined: new Date()
        }
        )
        .then( user =>{
          const userId = user;
          req.login(user, (err)=>{
            if(err){
              res.json({message: 'failed'});
            }
          }); 
          {res.status(200).json({message: "New User"})};
      })
        .catch(err => res.status(400).json("Unable to sign-up"))
      }
    })
  }
  });





app.post('/login', (req, res, next) => {
  db.select('email', 'password').from('users')
  .where('email','=',req.body.email)
  .then(data => {
   const isValid = bcrypt.compareSync(req.body.password, data[0].password );
   if (isValid){
      const token = jwt.sign(
      {
        email: data[0].email,
        userId: data[0]['id'],
      },
      process.env.JWT_KEY, 
      {
        expiresIn: '1h'
      }
    );
    
    return db.select('*').from('users')
    .where('email','=', req.body.email)
    .then(user => {
      
      res.status(200).json({
        message: "Auth successful", 
        token: token
      });
    })
    .catch(err => res.status(400).json('Unable to get User'))
   } else{
    res.status.json('Wrong Credentials')
   }
    

  })
  .catch(err => res.status(400).json('Wrong credentials'))
});  


app.post('/register', passport.authenticate(
  'local', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  }));

passport.serializeUser(function(userId, done) {
  done(null, userId);
});

passport.deserializeUser(function(userId, done) {
    done(err, userId);
});

app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.redirect('/');
    });
    
  });

function authenticationMiddleware () {  
  return (req, res, next) => {
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

      if (req.isAuthenticated()) return next();
      res.redirect('/login')
  }
};