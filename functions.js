/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

// maxOfTwoNumbers = (x,y) => {
//   // ADD YOUR CODE HERE 
//      if (x > y){
//         let maxnum = x
//     }else if(y > x){
//         maxnum = y
//     }else{
//         maxnum = 'They are the same'
//     }
// return maxnum
//     }
// console.log(maxOfTwoNumbers(9, 11));

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
// maxOfThree = (num1, num2, num3) => {
//   // ADD YOUR CODE HERE
//   let biggest
//   if (num3 > num2 && num3 > num1){
//     biggest = num3
//   }else if (num2 > num3 && num2 > num1){
//     biggest = num2
//   }else if (num1 > num3 && num1 > num2){
//     biggest = num1
//   }
// return biggest
// };
// console.log(maxOfThree(15, 20, 35))
// console.log(maxOfThree(15, 50, 35))
// console.log(maxOfThree(80, 20, 35))
/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

//const isCharacterAVowel = (character) => {
  //ADD YOUR CODE HERE
  // this is way more efficient but stopper working
//  let vowels = ['a', 'e', 'i', 'o', 'u']
//  for (let i = 0; i < vowels.length; i++){
//     if (character === vowels[i]){
//         return true
//     }else{
//         return false
//     }
//  }
// // this works
//   if (character === 'a'){
//     return true
//   }else if (character === 'e'){
//     return true
//   }else if (character === 'i'){
//     return true
//   }else if (character === 'o'){
//     return true
//   }else if (character === 'u'){
//     return true
//   }else{
//     return false
//   }
// };
// console.log(isCharacterAVowel('i'))
// console.log(isCharacterAVowel('o'))
// console.log(isCharacterAVowel('f'))
// console.log(isCharacterAVowel('a'))

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

// const sumArray = (array) => {
//   // ADD YOUR CODE HERE 
//   let sum = 0;
//   for(let i = 0; i< array.length; i++){
//     sum += array[i];
//     }
//     return sum;
//     };
// console.log(sumArray([1, 3, 6, 10]));

// const multiplyArray = (array) => {
//     let product = 1;
//     for(let i = 0; i < array.length; i++){
//         product *= array[i]
//     } return product
// }
// console.log(multiplyArray([1, 3, 6, 10]));

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
//  function returnNumOfArgs(){
//     console.log(arguments.length)
// }
// returnNumOfArgs(1,2)
// returnNumOfArgs(1,2,3,4)


/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

// reverseString = (string) => {
//   // ADD YOUR CODE HERE
//   return string.split('').reverse().join('')
// };
// console.log(reverseString('howdy partner'))
/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
// let words = ['short', 'longest', 'longer', 'longestier']
// const findLongestWord = (array) => {
//   // ADD YOUR CODE HERE
// let longestWord = ''
//   for(let i =0; i<array.length; i++){
//     if (array[i].length > longestWord.length) {
//       longestWord = array[i]
//     }
// }return longestWord
// };

// console.log(findLongestWord(words))
/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
// let arrOfWords = ['hello', 'yes', 'hi']
// filterLongWords = (arr, num) => {
//   // ADD YOUR CODE HERE
//   let newArr = []
//   //step 1: start a loop and get indexes
//   for (let i = 0; i < arr.length; i++){
//   //step 2: if statement to check if words is longer than num
//     if (arr[i].length > num){
//   //step 3: if YES, push word to new array
//       newArr.push(arr[i])
//     }
//   }
//   //step 4: return new array
//   return newArr
// }
// console.log(filterLongWords(arrOfWords, 3))