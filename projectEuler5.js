// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// FIX NOT YET SOLVED
const smallestMultiple = () => {
  let smallestNumber = 1;
  let range = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let condition = true;
  while (condition) {
    condition = false;
    if (range.every((num) => smallestNumber % num === 0)) {
      return smallestNumber;
    } else {
      smallestNumber += 1;
      condition = true;
    }
  }
};

// let range = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// console.log(range.every((num) => num % 2 === 0));

console.log(smallestMultiple());
