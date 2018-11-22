const express = require('express');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bcrypt = require("bcrypt");
require('dotenv').load();
const checkAuth = require('./server/check-auth');
const knex = require('knex');
const app = express();
const port = process.env.PORT || 5000;


var pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
});

const database = {
  users: [{
    _id: '123',
    name: 'Bob',
    email: 'bob@gmail.com',
    password: 'test3',
    joined: new Date()
  }],
  secrets: {
    users_id: '123',
    hash: 'wha'
  }
}

//Talk to .env file testing area
// console.log('No value for FOO yet:', process.env.JWT_KEY);

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').load();
// }

// console.log('Now the value for FOO is:', process.env.JWT_KEY);



/*
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'sydtaylo',
  host: 'localhost',
  database: 'twitchdb',
  password: 'Lillian214',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: 'sydtaylo',
  host: 'localhost',
  database: 'twitchdb',
  password: 'Lillian214',
  port: 5432,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
*/

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));



app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port hi ${port}`));

app.post("/signup", (req, res) => {
    if (database.users[0].email === req.body.email) {
    return res.status(409).json({
      message: 'User Exists'
    });
  } else {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err
        });
      } else {
        database.users.push({
          _id: "1",
          email: req.body.email,
          password: hash
        });
        return res.status(200).json({
          message: database
        });
      }
    })
  }
});





app.post('/login', (req, res, next) => {
  var i;
  var c = [];
  for ( i = 0; i < database.users.length; i++){
    c[i] = database.users[i];
  }
  user = c;
  //console.log(user);
  console.log(req.body.password);
    if (user.length < 1){
      return res.status(401).json({
        message: 'Auth Failed 0'
      });
    }
    bcrypt.compare(req.body.password,user[1].password, (err, result) =>{
      if (err) {
        return res.status(401).json({
          message: 'Auth Failed 1'
        });
      }
      if (result) {
        return res.status(200).json({
          message: 'Auth successful'
        });
      }
      console.log(result)
      res.status(401).json({
        message: 'Auth Failed'
      });
    });
  
});

