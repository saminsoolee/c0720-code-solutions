/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(i => i * 2);
console.log(doubled);

const toDollars = numbers => {
  const string = numbers.toFixed(2);
  return '$' + string;
};

const prices = numbers.map(toDollars);
console.log(prices);

const upperCased = languages.map(i => i.toUpperCase());
console.log(upperCased);

const firstLetters = languages.map(i => i[0]);
console.log(firstLetters);

var fancy = document.querySelector('.fancy');
document.addEventListener('click', function () {
  fancy.classList.remove('fancy');
  fancy.classList.add('not-fancy');
  // fancy.className = 'not-fancy';
});

console.log(fancy);
