// server.js
import express from 'express';
import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const app = express();
const port = 3000;


pool.connect()
  .then(client => {
    console.log('Connected to Postgres');
    client.release();
  })
  .catch(err => {
    console.error('Failed to connect to Postgres', err);
  });

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.json({ now: result.rows[0] });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});