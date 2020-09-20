const fs = require('fs');
const fileName = process.argv[2];

fs.writeFile('note.txt', fileName, 'utf8', err => {
  if (err) throw err;
});
