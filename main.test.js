//👉 Write your tests below here:
// w
// We want to check the length of the string (string.length)
//

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

describe(`Check if the string.length matches the number of that length`, function () {
  test(``, function () {
    // arrange
    const string = "hello";
    const actual = string.length;
    // act
    const expected = string.length;
    // assert
    expect(actual).toBe(expected);
  });
});
