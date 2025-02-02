const express = require('express');
const db = require('./src/db/db');
const app = express();
const env = require('dotenv');
const cors = require('cors');

//config env
env.config({ path: './.env' });

//routes
const routes = require('./src/Routes');

//middlewares
app.use(cors({ origin: 'https://blog-app-ochre-rho.vercel.app' }));
app.use(express.json());
app.use(express.static('public'));

app.use(routes);
app.use('*', (req, res) => {
  res.status(404).json({ message: 'No Routes Found' });
});
app.listen(9001, () => {
  console.log('server now running at http://localhost:9001');
});
