//Object literal notation
var couch = {size: "large",
			 material: "leather"
};

//contructor function
function tv(size, resolution, brand) {
	this.size = '45in';
	this.resolution = '1080p';
	this.brand = 'LG';
}
var Paulstv = new tv("45in", "1080p", "LG");

//object.create
var Animal = {
	type: "vertebrates",
	displayType : function(){
		console.log(this.type);
	}
}
var animal1 = Object.create(Animal);
			  animal1.displaytype();