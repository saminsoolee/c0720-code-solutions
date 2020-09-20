/* eslint-disable no-console */
const express = require('express');
const app = express();

app.use((req, res, next) => {
  const options = { root: __dirname };
  if (req.originalUrl === '/index.html') {
    res.sendFile('index.html', options);
  } else if (req.originalUrl === '/styles.css') {
    res.sendFile('styles.css', options);
  } else if (req.originalUrl === '/main.js') {
    res.sendFile('main.js', options);
  }
});

app.listen(3000, () => {
  console.log('Port 3000!');
});
