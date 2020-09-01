/* eslint-disable no-unused-vars */
function reverse(array) {
  const reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const newArr = array[i];
    reverseArray.push(newArr);
  }
  return reverseArray;
}
