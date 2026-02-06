function sumProductDigits(n1, n2) {
  let str1 = n1.toString();
  let str2 = n2.toString();

  // Make both strings the same length by padding with zeros at the start
  while (str1.length < str2.length) str1 = '0' + str1;
  while (str2.length < str1.length) str2 = '0' + str2;

  let sum = 0;

  // Multiply corresponding digits and add to sum
  for (let i = 0; i < str1.length; i++) {
    sum += Number(str1[i]) * Number(str2[i]);
  }

  return sum;
}

// Example usage
console.log(sumProductDigits(6, 34));     // Output: 24
console.log(sumProductDigits(123, 45));   // Output: (1*0)+(2*4)+(3*5)= 0+8+15=23
console.log(sumProductDigits(56, 78));    // Output: (5*7)+(6*8)=35+48=83
