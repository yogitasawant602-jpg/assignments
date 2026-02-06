const students = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  }
};

// Calculate average
const result = Object.fromEntries(
  Object.entries(students).map(([studentName, subjects]) => {
    const scores = Object.values(subjects);
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return [studentName, { average }];
  })
);

console.log(result);
