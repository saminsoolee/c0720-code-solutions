/* eslint-disable no-console */
let current = 3;

const intervalex = setInterval(function () {
  console.log(current);
  current--;
  if (current === 0) {
    console.log('blast off');
    clearInterval(intervalex);
  }
}, 1000);
