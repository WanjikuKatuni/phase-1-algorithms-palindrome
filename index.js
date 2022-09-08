const { stringify } = require("mocha/lib/utils");

// function isPalindrome(word) {
//   // Write your algorithm here

//   // find length of string
//   const wordLength = word.length;

//   // loop through half the string

//   for(let i=0; i < wordLength/2; i++){

//       // check if the first and last strign are the same
//       if (word[i] === word[wordLength-1 -i]){
//         // console.log('its a palindrome')
//         return 'true'
//       }
//       // console.log('not a palindrome')
//       return 'false'
//   }
// }

// console.log(isPalindrome('abba'))
// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('a'))
// console.log(isPalindrome('robot'))
// console.log(isPalindrome('ab'))

function isPalindrome(word){

  //convert string to arrray
  const wordArray = word.split('');

  //reverse array values
  const reverseWordArray = wordArray.reverse();

  //connvert array to string
  const reversedWord = reverseWordArray.join('');

  if (word == reversedWord){
    return true
  }
  else {
    return false
  }

}
console.log(isPalindrome('abba'))





/* 
  Add your pseudocode here
*/
//commented method
// write function that takes in a string {
  // in the finction find the length of the string
  //loop through half of the string
  //check if the first and last string are the same
//}

//method 2

// write a function that takes in a string
// in the function split the string to an array of values
// reverse the array of values
//join the reveresd array to form a reveresed word
//use if to check if the string and reveresed word are equal




/*
  Add written explanation of your solution here
*/

//the function takes in a string, it loops through hald of the string and checks if the first hald of the string is equal to the second half of the string.


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
