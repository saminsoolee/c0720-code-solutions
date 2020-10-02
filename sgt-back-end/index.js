const pg = require('pg');
const express = require('express');
const { error } = require('jquery');
const app = express();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

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

});
