/* 
👉 Write your kata here!

You will be given a string (e.g "hello" and "bye").
Find the numbers of the characters in the string
Square the numbers
Return the sum of the value


*/

//👉 Write the function your CodeWarriors will start with below here:
// When given a string, return the square of the number of characters in the string
// function squareIt(string) {}

// solution
export default function squareIt(string) {
  let stringLength = string.length;
  let squareLength = stringLength ** 2;
  return squareLength;
}

//solution2
let squareIt = (string) => string.length ** 2;

// solution 3
