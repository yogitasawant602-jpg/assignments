let string = 'INDIA';

// Convert string to array
let arr = string.split('');

// Use splice to modify
arr.splice(3, 0, 'O', 'N', 'E', 'S');

// Convert back to string
let result = arr.join('');

console.log(result);
