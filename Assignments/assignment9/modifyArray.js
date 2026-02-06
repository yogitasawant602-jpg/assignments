function modifyArray(arr) {
  arr.push("NewItem"); // add element
  arr.pop();           // remove last element
  return arr;
}

console.log(modifyArray(["A", "B", "C"]));
