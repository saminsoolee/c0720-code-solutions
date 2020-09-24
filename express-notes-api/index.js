// /* eslint-disable no-console */
// const fs = require('fs');
// const express = require('express');
// const data = require('./data');
// const app = express();

// console.log('hello');

// app.get('/api/notes', (req, res) => {
//   const notes = [];
//   for (const id in data.notes) {
//     const note = data.notes[id];
//     notes.push(note);
//   }
//   res.json(notes);
// });

// app.get('/api/notes/:id', (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   if (!Number.isInteger(id) || id <= 0) {
//     res.status(400).json({
//       error: 'id must be a positive integer'
//     });
//     return;
//   }
//   const note = data.notes[id];
//   if (typeof note === 'undefined') {
//     res.status(404).json({
//       error: 'id cannot be found'
//     });
//     return;
//   }
//   res.json(note);
// });
// app.use(express.json());

// app.post('/api/notes', (req, res) => {
//   if (!req.body.content) {
//     res.status(400).json({
//       error: 'content is a required field'
//     });
//     return;
//   }
//   const note = {
//     id: data.nextId,

//     content: req.body.content
//   };
//   data.notes[data.nextId] = note;
//   data.nextId++;
//   const json = JSON.stringify(data, null, 2);
//   fs.writeFile('./data.json', json, err => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({
//         error: 'An unexpected error occurred'
//       });
//       return;
//     }
//     res.status(201).json(note);
//   });
// });

// app.delete('/api/notes/:id', (req, res) => {

//   if (isNaN(req.params.id) || req.params.id < 1) {
//     res.status(400).json({ error: 'Please choose a correct number' });
//     return;
//   }

//   if (!data.notes[req.params.id]) {
//     res.status(404).json({ error: 'No matching note id' });
//     return;
//   }
//   const json = JSON.stringify(data, null, 2);

//   fs.writeFile('data.json', json, err => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'An unexpected error occurred' });
//       return;
//     }
//     res.status(204).json({});
//   });
// });

// app.put('api/notes/:id', (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   console.log(id);
//   // if (id < 0 || isNaN(id)) {
//   if (true) {
//     res.status(400).json({
//       error: 'id must be a positive integer'
//     });
//     return;
//   }
//   if (!data.notes) {
//     res.status(404).json({
//       error: 'cannot find note with id'
//     });
//     return;
//   }
//   const json = JSON.stringify(data, null, 2);
//   fs.writeFile('./data.json', json, err => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({
//         error: 'An unexpected error occurred'
//       });
//       return;
//     }
//     res.status(200).json({});
//   });
// });

// app.listen(3000, () => {
//   console.log('Listening to port 3000!');
// });
