// Digit factorials
// Problem 34

// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: As 1! = 1 and 2! = 2 are not sums they are not included.

const factorial = (num) => {
  let prod = 1;
  for (let i = num; i > 0; i--) {
    prod *= i;
  }
  return prod;
};

const sumOfFactorials = () => {
  let i = 3;
  let sum = 0;
  while (i < 5000000) {
    let stringI = String(i).split("");
    let factorialTotal = 0;
    for (let j = 0; j < stringI.length; j++) {
      factorialTotal += factorial(stringI[j]);
    }
    if (factorialTotal === i) {
      sum += i;
    }
    i++;
  }
  return sum;
};

// console.log(factorial(100));
console.log(sumOfFactorials());
