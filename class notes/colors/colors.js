// 1. Single event listener instead of many (but funciton has conditionals)
// 2. Put event listener on parent element
// 3. Relies on the 'event bubble' model
// 4. use the .forget property
// 5. error checking to get the correct element


// what we can do with an element?
// classlist
// innerHTML
// textContent
// tagName


// Get Elements
var ul=document.querySelector('ul');
var teal=document.querySelector('.teal');
var navy=document.querySelector('.navy');
var steelblue=document.querySelector('.steelblue');


var body=document.querySelector('body');

//body.classList.add('steelblue');
//body.classList.add('teal');

//body.className='white';

// Events 
// create a bunch eventlistener so each of them calls a function

// Listeners

//teal.addEventListener('click', changeTeal);
//navy.addEventListener('click', changeNavy);
//steelblue.addEventListener('click', changeSteelblue);
ul.addEventListener ('click', changeColor)

// Event Handlers
function changeTeal() {
	body.className='teal';
}
function changeNavy() {
	body.className='navy';
}
function changeSteelblue() {
	body.className='steelblue';
}
function changeColor(event) {
	if (event.target.tagName!='LI') {
		console.log	('error!', event.target.tagName);
		return;
	}
	console.log('changecolor', event.target.className);
	body.className=event.target.className;
	// return early if li want clicked

}