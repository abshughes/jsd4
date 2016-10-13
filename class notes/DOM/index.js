var ul=document.querySelector('.tacoList')
var li = document.createElement(li)
console.log(ul)

document.querySelector("body form");
// Technique 2: concatenating a bunch of items into string
function createMenuItemTemplate() {
	var template = "<li>" + "<p> Beef Taco</p>"+"<img src='http://pix.iemoji.com/images/emoji/apple/ios-9/256/taco.png	'>"+"</li>"
	console.log(template);
	li.innerHTML=template;
	console.log(li);
	ul.appendChild(li);
}

