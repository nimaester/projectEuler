// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

// couldnt get this to work fast enough. Had to reasearch how to find prime numbers quicker
// maybe make it quicker by getting a list of prime numbers and adding them all together using reduce?
// added '&& num % 2 === 0' on first if statement on isPrime, returns a little bit quicker than without
// most optimized is start at 3 and i += 2 each iteration instead of i ++



const isPrime = function (num) {
  if (num < 2 && num % 2 === 0) { return false; }
  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i === 0) { return false; }
  }
  return true;
};

const sumOfPrimes = function (target) {

  // method 1
  let sum = 0;
  for (let div = 3; div < target; div +=2 ) {
    if (isPrime(div)) { sum += div; }
  }
  return sum;


  //method 2
  // let primes = [];
  // let div =  3;
  // while (div < target) {
  //   if (isPrime(div)) {
  //     primes.push(div);
  //   }
  //   div += 2;
  // }
  // return primes.reduce((a, b) => (a + b))
}

console.log(sumOfPrimes(2000000))  // 142913828922

// start = performance.now();
// sumOfPrimes(2000000);
// end = performance.now();