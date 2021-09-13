// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

// make prime checker function?
// store primes in an array?
// when length === 10001 return last ele
//   or set a counter
//   when counter === 10001 then return that

// checks if a number is prime
let prime = function (num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

let nthPrime = function () {
  let num = 1;
  let target = 10001;
  let counter = 0;

  while (counter < target) {
    if (prime(num)) {
      counter++;
      if (counter === target) {
        return num;
      }
    }
    num++;
  }
};

console.log(nthPrime()); // 103743
console.log(prime(2)); // true
