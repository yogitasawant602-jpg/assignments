function countWords(paragraph) {
  return paragraph
    .trim()
    .split(/\s+/)
    .length;
}

// Example
let text = "JavaScript is a very powerful and popular programming language.";

console.log(countWords(text));
