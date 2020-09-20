const fs = require('fs');
const randomNumber = Math.random();

fs.writeFile('random.txt', randomNumber, 'utf8', err => {
  if (err) throw err;
});
