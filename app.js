//Object Creator

function createMyObject() {
  return {
  	foo: "bar",
  	answerToUniverse: 42,
  	"olly olly": "oxen free",
  	sayHello: "hello"
  }
}

console.log(createMyObject);

//Object Updater

function updateObject(obj) {
}

updateObject.foo = "foo";
  updateObject.bar = "bar";
  updateObject.bizz = "bizz";
  updateObject.bang = "bang";
  
  console.log(updateObject);


  //Self Reference

  function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){
    	return this.firstName+" "+this.lastName;  //ask why do we need to return this vs console.log
    }
  };
  return person;
}

//Deleter 

function keyDeleter(obj) {
	delete obj.foo;					// why do we use the argument instead of the Object(sampleObj)
	delete obj.bar;
	return obj;
}

var sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang'
};




