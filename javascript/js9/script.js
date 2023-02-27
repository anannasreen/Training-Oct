let classObj = {
  name: "class A",
  teacherName: "Mary",
  students: [
    {
      name: "Ravi",
      id: "101",
      marks: [
        { subject: "English", mark: 25 },
        { subject: "Maths", mark: 48 },
        { subject: "Physics", mark: 40 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 20 },
      ],
    },
    {
      name: "Aju",
      id: "102",
      marks: [
        { subject: "English", mark: 35 },
        { subject: "Maths", mark: 38 },
        { subject: "Physics", mark: 33 },
        { subject: "Chemistry", mark: 34 },
        { subject: "Computer", mark: 30 },
      ],
    },
    {
      name: "Mini SS",
      id: "103",
      marks: [
        { subject: "English", mark: 12 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 18 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 40 },
      ],
    },
    {
      name: "Binu",
      id: "104",
      marks: [
        { subject: "English", mark: 49 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 47 },
        { subject: "Chemistry", mark: 46 },
        { subject: "Computer", mark: 50 },
      ],
    },
  ],
};

function changeNameByIndex(index) {
  classObj.students[index].name = "Ravikumar";
  console.log(classObj.students[index]);
}
// changeNameByIndex(0);

const obj = {
  name: "Thomas",
  id: "105",
};

function addStudent(object) {
  const newArr = classObj.students.push(object);
  return classObj.students;
}

// console.log(addStudent(obj));

function printMarks(id) {
  for (i = 0; i < classObj.students.length; i++) {
    if (id === classObj.students[i].id) {
      let marksTotal = 0;
      let studentsMark = classObj.students[i].marks;
      for (i = 0; i < studentsMark.length; i++) {
        marksTotal = marksTotal + studentsMark[i].mark;
      }
      console.log(marksTotal);
    }
  }
}

// printMarks("102");

class SubjectMark {
  constructor(subject, mark) {
    this.subject = subject;
    this.mark = mark;
  }
}

class Student {
  constructor(name, id, marks) {
    this.name = name;
    this.id = id;
    this.marks = marks; //marks has to be an array of SubjectMark
  }
}

class GradeDivision {
  constructor(name, tname, students) {
    this.name = name;
    this.teacherName = tname;
    this.students = students; //has to be an array of Student
  }
}

function createTypedClassObject(obj) {
  let studentList = [];
  obj.students.forEach((student) => {
    studentList.push(
      new createNewStudent(student.name, student.id, student.marks)
    );
  });
  let typedClassObj = new GradeDivision("5th Grade", "Mary", studentList);
  return typedClassObj;
}

createTypedClassObject(classObj);

function createNewStudent(name, id, marks) {
  let markList = [];
  marks.forEach((mark) => {
    markList.push(new SubjectMark(mark.subject, mark.mark));
  });

  let studentObj = new Student(name, id, markList);
  return studentObj;
}

let typedClassObj = createTypedClassObject(classObj);
//this is the typed object
console.log(typedClassObj);
printNameID(typedClassObj);

typedClassObj.students.push(
  createNewStudent("Janvy", "105", [
    { subject: "English", mark: 50 },
    { subject: "Chemistry", mark: 75 },
  ])
);

function printNameID(obj) {
  obj.students.forEach((student) => {
    console.log("Name", student.name, "ID:", student.id);
  });
}

console.log("------------------");
printNameID(typedClassObj);
console.log(typedClassObj);

// addNewStudent(classObj)

// function changeNameOfStudent() {
//   classObj.students[4].name = "Thomas";
// }

// changeNameOfStudent();

function changeNameUsingId(obj, name, id) {
  for (let key of obj.students) {
    if (id === parseInt(key.id)) {
      key.name = name;
    }
  }
}

changeNameUsingId(typedClassObj, "Jack", 102);
console.log(typedClassObj);

let individualMarksArray = [];
function printMarks(id, students) {
  x = students.find((student) => {
    return student.id === id;
  });
  console.log(x);

  total = 0;
  x.marks.forEach((mobj) => {
    console.log(mobj.subject, mobj.mark);
    total += mobj.mark;
  });

  console.log("total", total);

  totalFromReduce = x.marks.reduce((total, mobj) => {
    return total + mobj.mark;
  }, 0);

  console.log("totalfromReduce", totalFromReduce);
  console.log(individualMarksArray);

  var totalMarks = individualMarksArray.reduce((total, mark) => {
    return total + parseInt(mark);
  }, 0);
  console.log(totalMarks);
}

printMarks("101", classObj.students);

copyOfStudents = classObj.students.map((val) => {
  total = val.marks.reduce((total, mobj) => {
    return total + mobj.mark;
  }, 0);

  return {
    name: val.name,
    id: parseInt(val.id),
    totalMarks: total,
  };
});

console.log(copyOfStudents);

copyOfStudents.name = "Class B";
console.log(classObj);
console.log(copyOfStudents);

let a = { key: 20 };
let b = a;
b.key = 30;
