// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const sumMultiplesOf = () => {

  let total = 0;
  let number = 3;

  while (number < 1000) {
    if (number % 3 === 0 || number % 5 === 0) {
      total += number;
    }
    number += 1;
  }
  return total;
}

console.log(sumMultiplesOf()) // 233168