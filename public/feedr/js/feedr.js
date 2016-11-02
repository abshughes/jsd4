// Elements from HTML
var guardianButton = document.querySelector("#button-guardian");
var main = document.querySelector("#main");
var guardianTemplate = document.querySelector("#news-guardian");
guardianButton.addEventListener('click', getGuardianNews);


function getGuardianNews(event) {
	//event.preventDefault();
	var url = "http://content.guardianapis.com/search?show-tags=keyword&show-fields=thumbnail&api-key=06d1d01a-bd75-44b8-81d6-ef9c7256c9c7";
	jQuery.getJSON(url, populateGuardianNews);
}

function populateGuardianNews(json) {
	main.innerHTML = '';
	var guardianTemplateFn = Handlebars.compile(guardianTemplate.innerHTML);
	main.innerHTML = guardianTemplateFn(json);
}


