// Factorial digit sum
// Problem 20

// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

const factorialDigitSum = (num) => {
  let prod = 1n;
  for (let i = num; i > 0; i--) {
    prod *= i;
  }

  return String(prod)
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
};

console.log(factorialDigitSum(100n));
