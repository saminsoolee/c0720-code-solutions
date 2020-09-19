/* eslint-disable no-console */
const fs = require('fs');
const data = require('./data.json');

const command = process.argv[2];

if (command === 'read') {
  for (const noteNumber in data.notes) {
    console.log(`${noteNumber}: ${data.notes[noteNumber]}\n`);
  }

} else if (command === 'add') {

  const noteId = data.nextId;
  const newNote = process.argv[3];
  data.nextId++;
  data.notes[noteId] = newNote;
  writeData(data);

} else if (command === 'delete') {

  const noteId = process.argv[3];
  delete data.notes[noteId];
  writeData(data);

} else if (command === 'update') {

  const noteId = process.argv[3];
  const updatedNote = process.argv[4];
  data.notes[noteId] = updatedNote;
  writeData(data);
}

function writeData(data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', json, err => {
    if (err) throw err;
  }
  );
}
