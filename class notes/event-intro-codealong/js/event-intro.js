// Create an event


var counter=0;

var main=document.querySelector('main');

// Create Element
var p=document.createElement("p");
p.innerHTML=counter;
main.appendChild(p);

// Create Event
var me=document.createEvent("mouseEvent");
me.initEvent('click');

// Event Listener
p.addEventListener("click", clickCircle)

//me.initEvent('click');

//console.log('what is the type of the event');	
//console.log(me.type);

// dispatching an event on a variable
// Generating ourselves
// event was dispatched to an element

//main.dispatchEvent(me);

//console.log('what is the target of the event');	
//console.log(me.target);

// Listening to an Event
// Element is listening to an event

// Event Handler callback function

function clickCircle (event) {
	counter++;
	console.log('count', counter);
	console.log("type", event.type);
	console.log("type", event.target);
	console.log("content", event.target.innerHTML);
	p.innerHTML=counter
	//doThis();
	//doThat();
}






