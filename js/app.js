console.log("hooked upp")

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// var drawCircles = function(){
// 	for(i=0; i<100; i++){
// 		var cordx = Math.random()*800;
// 		var cordy = Math.random()*600;
// 		ctx.arc(cordx, cordy, 10, 0, Math.PI * 2, true);
// 		if( (cordx < 100)&&(cordy < 100) ||
// 			(cordx < 100)&&(100 < cordy < 400) ||
// 			(cordx < 100)&&(cordy > 400) ||
// 			(cordx > 100)&&(cordy<100) ||
// 			(cordx > 100)&&(cordy > 400) ||
// 			(cordx > 400)&&(100 < cordy < 400)
// 		){
// 			ctx.fillStyle = "green"
// 		} else {
// 			ctx.fillStyle = "blue"
// 		}
// 		ctx.fill();
// 		ctx.beginPath();
// 	}
//
// }

var picture = {
	rectangle: function(){
		ctx.fillStyle = "#DCE9E9"
		ctx.fillRect(100, 100, 300, 300)
	},
	circle: function(){
		ctx.arc(400, 200, 150, 0, Math.PI*2, true);
		ctx.fillStyle = "#DCE9E9"
		ctx.fill()
		ctx.beginPath()
	},
	bunny: function(){
		//tail
		ctx.arc(195, 380, 60, 0, Math.PI*2, true);
		ctx.fillStyle = "#DCE9E9"
		ctx.fill();
		ctx.beginPath();
		//body
		ctx.ellipse(290, 340, 100, 120, 40 * Math.PI/150, 0, 2 * Math.PI)
		ctx.fillStyle = "#DCE9E9"
		ctx.fill();
		ctx.beginPath();
		//head
		ctx.ellipse(370, 240, 85, 55, 45 * Math.PI/150, 0, 2 * Math.PI)
		ctx.fillStyle = "#DCE9E9"
		ctx.fill();
		ctx.beginPath();
		//ear1
		ctx.ellipse(330, 150, 95, 30, 45 * Math.PI/105, 0, 2 * Math.PI)
		ctx.fillStyle = "#DCE9E9"
		ctx.fill();
		ctx.beginPath();
		//ear2
		ctx.ellipse(310, 155, 92, 28, 45 * Math.PI/170, 0, 2 * Math.PI)
		ctx.fillStyle = "#DCE9E9"
		ctx.fill();
		ctx.beginPath();
	}

}
//

var drawCircles = function(){
	for(i=0; i<50; i++){
		var cordx = Math.random()*900;
		var cordy = Math.random()*600;
		ctx.arc(cordx, cordy, 10, 0, Math.PI * 2, true);
		ctx.fillStyle = "green"
		ctx.fill();
		ctx.beginPath();
	}
	picture.bunny();
	//picture.rectangle()
	//circle()
}

//decreases opacity of background when trivia question pops up
var decrOpacity = document.getElementsByClassName("lessOpaque");
var changeOpacity = function(){
	for(i=0; i<decrOpacity.length; i++){
		decrOpacity[i].style.opacity = "0.3";
	}
}

//restores opacity to 1
var restOpacity = function(){
	for(i=0; i<decrOpacity.length; i++){
		decrOpacity[i].style.opacity = "1";
	}
}

// var drawTriv = function(){
// 	ctx.beginPath();
// 	ctx.moveTo(300, 200);
// 	ctx.fillStyle = "#1F354B";
// 	ctx.fillRect(200, 200, 200, 200);
// }

//hide trivia q


var nextQ = document.getElementById("nextQ-btn")
nextQ.addEventListener("click", function(event){
	console.log("clicked");
	var changeOpacity = function(){
		var decrOpacity = document.getElementsByClassName("lessOpaque");
		for(i=0; i<decrOpacity.length; i++){
			decrOpacity[i].style.opacity = "0.3";
		}
	}
	changeOpacity();
	var showHidden = function(){
		var hidden = document.getElementsByClassName("hidden")
		for(i=0; i<hidden.length; i++){
			hidden[i].style.visibility = "visible";
		}
	}
	showHidden();
})


//I want at least 5 or 6 images to construct and i need about 10 questions per picture
//store in objects to organize code

//next step: figure out how to draw more complicated things in canvas
//list: bunny,


//have a function for each of these shapes/pictures, and give it a background-color that is the same as the canvas's background color. Embed this function in the draw circles function
