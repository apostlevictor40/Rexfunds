const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Rexfunds backend is running!');
});

// Here you’d add user routes, investments, withdrawals, auth etc.

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
