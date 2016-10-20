// Setup
// ----------------------------------------------


// Structure
// ----------------------------------------------

// Buttons
var stopButton=document.querySelector('#stop-button');
var slowButton=document.querySelector('#slow-button');
var goButton=document.querySelector('#go-button');
var cautionButton=document.querySelector('#caution-button');

console.log(stopButton);

// Lights
var redLight=document.querySelector('#stop');
var orangeLight=document.querySelector('#slow');
var greenLight=document.querySelector('#go');


stopButton.onclick=function() {
	redLight.className='light stop-light';
	orangeLight.className='light';
	greenLight.className='light';
}

slowButton.onclick=function() {
	redLight.className='light';
	orangeLight.className='light slow-light';
	greenLight.className='light';
}

goButton.onclick=function() {
	redLight.className='light';
	orangeLight.className='light';
	greenLight.className='light go-light';
}


// Events
// ----------------------------------------------


// Event handlers
// ----------------------------------------------
