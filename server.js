const express = require('express');

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

const db = knex({
  client: 'pg',
  connection: {
  user: process.env.DB_User,
  host: process.env.DB_host,
  database: process.env.DB,
  password: process.env.DB_password,
  port: process.env.DB_Port,
  ssl: true},
});

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));



app.post('/api/hello', checkAuth,(req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port hi ${port}`));

app.post("/signup", (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err
        });
      } else {
        db('users').returning('*')
        .insert(
        { name: req.body.names, 
         email: req.body.email, 
         password: hash ,
         joined: new Date()
        }
        )
        .then( user => {res.status(200).json({message: 'new user'});})
        .catch(err => res.status(400).json("Unable to sign-up"))
      }
    })
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
})  

