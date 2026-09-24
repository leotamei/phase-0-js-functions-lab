// Function 1: Calculate 10% tax on an amount
function calculateTax(amount) {
  return amount * 0.1;
}

// Function 2: Convert a string to uppercase
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Function 3: Return the larger of two numbers
function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}

// Function 4: Check if a word is a palindrome
function isPalindrome(word) {
  const normalized = word.toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

// Function 5: Calculate price after applying a percentage discount
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discountAmount;
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };