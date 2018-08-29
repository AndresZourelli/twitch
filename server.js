const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
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
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));