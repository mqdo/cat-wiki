const express = require('express');
const cors = require('cors');

require('dotenv').config();
const catRouter = require('./routes/cat.route');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
})

app.use('/cat', catRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${process.env.PORT || 3000}`);
})