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