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

