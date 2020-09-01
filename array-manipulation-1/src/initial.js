/* eslint-disable no-unused-vars */
function initial(array) {
  const result = [];
  for (let i = 0; i < array.length - 1; i++) {
    const newArr = array[i];
    result.push(newArr);
  }
  return result;
}
