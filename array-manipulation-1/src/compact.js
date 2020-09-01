/* eslint-disable no-unused-vars */
function compact(array) {
  const compactArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      const trueArray = array[i];
      compactArray.push(trueArray);
    }
  }
  return compactArray;
}
