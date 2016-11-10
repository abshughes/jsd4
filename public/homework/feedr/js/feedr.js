// Elements from HTML

// Elements
var guardianButton = document.querySelector("#button-guardian");
var main = document.querySelector("#main");
var popUp = document.querySelector("#popUp");
var popUpContainer = document.querySelector("#popUp .container");
var closePopUp = document.querySelector(".closePopUp")
var searchButton=document.querySelector('#searchButton')
var searchField=document.querySelector('#search')
var searchItem=document.querySelector('#formInput');

//Templates
var guardianNews = document.querySelector("#news-guardian");
var guardianPopUp = document.querySelector("#news-guardian-popup");
var guardianNewsPics = document.querySelector("#news-guardian .thumbnail");

// Events

// //search button
// searchButton.addEventListener('click', searchPress)
// //search form
// searchField.addEventListener('click', searchForm)
// menu
guardianButton.addEventListener('click', populateNews);
//for Popup
main.addEventListener("click", showPopUp);
// close Popup
closePopUp.addEventListener('click', quitPopUp);

// store URL in the variable
var url_default="https://content.guardianapis.com/search?show-fields=trailText&show-tags=keyword&from-date=2016-01-01&api-key=06d1d01a-bd75-44b8-81d6-ef9c7256c9c7"
var url_trumbnail = url_default+"&show-fields=thumbnail"
var url_trailText = url_default+"&show-fields=url_trailText"
// storing request in the variable
var dataGuardian=jQuery.getJSON(url_trumbnail);
var dataGuardian_text=jQuery.getJSON(url_trailText);



// Functions
// function searchPress(event){
// 	event.preventDefault();
// 	search.classList.toggle("active");
// }

// function searchForm(event){
// 	return url_default=url_default+searchItem.innerHTML;
// 	console.log(url_default)
// }

function populateNews(json) {
 	event.preventDefault();
 	main.innerHTML = '';
 	var guardianNewsFn = Handlebars.compile(guardianNews.innerHTML);
 	main.innerHTML = guardianNewsFn(dataGuardian.responseJSON);
 };

function showPopUp(event) {
	event.preventDefault();
	var target = event.target.closest('article');

	//console.log('targetId', dataGuardian.responseJSON.response.results[0])
	popUp.classList.remove("loader"); 
	popUp.classList.toggle("hidden");
	//popUpContainer.innerHTML = '';
	//console.log(popUpContainer);
	dataGuardian_text.responseJSON.response.results.forEach(function (x) {
		if (target.id == x.id) {
			//console.log(x.id, target.id)
			var guardianPopUpFn  = Handlebars.compile(guardianPopUp.innerHTML);
			console.log(popUpContainer);
			popUpContainer.innerHTML = guardianPopUpFn(x);
		};
	});

}
//console.log(dataGuardian);


function quitPopUp(event) {
	popUp.classList.toggle("hidden");	
}

