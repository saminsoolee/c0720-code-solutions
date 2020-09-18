/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const promiseObject = takeAChance('samlee');

promiseObject.then(
  string => { console.log(string); }
);

promiseObject.catch(function (error) {
  console.log(error.message);
});
