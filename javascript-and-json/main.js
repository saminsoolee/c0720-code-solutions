/* eslint-disable no-console */
const books = [
  {
    isbn: '0001',
    title: 'title 1',
    author: ' person 1'
  },
  {
    isbn: '0002',
    title: 'title 2',
    author: 'person 2'
  },
  {
    isbn: '0003',
    title: 'title 3',
    author: 'person 3'
  }
];

const json = JSON.stringify(books);
console.log('JSON:', json);
console.log('Typeof JSON: ', typeof json);

const students = '{ "numberID": 7777, "stringName": "Sam" }';
const obj = JSON.parse(students);
console.log('Parsed Student:', obj);

console.log('Typeof Parsed Student:', typeof obj);
