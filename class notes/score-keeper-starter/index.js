//var counter=document.querySelector('#score');
//console.log(counter;


var counter=0;

var score=document.querySelector('#score');
score.innerHTML=counter;

var buttonAdd=document.querySelector('#increase-5');
var buttonSubtract=document.querySelector('#decrease-5');
var fieldCustomScore=document.querySelector('#custom-score');
var buttonCustomScore=document.querySelector('#submit-custom-score');


buttonAdd.onclick = function() {
	counter=counter+5;
	console.log('added five', counter);
	console.log();
	score.innerHTML=counter + " points";
};

buttonSubtract.onclick = function(){
	counter=counter-5;
	score.innerHTML=counter + " points";
};

buttonCustomScore.onclick=function(){
	counterTemp = fieldCustomScore.value;
	console.log(Number(counterTemp)	== counterTemp);
	if (Number(counterTemp) == counterTemp){
		counter=Number(counterTemp);
	} else {
		console.log ('this is not a number');
	}
	score.innerHTML=counter + " points";
};

