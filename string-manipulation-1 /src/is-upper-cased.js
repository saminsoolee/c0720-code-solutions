/* eslint-disable no-unused-vars */
function isUpperCased(word) {

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
// conditional,for loop
//
// the functtion checks EVERY SINGLE LETTER - for loop
