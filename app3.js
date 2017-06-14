//Object initializers and methods

const loaf = {
	flour: 300,
	water: 210,
	hydration: function(){
		return (this.water/this.flour) * 100; //was saying that loaf was already declared, but why
											  //In {repl.it} said that FUNCTION.HYDRATION, but did not show a value
	}
}

console.log(loaf);
console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration);

//2. Iterating over object's properties

var name = {
	foo: "bizz",
	bar: "bang",
	fum: "fool",
	quux: "quisp",
	spam: "email"
	
};
	
for (let key in name) {
  console.log(name[key]); //This just displayed "Object Object"
}

//3. Arrays in objects

let food = {
	var meals =
	["breakfast", "second breakfast", "elevenses", "lunch", "afternoon tea", "dinner", "supper"]
	return meals[3];
}

console.log(food); //unexpected token at line 5

//4. Arrays of objects


const jobs = [

{
	name: 'Homer',
	jobTitle: 'Engineer',
},

{
	name: 'Peter',
	jobTitle: 'Taster',
},

{
	name: 'Bob',
	jobTitle: 'Cook',
},

];

jobs.forEach(function(jobs) {
	console.log(
		jobs.name + ' is a(n) ' + jobs.jobTitle);
});

//5. Properties 

const jobs = [

{
	name: 'Homer',
	jobTitle: 'Engineer',
	boss: 'Mr. Smithers',
},

{
	name: 'Peter',
	jobTitle: 'Taster',
	boss: 'Stewie'
},

{
	name: 'Bob',
	jobTitle: 'Cook',
	boss: 'Mr. Biggs'
},

{
	name: 'Mr. Biggs',
	jobTitle: 'Owner'
}

];

jobs.forEach(function(jobs) {
	if (jobs.boss === true) {
	console.log(jobs.jobTitle +" "+ jobs.name + " reports to " + jobs.boss);
}
	else {
	console.log(jobs.jobTitle +" "+ jobs.name + " doesn't report to anybody.");	
	}
});




























