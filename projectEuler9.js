// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2

// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


// has to be a pythagorean triplet a**2 + b**2 = c**2
// need to find numbers when added to each other = 1000
// brute force?
// return the product of those 3 numbers
const pythagoreanTriplet = function (num1, num2, num3) {

  // tried using recursion... no good. Fix later
  // if ((num1 ** 2) + (num2 ** 2) === (num3 ** 2) && num1 + num2 + num3 == 1000) {
  //   return num1 * num2 * num3;
  // } else {
  //   return pythagoreanTriplet(num1 + 1, num2 + 1, num3 + 1)
  // }

  for (let num1 = 1; num1 < 500; num1 ++) {
    for (let num2 = 2; num2 < 500; num2 ++) {
      for (let num3 = 3; num3 < 500; num3 ++) {
        if ((num1 ** 2) + (num2 ** 2) === (num3 ** 2) && num1 + num2 + num3 == 1000) {
          return num1 * num2 * num3;
        }
      }
    }
  }
}

console.log(pythagoreanTriplet(1,2,4)) //31875000
