var person = {
	name:"Irving", 
	age:23,
	description : function () {
		return "name: " + this.name + "\tage: " + this.age
	}
}

function alter(){
	document.getElementById('demo').innerHTML = "Hello World from JS";
}

function args_fun(arg1, arg2) {
	return arg1 * arg2 + Date();
}

function alter2() {
	document.getElementById('demo').innerHTML = person.description()
}

// String
function string_f() {
	var txt = "akljdfkasjfklsajdf"
	// string length
	txt.length
	// find first occurance
	txt.indexOf('jdf')
	txt.lastIndexOf('jdf')
}