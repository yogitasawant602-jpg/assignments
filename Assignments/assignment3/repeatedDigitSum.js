function repeatedDigitSum(num) {
  while (num >= 10) {
    num = num
      .toString()
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}

// Example
console.log(repeatedDigitSum(456));
