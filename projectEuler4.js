// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

let largestPalindromeNumber = function () {

  let firstNum = 999;
  let secondNum = 999;
  let largestPalindrome = 0

  for (let i = firstNum; i > 0; i --) {
    for (let j = secondNum; j > 0; j --) {
      // this will reverse a number by changing it to a string, split, reverse the order then join then set it back to a number
      let reversedProduct = Number(String(i * j).split('').reverse().join(''));
      let product = i * j;
      if (product === reversedProduct && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }
  return largestPalindrome
}

console.log(largestPalindromeNumber()) //906609

// console.log((String(995).split('').reverse().join('')))