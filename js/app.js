console.log("hooked upp")

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var scoreCounter = document.getElementsByTagName("h1")[0]
var body = document.getElementsByTagName("body")[0];
var score = document.getElementsByClassName("score");
var decrOpacity = document.getElementsByClassName("lessOpaque");
var hidden = document.getElementsByClassName("hidden");
var nextQuestion = document.getElementById("nextQ-btn")
var newPicture = document.getElementById("identPic-btn")
var questionHeading = document.getElementsByTagName("h1")[1];
var answer1 = document.getElementsByTagName("li")[0];
var answer2 = document.getElementsByTagName("li")[1];
var answer3 = document.getElementsByTagName("li")[2];
var answer4 = document.getElementsByTagName("li")[3];
var hidden = document.getElementsByClassName("hidden");


var game = {
	score: 0,
	trivCounter: 0,
	picCounter: 0,
	drawCircles: function(){
			for(i=0; i<100; i++){
				var cordx = Math.random()*900;
				var cordy = Math.random()*600;
				ctx.arc(cordx, cordy, 5, 0, Math.PI * 2, true);
				ctx.fillStyle = "#1D381D";
				ctx.fill();
				ctx.beginPath();
				picture.rectangle();
			}

			this.score += 10;
			scoreCounter.innerHTML = "Points: " + game.score;
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


var questionArray = ["Ordinary table salt is sodium chloride. What is baking soda?", "Plants receive their nutrients mainly from", 	"Plants have __________ while animals lack it.", "On which of the following did Gregor Mendel perform his famous experiment?"]

var a1Array = ["Potassium chloride", "Clorophyll.", "Starch", "Corn"]

var a2Array = ["Potassium carbonate", "The atmosphere.", "Cellulose", "Maize"]

var a3Array = ["Potassium hydroxide", "Soil", "Protein", "Pea"]

var a4Array = ["Sodium bicarbonate", "Light", "Fat", "Wheat"]

var correctAnswer = ["Sodium bicarbonate", "Soil", "Cellulose", "Pea"]

var arrayOfAnswerArrays = [a1Array, a2Array, a3Array, a4Array]

var arrayOfLi = [answer1, answer2, answer3, answer4]

nextQuestion.addEventListener("click", function(event){
	console.log("clicked");
	game.changeOpacity();
	game.showHidden();
	game.trivCounter++;
	for(i=0; i<questionArray.length; i++){
		var q = game.trivCounter - 1;
		questionHeading.innerHTML = questionArray[q];
		answer1.innerHTML = "A. " + a1Array[q];
		answer2.innerHTML = "B. " + a2Array[q];
		answer3.innerHTML = "C. " + a3Array[q];
		answer4.innerHTML = "D. " + a4Array[q];
	}
})



newPicture.addEventListener("click", function(){
	console.log("clerked");
	game.picCounter++;
	var z = game.picCounter - 1;
	for(i=0; i<picturesArray.length; i++){
		z++
	}


})

answer1.addEventListener("click", function(event){
	console.log("weeee");
	var q = game.trivCounter - 1;
	if(a1Array[q] === correctAnswer[q]){
		game.restOpacity();
		game.drawCircles()
		console.log("correct");
	}

})

answer2.addEventListener("click", function(event){
	console.log("wooo");
	var q = game.trivCounter - 1;
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
	var q = game.trivCounter - 1;
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
	var q = game.trivCounter - 1;
	if(a4Array[q] === correctAnswer[q]){
		console.log("correct")
		game.restOpacity();
		game.drawCircles();
	} else {
		console.log("not correct")
	}
})

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
	}
}
//
var bunny = function(){
	for(i=0; i<200; i++) {
		ctx.beginPath();
		ctx.ellipse(195, 380, 60, 60, 45 * Math.PI/150, 0, 2 * Math.PI)
		ctx.moveTo(290, 340);
		ctx.ellipse(290, 340, 100, 120, 40 * Math.PI/150, 0, 2 * Math.PI)
		ctx.moveTo(370, 240)
		ctx.ellipse(370, 240, 85, 55, 45 * Math.PI/150, 0, 2 * Math.PI)
		ctx.moveTo(330, 150)
		ctx.ellipse(330, 150, 95, 30, 45 * Math.PI/105, 0, 2 * Math.PI)
		ctx.moveTo(310, 155)
		ctx.ellipse(310, 155, 92, 28, 45 * Math.PI/170, 0, 2 * Math.PI)
		var cordx = Math.random()*600;
		var cordy = Math.random()*600;
		if(ctx.isPointInPath(cordx, cordy)){
				ctx.beginPath()
				ctx.arc(cordx, cordy, 5, 0, Math.PI * 2, true);
				ctx.fillStyle = "#D3E8D3"
				ctx.fill();
		} else {
				ctx.beginPath()
				ctx.arc(cordx, cordy, 5, 0, Math.PI * 2, true);
				ctx.fillStyle = "#091b38"
				ctx.fill();
			}
		}
	}

	var rect = function(){
		for(i=0; i<50; i++){
			ctx.beginPath();
			ctx.rect(100, 100, 200, 200);
			var cordx = Math.random()*600;
			var cordy = Math.random()*600;
			if(ctx.isPointInPath(cordx, cordy)){
					ctx.beginPath()
					ctx.arc(cordx, cordy, 10, 0, Math.PI * 2, true);
					ctx.fillStyle = "green"
					ctx.fill();
			} else {
					ctx.beginPath()
					ctx.arc(cordx, cordy, 10, 0, Math.PI * 2, true);
					ctx.fillStyle = "blue"
					ctx.fill();
			}

		}
	}

var flower = function(){
	for(i=0; i<200; i++) {
		ctx.beginPath()
		ctx.rect(400, 200, 40, 300)
		ctx.moveTo(415, 205)
		ctx.ellipse(415, 205, 50, 50, 45 * Math.PI/150, 0, 2 * Math.PI)
		ctx.ellipse(415, 205, 30, 120, 60 * Math.PI/150, 0, 2 * Math.PI)
		ctx.ellipse(415, 205, 30, 120, 50 * Math.PI/65, 0, 2 * Math.PI)
		ctx.ellipse(415, 205, 30, 120, 48 * Math.PI/43, 0, 2 * Math.PI)
		var cordx = Math.random()*600;
		var cordy = Math.random()*600;
		if(ctx.isPointInPath(cordx, cordy)){
				ctx.beginPath()
				ctx.arc(cordx, cordy, 5, 0, Math.PI * 2, true);
				ctx.fillStyle = "#D3E8D3"
				ctx.fill();
		} else {
				ctx.beginPath()
				ctx.arc(cordx, cordy, 5, 0, Math.PI * 2, true);
				ctx.fillStyle = "#091b38"
				ctx.fill();
		}

	}


}
var picturesArray = [bunny, rect, flower]
