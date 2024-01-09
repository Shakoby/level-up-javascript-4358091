// Write your code here
//array and object destructuring

//function getStudents(classroom) {}
//classroom = [Teacher ,TeachingAssistant, classList]

// let classesArr = ['teacher1', 'assTeacher1', 'std1','std2','std3'];

// let hasTeachingAssistant = true;
// let arr = ['name1', 'name2', 'name3', 'name4' ];

function getStudents(classroom) {
    let {hasTeachingAssistant, classList} = classroom

  if (hasTeachingAssistant) {
      [Teacher, AssistantTeacher, ...Students] = classList;
  } else {
     [Teacher, ...Students] = classList;
  }

  return Students;
};

getStudents({
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
})
