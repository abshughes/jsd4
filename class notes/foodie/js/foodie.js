// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");


// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler 
// ------------------------------------
function getRestaurants(event) {
	event.preventDefault();
	console.log('zip.value');
	var search = zip.value;
	var url='http://opentable.herokuapp.com/api/restaurants?zip='+search;
	jQuery.getJSON(url, updatePage);
	restaurants=document.querySelector('results')

	console.log('before looping', url.total_entries);


	restaurants.items.forEach(function(item) {
		console.log(item);
	});
	console.log("");


	for (entry=1; url.length; entry++) {
		console.log('started looping');
		console.log(entry);
		newRestaurant=document.createElement('li');
		//newRestaurant.innerHTML=url.restaurants.entry.name;
		newRestaurant.innerHTML="<li>"+url.restaurants.entry.name+"</li>";
		restaurants.appendChild(newRestaurant);
	}
}

restaurants=document.querySelector('results')



function updatePage (json) {

	console.log('updateRestaurants', json);

}

var url='http://opentable.herokuapp.com/api/restaurants?state=NY&page=3';
console.log(url.total_entries);

// Update page
// ------------------------------------
