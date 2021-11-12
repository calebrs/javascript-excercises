function createStudent(student, year) {
  return {
    student,
    year,
    courses: [],
    notes: [],
    
    info: function() {
      console.log(`${this.student} is a ${year} year student`);
    },
    
    addCourse: function(courseObj) {
      this.courses.push(courseObj);
    },
    
    listCourses: function() {
      this.courses.forEach(course => {
        console.log(course);
      })
    },
    
    addNote: function(courseID, note) {
      let newNote = {code: courseID, note: note};
      this.notes.push(newNote);
    },
    
    getCourseName: function(ID) {
      let courseName = '';
      
      this.courses.forEach(course => {
        if (course['code'] === ID) {
          courseName = course['name'];
        }  
      })
      
      return courseName;
    },
    
    updateNote: function(courseID, newNote) {
      this.notes.forEach(note => {
        if (note.code === courseID) {
          note.note = newNote; 
        }
      })
    },
    
    viewNotes: function() {
      this.notes.forEach(note => {
        console.log(`${this.getCourseName(note.code)}: ${note.note}`);
      })
    },
  }
}


// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
let foo =
{
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
}

let bar =
{
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
}

let qux =
{
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
}


/*
addstudent: adds a student by creating one and adding to a collection. Year as a constraint
enrollstudent: enrolls a student in a course
addGrade: adds the grade of a student in a course
getreportcard logs the grades of a student for all courses
coursereport logs the grades of all students in a given course. Only the students with grades are int he course

*/
let school = {
  students: [qux, bar, foo],
  
  addStudent: function(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      this.students.push(createStudent(name, year))
    } else {
      return 'Invalid Input';
    }
  },
  
  enrollStudent: function(studentName, courseName, courseID) {
    this.students.forEach(student => {
      if (studentName === student.name) {
        student.courses.push({name: courseName, code: courseID});
      }
    })
  },
  
  addGrade: function(studentObj, courseName, grade) {
    let student = this.students[this.students.indexOf(studentObj)];
    student.courses.forEach(course => {
      if (courseName === course.name) {
        course.grade = grade;
      } 
    })
  },
  
  getReportCard: function(studentObj) {
    studentObj.courses.forEach(course => {
      if (course.grade === undefined) {
        console.log(`${course.name}: In progress`);
      } else {
        console.log(`${course.name}: ${course.grade}`);
      }
    })
  },
  
  courseReport: function(courseName) {
    let total = 0;
    let numberOfStudents = 0;
    
    console.log(`==${courseName} Grades==`);
    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === courseName) {
          numberOfStudents += 1;
          total += course.grade;
          console.log(`${student.name}: ${course.grade}`);
        }
      })
    })
    console.log(`Course Average: ${total / numberOfStudents}`);
  },
}

//school.addGrade(bar, 'Math', "B+");
// school.enrollStudent('bar', 'Music', 143);
// school.getReportCard(foo);
school.courseReport('Math');
// console.log(foo);








// let foo = createStudent('foo', '1st');
// foo.info();
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();