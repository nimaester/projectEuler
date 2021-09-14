// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2

// For example, 3**2 + 4**2 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// has to be a pythagorean triplet a**2 + b**2 = c**2
// need to find numbers when added to each other = 1000
// brute force?
// return the product of those 3 numbers
const pythagoreanTriplet = () => {
  for (let i = 1; i < 500; i++) {
    for (let j = 1; j < 500; j++) {
      let k = Math.sqrt(i ** 2 + j ** 2);
      if (i + j + k === 1000) {
        return i * j * k;
      }
    }
  }
};

console.log(pythagoreanTriplet());
