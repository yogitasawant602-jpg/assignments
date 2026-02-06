let str = "JavaScript is very interesting";

// Convert to lowercase to simplify checking
str = str.toLowerCase();

let vowels = 0;
let consonants = 0;

for (let char of str) {
  if (char >= 'a' && char <= 'z') {
    if ('aeiou'.includes(char)) {
      vowels++;
    } else {
      consonants++;
    }
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
