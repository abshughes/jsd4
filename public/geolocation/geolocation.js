// https://developer.mozilla.org/en-US/docs/Web/API/Coordinates

apiKeyGoogleMaps='AIzaSyCTiL-Pzec3IsWb8DKLQfxqsleSSdKg22k'
// google maps API Example
//https://developers.google.com/maps/documentation/javascript/tutorial

// creating callback function because google map needs it
// JSON P
function initMap(){
	console.log('initMap');
}

// Elements
var button=document.querySelector('#button');
var myLocation=document.querySelector('#my-location');

button.addEventListener('click', getPosition);

// setup callback when position is determined
// use the geolocation API

// setting up geolocation API and callback function
function updateLocation(position){
	console.log('updateLocation');
	console.log(position);
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	createGoogleMap(latitude, longitude);
};

function getPosition(e){
	navigator.geolocation.getCurrentPosition(updateLocation);
}

// Google Maps API part I 
// can use position.coords object to pull everything nessesary
function createGoogleMap(latitude, longitude){
	var el = document.querySelector('#google-map');
	// var options={
 //  		center: {lat: -34.397, lng: 150.644},
 //  		zoom: 8
 //  	};
 	var options={
  		center: {lat: latitude, lng: longitude},
  		zoom: 15
  	};
 
  	// map is a conctructor which expects element and options
  	// returns map object
  	var map = new google.maps.Map(el, options);
	
	var marker = new google.maps.Marker({
		map: map, 
		position: {lat:latitude, lng: longitude	}

	});

}