// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

// couldnt get this to work fast enough. Had to reasearch how to find prime numbers quicker
// maybe make it quicker by getting a list of prime numbers and adding them all together using reduce?
// added '&& num % 2 === 0' on first if statement on isPrime, returns a little bit quicker than without
// most optimized is start at 3 and i += 2 each iteration instead of i ++
const isPrime = (num) => {
  var sqrtnum = Math.floor(Math.sqrt(num));
  var prime = num != 1;
  for (var i = 2; i < sqrtnum + 1; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

const sumOfPrimes = (target) => {
  let sum = 0;
  let prime = 2;
  while (prime < target) {
    if (isPrime(prime)) {
      // console.log(isPrime(prime));
      sum += prime;
    }
    prime += 1;
  }
  return sum;
};

console.log(sumOfPrimes(2000000)); // 142913828922
