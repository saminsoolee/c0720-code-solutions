/* eslint-disable no-unused-vars, no-console */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
console.log('Even Numbers:', evenNumbers);

const overFive = numbers.filter(numbers => numbers > 5);
console.log('Numbers greater than 5:', overFive);

const startWithE = names.filter(names => names[0] === 'E');
console.log('Names that start with E:', startWithE);

const startWith = names.filter(names => names.startsWith('E'));
console.log('Starts with E method:', startWith);

const haveD = names.filter(names =>
  names.includes('D') || names.includes('d')
);
console.log('Includes D and d:', haveD);
