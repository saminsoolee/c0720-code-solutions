/* eslint-disable no-console */
const express = require('express');
const app = express();
const apiExample = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'person 1',
    course: 'course 1',
    grade: 1001

  }];

app.get('/api/grades', (req, res, next) => {
  res.send(apiExample);
  next();
});

app.listen(3000, () => {
  console.log('listening to port 3000!');
});
