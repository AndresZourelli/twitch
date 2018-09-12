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
const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_KEY, domain: process.env.MAILGUN_DOMAIN});
const crypto = require('crypto');



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
    emailtokens = crypto.randomBytes(20).toString('hex');
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err
        });
      } else {
        db('users')
        .insert(
        { username: req.body.username, 
         email: req.body.email, 
         password: hash ,
         joined: new Date(),
         passwordresettoken: null,
         resetpasswordexpires: null,
         verifieduser: 0,
         updatedat: new Date(),
         emailtoken: emailtokens
        })
        .then((response)=>{
         
          const data = {

            from: 'Streamer Society Email Verification <verifyEmail@samples.mailgun.org>',
            to: req.body.email,
            subject: 'Please Veryify Email',
            text: 'Hello,\n\n' +
          'Please confirm your account for ' + req.body.email + ' by clicking on this link '+ 
          'http://' + 'localhost:3000' + '/verify/' + emailtokens + '\n\n'};
      
            return mailgun.messages().send(data)
           }) 
        .catch(err => {console.log(err); res.status(400).json("Unable to sign-up")})
      }
    })
  }
  });

app.get('/verify/:emailtoken', (req, res)=>{
  console.log(req.params.emailtoken);
  db.select('emailtoken').from('users')
  .where('emailtoken','=',req.params.emailtoken)
  .then((ress)=>{
    console.log(ress[0].emailtoken);
    if(ress.length < 1){
      return res.redirect('/signup');
    }
    else{
      return db.select('emailtoken').from('users')
      .where('emailtoken','=',ress[0].emailtoken).update({verifieduser: 1, emailtoken: null, updatedat: new Date()}).then(response=>{
      res.redirect('/login');})
    }
  }).catch(err => {console.log(err); res.status(400).json('Password reset token is invalid or has expired.')});
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

app.post('/reset', (req, res) => {
  
  token = crypto.randomBytes(20).toString('hex');

  db.select('email').from('users')
  .where('email','=',req.body.email)
  .update({
    passwordresettoken: token,
    resetpasswordexpires: Date.now()+3600000,
    updatedat: new Date()
  })
  .then((res) =>{
      const data = {
      from: 'Excited User <me@samples.mailgun.org>',
      to: req.body.email,
      subject: 'Streamer Society Password Reset Instructions',
      text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + 'localhost:3000' + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      
     
       
      return mailgun.messages().send(data)
  }).catch(err => {console.log(err); res.status(400).json('Unable to get User')});

  
});

app.get('/reset/:token', (req, res)=>{
  db.select('passwordresettoken').from('users')
  .where('passwordresettoken','=',req.params.token)
  .then((res)=>{
    if(res.length < 1){
      return res.redirect('/reset');
    }
    else{
      res.redirect('/reset/:'+req.params.token);
    }
  }).catch(err => {console.log(err); res.status(400).json('Password reset token is invalid or has expired.')});
});

app.post('/reset/:token',[
  check('password').isLength({min: 8, max: 100}).withMessage('Password must be between 8-100 characters long.'),
  check('password').exists().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage('Password must include one lowercase character, one uppercase character, a number, and a special character.'),
  check('passwordMatch').exists().isLength({min: 8, max: 100}).withMessage('Password must be between 8-100 characters long.'),
  check('password').custom((value, {req})=> value === req.body.passwordMatch).withMessage('Passwords do not match, please try again.')], 
  (req, res)=>{

    token = req.params.token;

  db.select('passwordresettoken','email').from('users')
    .where('passwordresettoken','=',req.params.token)
    .then((info)=>{
      const v = info[0].email;
      if(info.length < 1){
       res.status(401).json({message: "couldn't find user"});
      }
      else{
        hash = bcrypt.hashSync(req.body.password, 10);
        return db.select('passwordresettoken','email','resetpasswordexpires').from('users')
        .where('passwordresettoken','=',req.params.token).update({password: hash, passwordresettoken: null, resetpasswordexpires: null, updatedat: new Date()})
        .then(users =>{
          console.log(v);
          const data = {

            from: 'Reset User Password <resetpassword@samples.mailgun.org>',
            to: v,
            subject: 'Your password has been changed',
            text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + v + ' has just been changed.\n' };
      
            return mailgun.messages().send(data)
           }) ;
      }
    })
    .catch(err => {console.log(err); res.status(400).json('Password reset token is invalid or has expired.')});
  });
//});
  //});


function authenticationMiddleware () {  
  return (req, res, next) => {
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

      if (req.isAuthenticated()) return next();
      res.redirect('/login')
  }
};