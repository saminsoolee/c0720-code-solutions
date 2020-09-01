/* eslint-disable no-unused-vars */
function tail(array) {
  const tailArray = [];
  for (let i = 1; i < array.length; i++) {
    const arr = array[i];
    tailArray.push(arr);
  }
  return tailArray;
}
