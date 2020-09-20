/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const addition = function (x, y) {
  return x + y;
};
const sum = numbers.reduce(addition);
console.log('Sum is: ', sum);

const multiply = function (x, y) {
  return x * y;
};
const product = numbers.reduce(multiply);
console.log('Product is: ', product);

const accountInfo = function (balance, transaction) {
  if (transaction.type === 'deposit') {
    return balance + transaction.amount;
  } else {
    return balance - transaction.amount;
  }
};

const balance = account.reduce(accountInfo, 0);
console.log('Balance is: ', balance);

const composite = traits.reduce((composite, trait) => {
  return Object.assign(composite, trait);
}, {});
console.log('Composite is:', composite);
