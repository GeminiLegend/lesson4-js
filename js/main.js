/*
Zoo Application

The zoo should contain bears, lions, elephants, and monkeys.

The zoo should contain multiple animals of each type. 

The zoo should know how many animals it has of each type.

each animal should have a name, type, and make a sound.
*/
// global object Zoo 
// code to interface

window.Zoo = {}
Zoo.animalTypes = [ "Bear", "Lion", "Elephant", "Monkey" ];
Zoo.animals = [];

//Animal Class aka constructor function aka Super Class
Zoo.Animal = function(name, sound){
	this.name = name;
	this.sound = sound;
};

//Child of Animal aka Sub Class
Zoo.Bear = function(name, sound){
	Zoo.Animal.call(this, name, sound); //Calling the constructor of the parent
	
	this.type = 'Bear'
	this.sound = sound;

	Zoo.animals.push(this);
};

Zoo.Lion = function(name, sound){
	Zoo.Animal.call(this, name, sound); //Calling the constructor of the parent
	
	this.type = 'Lion'
	this.sound = sound;

	Zoo.animals.push(this);
};

Zoo.Elephant = function(name, sound){
	Zoo.Animal.call(this, name, sound); //Calling the constructor of the parent
	
	this.type = 'Elephant'
	this.sound = sound;

	Zoo.animals.push(this);
};

Zoo.Monkey = function(name, sound){
	Zoo.Animal.call(this, name, sound); //Calling the constructor of the parent
	
	this.type = 'Monkey'
	this.sound = sound;

	Zoo.animals.push(this);
};
//Linking the prototype chain
Zoo.Bear.prototype = new Zoo.Animal();

Zoo.Lion.prototype = new Zoo.Animal();

Zoo.Elephant.prototype = new Zoo.Animal();

Zoo.Monkey.prototype = new Zoo.Animal();


Zoo.Animal.prototype.countByType = function ( animals){
	var count = 0;
	var type = this.type;

	for (var i = 0; i < Zoo.animals.length; i++) {
		var animal = animals[i];
		if(animal.type == type) count++;
	}; 
		var nameOfType = type.toLowerCase() + 'Count: ';
	console.log(nameOfType, count);
	return count;
};

//Creating an instance of the Bear class
var rufus = new Zoo.Bear('Rufus', 'GrrrrBaaahhhhh');

var dufus = new Zoo.Bear('Dufus', 'GrrrrBaaahhhhh');

var leo = new Zoo.Lion('Leo', 'Roar')

var lio = new Zoo.Lion('Lio', 'Roar')

var dumbo = new Zoo.Elephant('Dumbo', 'Something')

var dimbo = new Zoo.Elephant('Dimbo', 'Something')

var abu = new Zoo.Monkey('Abu', 'Ooh')

var apu = new Zoo.Monkey('Apu', 'Ooh')

//Extending the prototype of the parent
Zoo.Animal.prototype.makeIntroduction = function(){
	console.log('Hello my name is ' + this.name);
}



//Hwk: Make this an instance method of all child instances so that you can ommit type from the argument list
/*Zoo.getAnimalCountByType = function (type, animals){
	var count = 0;

	for (var i = 0; i < Zoo.animals.length; i++) {
		var animal = animals[i];
		if(animal.type == type) count++;
	}; 

	var name = type.toLowerCase() + 'Count: ';
	console.log(name, count);
	return count;
}
*/

