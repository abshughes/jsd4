//Host Objects
//1. Navigator
//2. Window
//3. Document




//querySelector()
// Input ->(argement here, strinng) -> querySelector() -> Element


//createElement()
// Input ->(argument here, string) ->  createElement() -> Element

//appendChild()
//Add child to the parent

console.log('document.querySelector("ul")');
console.log(document.querySelector("ul"));



//console.log('document.querySelector("li")');
//console.log(document.querySelector("li"));

//console.log('document.querySelector("body .brands li:nth-child(2)")');
//console.log(document.querySelector("body .brands li:nth-child(2)"));


var brands = document.querySelector(".brands");
var seaotter = document.querySelector(".otter");

li = document.createElement('li');
brands.appendChild(li);
li.appendChild(seaotter);



