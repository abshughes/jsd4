// Elements from HTML

// Buttons
var guardianSeaOttersButton = document.querySelector("#button-seaotters-guardian");
var guardianPolarBearsButton = document.querySelector("#button-polarbears-guardian");
var guardianSlothsButton = document.querySelector("#button-sloths-guardian");


//Elements
var main = document.querySelector("#main");
var popUp = document.querySelector("#popUp");
var article = document.querySelector("#article");


function showPopUp() {
	event.preventDefault();
	target = event.target.closest("article");
	id = target.id;
	console.log(id);
	popUp.classList.toggle("loader");
	popUp.classList.toggle("hidden");
}


var guardianSeaOttersTemplate = document.querySelector("#news-seaotters-guardian");
var guardianPolarBearsTemplate = document.querySelector("#news-polarbears-guardian");
var guardianSlothsTemplate = document.querySelector("#news-sloths-guardian");
var popUpTemplate = document.querySelector("#popUpTemplate");


//Event handlers

main.addEventListener("click", showPopUp);

guardianSeaOttersButton.addEventListener('click', getGuardianSeaOtterNews);
guardianPolarBearsButton.addEventListener('click', getGuardianPolarBearsNews);
guardianSlothsButton.addEventListener('click', getGuardianSlothsNews);

//main.addEventListener('click', openPopUpWindow);


function getGuardianSeaOtterNews(event) {
	//event.preventDefault();
	var url = "http://content.guardianapis.com/search?show-tags=keyword&from-date=2016-01-01&q=sea%20otter&show-fields=thumbnail&api-key=06d1d01a-bd75-44b8-81d6-ef9c7256c9c7";
	jQuery.getJSON(url, populateGuardianSeaOtterNews);
}

function populateGuardianSeaOtterNews(json) {
	main.innerHTML = '';
	var guardianSeaOttersTemplateFn = Handlebars.compile(guardianSeaOttersTemplate.innerHTML);
	main.innerHTML = guardianSeaOttersTemplateFn(json);
}

 function openPopUpWindow(event) {
 	console.log('clici!!');
 	//event.preventDefault();
 	var url = "http://content.guardianapis.com/search?show-tags=keyword&from-date=2016-01-01&q=sea%20otter&show-fields=thumbnail&api-key=06d1d01a-bd75-44b8-81d6-ef9c7256c9c7";
 	jQuery.getJSON(url, getDetails);
 }



function getGuardianPolarBearsNews(event) {
	//event.preventDefault();
	var url = "http://content.guardianapis.com/search?show-tags=keyword&from-date=2016-01-01&q=polar%20bear&show-fields=thumbnail&api-key=06d1d01a-bd75-44b8-81d6-ef9c7256c9c7";
	jQuery.getJSON(url, populateGuardianPolarBearsNews);
}

function populateGuardianPolarBearsNews(json) {
	main.innerHTML = '';
	var guardianPolarBearsTemplateFn = Handlebars.compile(guardianSeaOttersTemplate.innerHTML);
	main.innerHTML = guardianPolarBearsTemplateFn(json);
}

function getGuardianSlothsNews(event) {
	//event.preventDefault();
	var url = "http://content.guardianapis.com/search?show-tags=keyword&from-date=2016-01-01&q=sloth&show-fields=thumbnail&api-key=06d1d01a-bd75-44b8-81d6-ef9c7256c9c7";
	jQuery.getJSON(url, populateGuardianSlothsNews);
}

function populateGuardianSlothsNews(json) {
	main.innerHTML = '';
	var guardianSlothsTemplateFn = Handlebars.compile(guardianSlothsTemplate.innerHTML);
	main.innerHTML = guardianSlothsTemplateFn(json);
}
