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

// // you can pass in `scratchData` to test out `findByid`
// // your function
// var scratchData = [
//   {id: 22, foo: 'bar'},
//   {id: 28, foo: 'bizz'},
//   {id: 19, foo: 'bazz'}
// ];

// function findById(items, idNum) {
//   return items.find(function(item) {
//     return item.id === idNum;
//   });
  
//   // could also be implemented without using `.find`
//   // using plain old looping like this:
//   // 
//   // for (var i=0; i<items.length; i++) {
//   // if (items[i].id === idNum) {
//   //    return items[i];
//   //  }
//   // }
//  }


//Object Keys 

// running the function with `objectA` and `expectedKeys`
// should return `true`
var objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
}

// running the function with `objectA` and `expectedKeys`
// should return `false`
var objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
}

var expectedKeys = [
  'id', 'name', 'age', 'city'
];

function validateKeys(object, expectedKeys) {  
if (objectA.key() === expectedKeys.key) {
  return true
}
else if (objectA.key !== expectedKeys.key) {
  return false 
}
return objectB
}


// var objectA = {
//   id: 2,
//   name: 'Jane Doe',
//   age: 34,
//   city: 'Chicago'
// }

// var objectB = {
//   id: 3,
//   age: 33,
//   city: 'Peoria'
// }

// var objectC = {
//   id: 9,
//   name: 'Billy Bear',
//   age: 62,
//   city: 'Milwaukee',
//   status: 'paused'
// }


// var expectedKeys = [
//   'id', 'name', 'age', 'city'
// ];

// function validateKeys(object, expectedKeys) {
  
//   // if there's not the same number of object keys
//   // and expected keys, then we know there are missing or
//   // extra keys, so return false
//   if (Object.keys(object).length !== expectedKeys.length) {
//     return false;
//   }
  
//   // we iterate over each expected key and verify that
//   // it's found in `object`.
//   for (var i; i<expectedKeys.length; i++) {
//     if (!Object.keys(object).find(function(key) {
//       return key === expectedKeys[i];
//     })) {
//       return false;
//     }
//   }
//   // if we get to this point in our code, the keys are valid
//   // so we return `true`
//   return true;
// }



// 