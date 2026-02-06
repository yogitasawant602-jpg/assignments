function sumNumbers(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log(sumNumbers([10, 20, 30, 40]));
