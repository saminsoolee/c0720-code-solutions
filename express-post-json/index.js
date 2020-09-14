/* eslint-disable no-console */
const express = require('express');
const app = express();

let nextId = 1;
const grades = [{
  name: 'Brendan Eich',
  course: 'JavaScript',
  grade: 100
}
];

const jsonMid = express.json();
app.get('/api/grades', (req, res, next) => {
  res.json(grades);
});

app.use(jsonMid);

app.post('/api/grades', (req, res, next) => {
  const newGrades = req.body;
  newGrades.id = nextId++;
  grades.push(newGrades);
  res.status(201).json(newGrades);

});

app.listen(3000, () => {
  console.log('Listening to port 3000~');
});
