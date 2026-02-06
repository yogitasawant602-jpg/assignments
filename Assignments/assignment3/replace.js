function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

// Example
let str = "I lovee my India";
let result = correctfn(str, "lovee", "love");

console.log(result);
