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
Zoo.animalTypes = [ "Bears", "Lions", "Elephants", "Monkeys" ];
Zoo.animals = [];

//constructor functions
Zoo.Bears = function (name, type, sound){
	this.name = name;
	this.type = type;
	this.sound = sound;

	Zoo.animals.push(this);
};

Zoo.Lions = function (name, type, sound){
	this.name = name;
	this.type = type;
	this.sound = sound;

	Zoo.animals.push(this);
};	

Zoo.Elephants = function (name, type, sound){
	this.name = name;
	this.type = type;
	this.sound = sound;

	Zoo.animals.push(this);
};

Zoo.Monkeys = function (name, type, sound){
	this.name = name;
	this.type = type;
	this.sound = sound;

	Zoo.animals.push(this);
};

Zoo.getAnimalCountByType = function (type, animals){
	var count = 0;

	for (var i = 0; i < Zoo.animals.length; i++) {
		var animal = animals[i];
		if(animal.type == type) count++;
	}; 

	var name = type.toLowerCase() + 'Count: ';
	console.log(name, count);
	return count;
	/*
	1. Refer animal to a type
		if(animal.type = type) console.log( type, count)
	2. Function counts objects with same type property
	3. Console displays number of objects by type with name 
	*/
}


//Individual animals
var Joe = new Zoo.Bears( 'Joe',  'Bears', 'Grr');

var Bob = new Zoo.Bears( 'Bob', 'Bears', 'Grr');

var Leo = new Zoo.Lions( 'Leo', 'Lions', 'Roar');

var Lio = new Zoo.Lions( 'Lio', 'Lions', 'Roar');

var Dumbo = new Zoo.Elephants( 'Dumbo', 'Elephants', 'Something');

var Dimbo = new Zoo.Elephants( 'Dimbo', 'Elephants', 'Something');

var Abu = new Zoo.Monkeys( 'Abu', 'Monkeys', 'Ooh');

var Apu = new Zoo.Monkeys( 'Apu', 'Monkeys', 'Ooh');


Zoo.getAnimalCountByType('Bears', Zoo.animals);
/*
- Make the count method log the count out automatically

- It should make the name of the thing to be counted dynamically
with exactly the same capitalization and all.
*/

var lionCount = Zoo.getAnimalCountByType('Lions', Zoo.animals);

var elephantCount = Zoo.getAnimalCountByType('Elephants', Zoo.animals);

var monkeyCount = Zoo.getAnimalCountByType('Monkeys', Zoo.animals);

