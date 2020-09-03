/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'plus' || process.argv[3] === '+') {
  console.log(add(parseInt(process.argv[2]), parseInt(process.argv[4])));
} else if (process.argv[3] === 'minus' || process.argv[3] === '-') {
  console.log(subtract(parseInt(process.argv[2]), parseInt(process.argv[4])));
} else if (process.argv[3] === 'times' || process.argv[3] === './*') {
  console.log(multiply(parseInt(process.argv[2]), parseInt(process.argv[4])));
} else if (process.argv[3] === 'over' || process.argv[3] === '/') {
  console.log(divide(parseInt(process.argv[2]), parseInt(process.argv[4])));
}
