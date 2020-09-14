/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const app = express();

const joined = path.join(__dirname, 'public');
const staticMid = express.static(joined);

app.use(staticMid);

app.listen(3000, () => {
  console.log('Listening to port 3000~');
});
