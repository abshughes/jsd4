


// Elements
// ------------------------------------------
stringOneOne="bottle of beer on the wall."
stringOneDef="bottles of beer on the wall."
stringTwo="Take one down and pass it around"


for (i = 1; i < 99; i++ ) {
	beerNumber=100-i;
	console.log(String(beerNumber)[String(beerNumber).length-1]);
	console.log(String(beerNumber)[String(beerNumber).length-1]=="1");
	
	if (String(beerNumber)[String(beerNumber).length-1]=="1") { 
		stringOne=stringOneOne;
	} else {
		stringOne=stringOneDef;
	};

	var beerOne=document.createElement('li');
	var beerTwo=document.createElement('li');
	beerOne.innerHTML= String(beerNumber).concat(" ", stringOne," ", beerNumber, " " ,stringOne.substring(0, 15), " ",
		stringTwo.concat(", ", String(beerNumber), " ", stringOne));

	// getting the element where beer is going to belong to
	var code=document.querySelector(".output");
	code.appendChild(beerOne);
	
	
}


// Update page
// ------------------------------------------

console.log("99 bottles of beer on the wall!");