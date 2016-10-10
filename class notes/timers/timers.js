// JS timers

// 1. Onetime: Timeout
// setTimeout()

// 2. Repeated: Interval
// setInterval()


// This functions return a unique id, which you can assign to a variable ro not
// This unique id is audo increment

// setTimeout(changeGreen, 3000);
// clearTimeout();
// setInterval(changeYellow, 2000);
// clearInterval();



var color="red";
// global variable defined this way:
var timeId;
var flashId;



function changeColor () {
	if (color=='red') {
		changeGreen();
	} else if (color=='green') {
		changeYellow();
	} else if (color=='yellow') {
		changeRed();
	}
}

function start () {
	clearInterval(flashId);
	if (timeId==null) {
		timeId=setInterval(changeColor, 2000);	
	}
}

function stop () {
	clearInterval(timeId);
	//timeId=setInterval(nightMode, 500)
	timeId=null;

}

function changeGreen () {
	console.log("Green");
	color= 'green';
}


function flash() {
	changeYellow();
	stop();
	flashId=setInterval(nightMode, 1500);
}


function nightMode () {
	if (color=="yellow") {
		changeOff();
	} else if (color=='off') {
		color=changeYellow();
	}
}
		

function changeYellow () {
	console.log("Yellow");
	color= 'yellow';
}


function changeRed () {
	console.log("Red");
	color= 'red';
}

function changeOff () {
	console.log("OFF");
}