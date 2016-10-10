

// Structure
// ------------------------------------------
var input  = document.querySelector('.age-check input');
var button = document.querySelector('.age-check button');
var p      = document.querySelector('.age-check p');


// Events
// ------------------------------------------
button.addEventListener('click', checkAge);


// Event Listeners
// ------------------------------------------
function checkAge(e) {
	var age = parseInt(input.value);
	var privilege = getPrivilege(age);
	displayPrivilege(privilege);
}


// Update page functions
// ------------------------------------------
function displayPrivilege(privilege) {
	p.innerHTML = privilege
}


// Determine the privilege to display
// ------------------------------------------

// TODO: write the getPrivilege function here
function getPrivilege(age) {
	age=parseInt(age);
	var privelege;
	if (age<16) {f
		//console.log(age)
		privelege="you cannot do much outside of going to school";
	} else if (age >=16 && age<18) {
		privelege= "you can drive";
	} else if (age >=18 && age<21) {
		privelege="you can vote";
	} else if (age >=21 && age<25) {
		privelege='you can drink alcohol';
	} else if (age >=25 && age<35) {
		privelege='you can rent a car';
	} else if (age >=35 && age<62) {
		privelege='you can run for president';
	} else if (age >=62){
		privelege='you can collect social security benefits';
	} else {
		console.error ("this is not number, age is a number!");
	}
	return privelege;
}





