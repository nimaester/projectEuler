// The sum of the squares of the first ten natural numbers is,

// 12+22+...+102=385
// The square of the sum of the first ten natural numbers is,

// (1+2+...+10)2=552=3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let sumOfSquares = function (limit) {
  let total = 0;
  for (let i = 1; i <= limit; i ++) {
    total += i ** 2;
  }
  return total;

};

let squareOfSum = function (limit) {
  let total = 0;
  for (let i = 1; i <= limit; i += 1) {
    total += i;
  }
  return total ** 2;
};

console.log(squareOfSum(100) - sumOfSquares(100)) // 25164150