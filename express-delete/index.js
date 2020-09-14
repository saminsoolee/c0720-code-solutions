/* eslint-disable no-console */
const express = require('express');
const grades = [
  {
    id: 1,
    name: 'Sam Lee',
    course: 'Web Dev',
    grade: 100
  },
  {
    id: 2,
    name: 'Stanley Yelnats',
    course: 'Gold Digga',
    grade: 100
  }
];

const app = express();

app.get('/api/grades', (req, res, next) => {
  res.json(grades);
});

app.delete('/api/grades/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const gradeIndex = grades.findIndex(grade => grade.id === id);
  if (gradeIndex === -1) {
    res.sendStatus(404);
  } else {
    grades.splice(gradeIndex, 1);
    res.sendStatus(204);
  }
});

app.listen(3000, () => {
  console.log('Listening to port 3000!');
});
