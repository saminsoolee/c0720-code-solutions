/* eslint-disable no-unused-vars */
function isUpperCased(word) {

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
