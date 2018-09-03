const express = require('express');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').load();


const app = express();
const port = process.env.PORT || 5000;


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


const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://streamingsociety.auth0.com/.well-known/jwks.json`
  }),

    audience: 'uhG1WInIUpM5ghf76s9X1pLmZrnshQir',
  issuer: `https://streamingsociety.auth0.com`,
  algorithms: ['RS256']
});


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port hi ${port}`));