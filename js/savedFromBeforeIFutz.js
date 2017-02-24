archived app file

console.log("lalalal")
console.log("hooked upp")

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var scoreCounter = document.getElementsByTagName("h1")[0]
var body = document.getElementsByTagName("body")[0];
var score = document.getElementsByClassName("score");
var decrOpacity = document.getElementsByClassName("lessOpaque");
var hidden = document.getElementsByClassName("hidden");
var nextQuestion = document.getElementById("nextQ-btn")
var questionHeading = document.getElementsByTagName("h1")[1];
var answer1 = document.getElementsByTagName("li")[0];
var answer2 = document.getElementsByTagName("li")[1];
var answer3 = document.getElementsByTagName("li")[2];
var answer4 = document.getElementsByTagName("li")[3];
var hidden = document.getElementsByClassName("hidden");

// ctx.rect(10, 10, 100, 100);
// ctx.stroke();
// console.log(ctx.isPointInPath(10, 10));

var game = {
	score: 0,
	counter: 0,
	drawCircles: function(){
			for(i=0; i<100; i++){
				var cordx = Math.random()*900;
				var cordy = Math.random()*600;

				picture.bunny(cordx, cordy);
			}

			this.score += 10;
			scoreCounter.innerHTML = "Points: " + game.score;
			//picture.rectangle()
			//circle()
	},
	changeOpacity: function(){

		for(i=0; i<decrOpacity.length; i++){
			decrOpacity[i].style.opacity = "0.3";
		}
	},
	showHidden: function(){

		for(i=0; i<hidden.length; i++){
			hidden[i].style.visibility = "visible";
		}
	},
	restOpacity: function(){
		for(i=0; i<decrOpacity.length; i++){
			decrOpacity[i].style.opacity = "1";
		}
		for(i=0; i<hidden.length; i++){
			hidden[i].style.visibility = "hidden"
		}
	},
	nextQ: function(){

	}
}


nextQuestion.addEventListener("click", function(event){
	console.log("clicked");
	game.changeOpacity();
	game.showHidden();
	game.counter++;
	for(i=0; i<questionArray.length; i++){
		var q = game.counter - 1;
		questionHeading.innerHTML = questionArray[q];
		answer1.innerHTML = "A. " + a1Array[q];
		answer2.innerHTML = "B. " + a2Array[q];
		answer3.innerHTML = "C. " + a3Array[q];
		answer4.innerHTML = "D. " + a4Array[q];
	}
})

//
// for(i=0; i<arrayOfArrays.length; i++){
// 	arrayOfArrays[i].addEventListener("click", function(event){
// 		console.log("weeee");
// 		var z = arrayOfArrays[i];
// 		var q = game.counter - 1;
// 		if(z[q] === correctAnswer[q]){
// 			game.restOpacity();
// 			game.drawCircles()
// 			console.log("correct");
// 		}
// }
//
answer1.addEventListener("click", function(event){
	console.log("weeee");
	var q = game.counter - 1;
	if(a1Array[q] === correctAnswer[q]){
		game.restOpacity();
		game.drawCircles()
		console.log("correct");
	}

})

answer2.addEventListener("click", function(event){
	console.log("wooo");
	var q = game.counter - 1;
	if(a2Array[q] === correctAnswer[q]){
		console.log("correct")
		game.restOpacity();
		game.drawCircles()
	} else {
		console.log("not correct")
	}
})

answer3.addEventListener("click", function(event){
	console.log("waaaa");
	var q = game.counter - 1;
	if(a3Array[q] === correctAnswer[q]){
		console.log("correct")
		game.restOpacity();
		game.drawCircles()
	} else {
		console.log("not correct")
	}
})

answer4.addEventListener("click", function(event){
	console.log("wiiii");
	var q = game.counter - 1;
	if(a4Array[q] === correctAnswer[q]){
		console.log("correct")
		game.restOpacity();
		game.drawCircles()
	} else {
		console.log("not correct")
	}
})
//add event listener for each answer
//function for correct answerQ
//function for incorrect answer
//if correct answer and answer line up upon click, run "game.restOpacity" and "game.drawCircles"
//

var arrayOfArrays = [a1Array, a2Array, a3Array, a4Array]
var questionArray = ["Ordinary table salt is sodium chloride. What is baking soda?", "Plants receive their nutrients mainly from", "Plants have __________ while animals lack it.", "On which of the following did Gregor Mendel perform his famous experiment?"]
var a1Array = ["Potassium chloride", "Clorophyll.", "Starch", "Corn"]
var a2Array = ["Potassium carbonate", "The atmosphere.", "Cellulose", "Maize"]
var a3Array = ["Potassium hydroxide", "Soil", "Protein", "Pea"]
var a4Array = ["Sodium bicarbonate", "Light", "Fat", "Wheat"]
var correctAnswer = ["Sodium bicarbonate", "Soil", "Cellulose", "Pea"]


var picture = {
	rectangle: function(){
		ctx.fillStyle = "#D3E8D3"
		ctx.fillRect(100, 100, 300, 300)
	},
	circle: function(){
		ctx.arc(400, 200, 150, 0, Math.PI*2, true);
		ctx.fillStyle = "#D3E8D3"
		ctx.fill()
		ctx.beginPath()
	},
	drawC: function(context, x, y, someBool){
		context.restore()
		if (someBool === true){
			context.beginPath()
			context.arc(x, y, 5, 0, Math.PI * 2, true);
			context.fillStyle = "purple";
			context.fill();
			context.beginPath();
		}
		else{
			context.beginPath()
			context.arc(x, y, 5, 0, Math.PI * 2, true);
			context.fillStyle = "#1D381D";
			context.fill();
			context.beginPath();
		}
//if I can save the context of the path that i'm on, do that



	},
	bunny: function(x, y){
		//tail
		ctx.beginPath();
		ctx.arc(195, 380, 60, 0, Math.PI*2, true);
		console.log(ctx.isPointInPath(x, y), x, y)
		if(ctx.isPointInPath(x, y) === true){
			this.drawC(x, y, true, 'tail')
		}
		else {
			this.drawC(x, y, false, 'tail')
		}
		ctx.fillStyle = 'blue'
		ctx.fill()



//========================================================
		//body
		ctx.beginPath();
		ctx.ellipse(290, 340, 100, 120, 40 * Math.PI/150, 0, 2 * Math.PI)
		// ctx.fillStyle = "yellow"
		console.log(ctx.isPointInPath(x, y), ' body', x, y)
		// if(ctx.isPointInPath(x, y) === true){
		// 	this.drawC(x, y, true, 'body')
		// }
		// else {
		// 	this.drawC(x, y, false, 'body')
		// }
		ctx.fillStyle = 'blue'
		ctx.fill()
		//========================================================
		//head
		ctx.beginPath();
		ctx.ellipse(370, 240, 85, 55, 45 * Math.PI/150, 0, 2 * Math.PI)

		// if(ctx.isPointInPath(x, y) === true){
		// 	this.drawC(x, y, true, 'head')
		// }
		// else {
		// 	this.drawC(x, y, false, 'head')
		// }
		ctx.fillStyle = 'blue'
		ctx.fill()
		// ctx.fillStyle = "yellow"
		console.log(ctx.isPointInPath(x, y), ' heade', x, y)


		//========================================================
		//ear1
		ctx.beginPath();
		ctx.ellipse(330, 150, 95, 30, 45 * Math.PI/105, 0, 2 * Math.PI)
		ctx.fillStyle = "yellow"
		var context = ctx.save()
		if(ctx.isPointInPath(x, y) === true){
			this.drawC(context, x, y, true, 'ear1')
		}
		else {
			this.drawC(context, x, y, false, 'ear1')
		}
		ctx.fillStyle = 'blue'
		ctx.fill()
		console.log(ctx.isPointInPath(x, y), ' ear1', x, y)



		//ear2
		ctx.beginPath();
		ctx.ellipse(310, 155, 92, 28, 45 * Math.PI/170, 0, 2 * Math.PI)
		ctx.fillStyle = "yellow"
		var context = ctx.save()
		if(ctx.isPointInPath(x, y) === true){
			this.drawC(context, x, y, true, 'ear2')
		}
		else {
			this.drawC(context,x, y, false, 'ear2')
		}
		console.log(ctx.isPointInPath(x, y), ' ear2', x, y)
		ctx.fillStyle = 'blue'
		ctx.fill()


	}

}
var pictureArray = [picture.rectangle(), picture.circle(), picture.bunny()]






// var scoreCount = document.getElementsByClassName("score")
// var score = {
// 	points: 0,
// 	guessPic: function(){
//
// 	},
// 	answerQCorrectly: function(){
// 		if(drawCircles()){
// 			scoreCount.innerHTML += 10
// 		}
// 	}
// }


// var answerQ =
// //if(correct answer is chosen) {
// 	//return opacity to how it was and gain points
	//drawCircles();
// } else {
	//lose points
	//run "guess again" prompt
//}


//I want at least 5 or 6 images to construct and i need about 10 questions per picture
//store in objects to organize code

//next step: figure out how to draw more complicated things in canvas
//list: bunny,


//have a function for each of these shapes/pictures, and give it a background-color that is the same as the canvas's background color. Embed this function in the draw circles function
