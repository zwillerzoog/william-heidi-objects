//Enroll in summer school 

var studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science'
  }
];

function enrollInSummerSchool(students) {
studentData.forEach(function(students){
  studentData.status = 'In Summer school';
  console.log(studentData);
})};

// //function enrollInSummerSchool(students) {
//   return students.map(function(student) {
//     return {
//       name: student.name,
//       status: 'In Summer school',
//       course: student.course
//     }
//   });
// }

//this creates a new array instead of rewriting the one we are working on 

//Find by ID

// you can pass in `scratchData` to test out `findByid`
// your function
var scratchData = [
  {id: 22, foo: 'bar'},
  {id: 28, foo: 'bizz'},
  {id: 19, foo: 'bazz'}
];

function findById(items, idNum) {
 for (let key in scratchData) {
  console.log(scratchData[key]);
 }
 return findById();
}








// 