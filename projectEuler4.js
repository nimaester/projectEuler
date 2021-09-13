// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const largestPalindromeNumber = () => {
  let largest = 0;
  for (let i = 999; i !== 0; i--) {
    for (let j = 999; j !== 0; j--) {
      let product = i * j;
      let stringProduct = String(product);
      let reveseProduct = String(i * j)
        .split("")
        .reverse()
        .join("");
      if (stringProduct === reveseProduct && product > largest) {
        largest = product;
      }
    }
  }
  return largest;
};

console.log(largestPalindromeNumber()); //906609
