const pg = require('pg');
const express = require('express');
const { error } = require('jquery');
const app = express();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});
app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql =
    `select *
      from "grades"`;
  db.query(sql)
    .then(data => {
      const allGrades = data.rows;
      res.status(200).json(allGrades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred!'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const studentName = req.body.name;
  const studentCourse = req.body.course;
  const studentGrade = req.body.grade;
  if (!studentName || !studentCourse || !studentGrade) {
    res.status(400).json({ error: 'Client has input incorrect value' });
    return;
  }
  const sql =
  `insert into "grades" ("name", "course", "grade")
    values ($1, $2, $3)
    returning *`;

  const values = [studentName, studentCourse, studentGrade];
  db.query(sql, values)
    .then(data => {
      console.log(data.rows);
      res.status(201).json(data.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred!'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = req.params.gradeId;
  const studentName = req.body.name;
  const studentCourse = req.body.course;
  const studentGrade = req.body.grade;
  if (isNaN(gradeId) && gradeId < 1) {
    res.status(400).json({ error: 'Pls supply valid grade or gradeId' });
    return;
  }
  const sql = `update "grades",
                set "name" = $1,
                    "course" = $2,
                    "grade" = $3
                where "gradeId" = $4
                returning *;`;
  const values = [studentName, studentCourse, studentGrade, gradeId];
  db.query(sql, values)
    .then(data => {
      if (!data.rows[0]) {
        res.status(404).json({ error: 'GradeId not found' });
      } else {
        res.status(200).json(data.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred!'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = req.body.gradeId;
  if (isNaN(gradeId) && gradeId < 1) {
    res.status(400).json({ error: 'Pls supply valid grade or gradeId' });
    return;
  }
  const sql = `delete from "grades"
                where "gradeId" = $1
                returning *`;
  const values = [gradeId];
  db.query(sql, values)
    .then(data => {
      if (!data.rows[0]) {
        res.status(404).json({ error: 'GradeId not found' });
      } else {
        res.status(200).json(data.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred!'
      });
    });
});

app.listen(3000, () => {
  console.log('Listening to port 3000!');
});
