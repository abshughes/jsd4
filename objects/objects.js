//Objects
//- key/value pairs (Nouns)
//- is another data type



//Methods
//- function in object (Verb)


//Events
//- click: call method on object


//Object={
//property:value,
//property:value, 
//method: function()
//}

// value can be any data type (including object, object in object)

// Objects collection of properties and methods 
// name is identifier



// Example of Objects:
//1. Native language	
//Math
//JSON
//2. Host
// Navigator
// Window
// Document
//3. Data
// Math.
// navigator - specifying the browser
// 

flight={
	origin: 		'SFO',
	destination: 	'DEN',
	departure_time: '07:00',
	arrival_time: 	'11:30', 
	airline: 		'FML',
	wifi: 			false, 
	distance: 		800, 
	status: 		'delayed'
};

var car={
	make: 'Subaru', 
	model: 'Forester', 
	year: 2013, 
	color: 'green', 
	insurance: {
		provider: 'Geico', 
		policy: '3482087'
	},
	miles: 45700, 
	running: false, 
	start: function() {
		car.on=true;
	},
	stop: function() {
		car.on=false;
	},
	addMile: function() {	
		car.miles++;
	}
};

var colors=['red', 'green', 'white'];

// Here are two different notations to access objects:
// dot notation
// bracket notation

//Arrays need to use bracket notation because you can't start property name from a number

//Print all keys
for (i in car) {
	console.log(i);
};


bmw={
	on:false, 
	start: function() {
		this.on=true;
	},
	stop: function() {
		this.on=false;
	}

}

//calculate the length of the object: how many 1-st level keys



// is getting some stuff from API, use ['VarNAME___DDDD'] instead of .VarNAME___DDDD to show its foreign



//Add one to any value i on the Object
//car.miles++

//car.miles+=1
 


// "__self" is JS is "this"

// Practicing

// Reporting software analyzes the snow removal performance of each snow plow driver in the city.


snowPlower={
	id: 'SP101', 
	max_capacity: 5,
	snow_melted: 0, 
	snow_collected: 0, 
	melting_mode:false, 
	hours_spent: 0,

	start: function() {
		this.melting_mode=true
	}, 

	stop: function() {
		this.melting_mode=false
	}, 

	addSnow: function() {	
		if (this.melting_mode==false && this.snow_collected<this.max_capacity) {
			this.snow_collected++;
			this.hours_spent++
		} else if (this.melting_mode) {
			if (this.snow_collected>0) {
				this.snow_collected=this.snow_collected-1;
				this.snow_melted++	
			}
			this.hours_spent++;
		}
	}, 
}


// AJAX/AJAJ


// Constructor

// Prototypes
// Notation: __prototype




 // A user who had reserved a Zipcar arrives to find it has not been returned yet, and customer service transfers her reservation to an available car.

var zipcar1 = {
    status: "not available",
    pickup: function(){
        if (this.status == "not available") {
            return "Car not available. Call customer service & complain";
        }
        if (this.status == "available") {
            this.status = "in use";
            return "Off you go!";
        }
    },
    return: function(){
        if (this.status == "in use") {
            this.status = "available";
            return "Hope you had a nice ride!";
        }
        else return "You are not driving";
    }
};

var zipcar2 = {
    status: "available",
    pickup: function(){
        if (this.status == "not available") {
            return "Car not available. Call customer service & complain.";
        }
        if (this.status == "available") {
            status = "in use";
            return "Off you go!";
        }
    },
    return: function(){
        if (this.status == "in use") {
            this.status = "available";
            return "Hope you had a nice ride!";
        }
        else return "You are not driving";
    }

};

var zipcars = [zipcar1, zipcar2];

var reservation = {
    zipcar: zipcars[0],
    transfer: function(){
        this.zipcar = zipcars[1];
        return "You're all set sir, thank you for being a loyal customer";
    }
};

var person = {
    firstname: "Bob",
    lasname: "Boberson",
    plan: "Get to band practice",
    reservation: reservation,
    pickup: function(){
        return this.reservation.zipcar.pickup();
    },
    complain: function() {
        return this.reservation.transfer();
    },
    return: function() {
        return this.reservation.zipcar.return();
    }
}


// Constructor

// Turn that
//var Zipcar = function() {
//	status: 'not available',
//}

// into this
var Zipcar = function(blah) {
	this.status=blah;
}

//Making a prototype is making a "mold" so that objects can be "molded" into the prototype

Zipcar.prototype={
    pickup: function(){
        if (this.status == "not available") {
            return "Car not available. Call customer service & complain.";
        }
        if (this.status == "available") {
            status = "in use";
            return "Off you go!";
        }
    },
    return: function(){
        if (this.status == "in use") {
            this.status = "available";
            return "Hope you had a nice ride!";
        }
        else return "You are not driving";
      }
};