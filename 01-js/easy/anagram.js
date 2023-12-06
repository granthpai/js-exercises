/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  if (lowerStr1.length !== lowerStr2.length) {
    return false;
  }

  let counter = {};

  for (let letter of lowerStr1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }

  for (let item of lowerStr2) {
    if (!counter[item]) {
      return false;
    }
    counter[item] -= 1;
  }

  return true;
}


const check = isAnagram("Hello", "lLhEo");
console.log(check); 

module.exports = isAnagram;
