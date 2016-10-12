// Elements
// ------------------------------------------
var form = document.querySelector("body form");


// Events
// ------------------------------------------
form.addEventListener('submit', createThing);


// Update page
// ------------------------------------------
function createThing(e) {
	e.preventDefault();
	
	console.log('createThing');
	
	// Step 0. Get the string from the form
	var thing=document.querySelector(".new-thing");
	console.log(thing);

	// good practice in to check whether the srting is empty first, because otherwise all those nasty nested conditionasl become ugly
	if (thing.value=="") {

		console.error("you must type in a value!");
		
		// Stops execution of a function
		// saves resources because program stops working here
		// useful fo validation, but in this case not really - event handlers never expect a return
		return;
	
	} else {
	
		// Step 1. Create an element
		var li = document.createElement('li');
		
		//Step 2: Assign the text
		li.innerHTML=thing.value;
		

		// Step 3. Get the element where I plan to insert a value
		things=document.querySelector(".things");
		
		// Step 4. Append a child element into parent
		things.appendChild(li);
		
		// Step 5. Clean up the form
		thing.value="";

	};
}

// Here is how we remove a child
things=document.querySelector(".things");
things.removeChild(document.querySelector(".things li:nth-child(3)"))
things.removeChild(document.querySelector(".things li:nth-child(2)"))
things.removeChild(document.querySelector(".things li:nth-child(1)"))


