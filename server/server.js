const express = require('express');
const db = require('./db/db');
const app = express();
const env = require('dotenv');

//config env
env.config({ path: './.env' });

//routes
const routes = require('./Routes');

//middlewares
app.use(express.json());

app.use(routes);
app.use('*', (req, res) => {
  res.status(404).json({ message: 'No Routes Found' });
});
app.listen(9001, () => {
  console.log('server now running at http://localhost:3001');
});
