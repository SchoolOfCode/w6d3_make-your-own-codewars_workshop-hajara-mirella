import squareIt from "./main.js";

//👉 Write your tests below here:
// 
// We want to check the length of the string (string.length)
//
// Test that string is type string
describe(`Check if string is the type of string`, function () {
  test(`Check if string is the type of string`, function () {
    // arrange
    const actual = expect.any(String);
    // act
    const expected = expect.any(String);
    // Assert
    expect(actual).toStrictEqual(expected);
  });
});

// Test that length of string is correct
describe(`Check if the string.length matches the number of that length`, function () {
  test(`Check if the string.length matches the number of that length`, function () {
    // arrange
    const string = "hello";
    const actual = string.length;
    // act
    const expected = string.length;
    // assert
    expect(actual).toBe(expected);
  });
});

// Test that square of string.length is correct
describe(`check that the square of the length of the string is correct`, function(){
test(`check that the square of the length of the string is correct`, function(){
//arrange
const string = "hello";
const stringLength = string.length;
const lengthSquare = stringLength**2
const actual = squareIt(string)
//act
const expected = lengthSquare
//assert
expect(actual).toBe(expected)
})
})
