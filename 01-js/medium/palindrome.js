/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

let string = "abba";

function isPalindrome(str) {

  const clrStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();//g->global

  let left = 0;
  let right = clrStr.length-1;

  while(left<right){
    if(clrStr[left] !== clrStr[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
