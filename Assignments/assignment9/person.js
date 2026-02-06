const person = {
  name: "Yogita",
  age: 22,
  occupation: "Student"
};

function greetPerson(obj) {
  console.log(
    "Hello, my name is " + obj.name +
    ". I am " + obj.age +
    " years old and I am a " + obj.occupation + "."
  );
}

greetPerson(person);
