// Firebase application setup
// ------------------------------------------------
var config = {
	apiKey: "AIzaSyC8huD2o4iVuR9WyGkNyM-C__yThGE52Ow",
   	authDomain: "fanpage-6ab7b.firebaseapp.com",
   	databaseURL: "https://fanpage-6ab7b.firebaseio.com",
   	storageBucket: "fanpage-6ab7b.appspot.com",
   	messagingSenderId: "342996331107"
   };

firebase.initializeApp(config);


// Elements
// ------------------------------------------------

var form = document.querySelector("form");
var messageEl = document.querySelector("#message");
var messageBoard = document.querySelector(".message-board");

// Events
// ------------------------------------------------
form.addEventListener('submit', submitForm);
document.addEventListener('DOMContentLoaded', loadState);

function submitForm(event){
	event.preventDefault();
	var messageText=messageEl.value;
	//console.log('messageText', messageText);
	messageEl.value='';
	
	//console.log(messageText);
	
	var ref=db.ref('messages');
	

	var messageObj= {
		content:messageText,
		votes:0
	};
	ref.push(messageObj);
	//console.log('object',ref);
};

function loadState() {
	db.ref('messages').on('value', createMessages);
}

function createMessages(results){

	var newMessages = results.val();

	// reset message board

	messageBoard.innerHTML="";

	//for (var i in newMessages) {
	//	console.log(newMessages[i]);
	//	createMessages(newMessages[i]);
	//}
}

function createMessage(message) {
	var li=document.createElement('li');
	li.innerHTML=message.content;
	messageBoard.appendChild(li);
}

function destroyMessage(id) {
	//find message with object id = the id we are searching for

}


// Create Firebase application reference
// ------------------------------------------------
var db=firebase.database();
