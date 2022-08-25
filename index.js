function isPalindrome(word) {
  let loweredWord = word.toLowerCase().split('')
  let reveresedWord = loweredWord.reverse().join('')
  
  if (word === reveresedWord){
    return true
  } else {
    return false
  }
}

/* 
  Create a function
  receives an argument
  Split the string into an array
  Reverse the string
  Join the string
  if sting === reversed string
    return true
    if not
    return false
*/

/*
  Make a function that returns true is the word is a pallendrome and false
   if not, meaning if the word is the same in reverse it should return true

   mom === mom //true
   abc === cba //false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
