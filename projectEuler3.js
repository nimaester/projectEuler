// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// checks if a number is a prime number

// checks if number is prime or not
let prime = function (number) {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
};

let largestPrime = function (number) {
  let primeNum;
  for (let div = 1; div < Math.sqrt(number); div += 2) {
    // sqrt the number so it will have less iterations
    if (number % div === 0 && prime(div)) {
      primeNum = div;
    }
  }
  return primeNum;
};

console.log(largestPrime(600851475143));
