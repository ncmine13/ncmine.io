console.log("hooked upp")

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var scoreCounter = document.getElementsByTagName("h1")[0]
var body = document.getElementsByTagName("body")[0];
var score = document.getElementsByClassName("score");
var decrOpacity = document.getElementsByClassName("lessOpaque");
var hidden = document.getElementsByClassName("hidden");
var nextQuestion = document.getElementById("nextQ-btn");
var newPicture = document.getElementById("identPic-btn");
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
	clearCanvas: function(){
		ctx.clearRect(0, 0, canvas.width, canvas.height)
	},

	drawCircles: function() {
			var z = game.picCounter;
			var pic = picturesArray[z];
			pic();
			this.score += 10;
			scoreCounter.innerHTML = "Points: " + game.score;
	},

	changeOpacity: function(){

		for(i=0; i<decrOpacity.length; i++){
			decrOpacity[i].style.opacity = "0.2";
		}
	},

	showHidden: function(){

		for(i=0; i<hidden.length; i++){
			hidden[i].style.visibility = "visible";
		}
	},

	addRemoveClass: function(clss, targetSelector){
		var elements = document.querySelectorAll(targetSelector);
		for(i=0; i<elements.length; i++){
			var hasClass = elements[i].classList.contains(clss);
			console.log(hasClass);
			if(hasClass){
				elements[i].classList.remove(clss);
			} else {
				elements[i].classList.add(clss);
			}
		}
	},

	restOpacity: function(){
		for(i=0; i<decrOpacity.length; i++){
			decrOpacity[i].style.opacity = "1";
		}
		for(i=0; i<hidden.length; i++){
			hidden[i].style.visibility = "hidden";
		}
	}
};

//Question Logic
var listItems = document.getElementsByTagName("li");
var questionh1 = document.getElementsByClassName("questionHeading")

nextQuestion.addEventListener("click", function(event){
	console.log("clicked");
	// game.changeOpacity();
	// game.showHidden();
	game.addRemoveClass("hidden", ".visibility-changeable");
	game.trivCounter++;
	count = game.trivCounter -1
	questionHeading.innerHTML = questionArray[count].question;
	for(i=0; i<listItems.length; i++) {
		listItems[i].innerHTML = questionArray[count].answers[i];
	}
});

for(i=0; i<listItems.length; i++) {
	listItems[i].addEventListener('click', function() {
		console.log('LI CLICKED');
		if(this.innerHTML === questionArray[count].correctAnswer) {
			console.log("yaaas");
			// game.restOpacity();

			game.drawCircles();
			game.addRemoveClass("hidden", ".visibility-changeable");
		} else {
			console.log("nooo");
		}
	});
}

function QuestionCreator(question, correctAnswer, answers){
	this.question = question || "";
	this.correctAnswer = correctAnswer || "";
	this.answers = answers || [];
}
var questionArray = []

var questionOne = new QuestionCreator("How do you tune a fish?", "D: You don't.", ["A: Don't ask me that.", "B: Who cares?", "C: How do YOU tune a fish?", "D: You don't."])
questionArray.push(questionOne);

var questionTwo = new QuestionCreator("How many years will you live?", "A: Are you ever truly living?", ["A: Are you ever truly living?", "B: Two more, then you're done.", "C: 17.", "D: 115."])
questionArray.push(questionTwo);

var questionThree = new QuestionCreator("Do you love your parents?", "C: Yes, when they let me spread my wings and fly.", ["A: No.", "B: Gross, cooties.", "C: Yes, when they let me spread my wings and fly.", "D: They are my best friends!"])
questionArray.push(questionThree);

var questionFour = new QuestionCreator("Ordinary table salt is sodium chloride. What is baking soda?", "D: Sodium bicarbonate", ["A: Potassium chloride", "B: Potassium carbonate", "C: Potassium hydroxide", "D: Sodium bicarbonate"])
questionArray.push(questionFour);

var questionFive = new QuestionCreator("Plants receive their nutrients mainly from", "Soil", ["Clorophyll.", "The atmosphere.", "Soil", "Light"])
questionArray.push(questionFive);

var questionSix = new QuestionCreator("Plants have __________ while animals lack it.", "Cellulose", ["Starch", "Cellulose", "Protein", "Fat"])
questionArray.push(questionSix);

var questionSeven = new QuestionCreator("On which of the following did Gregor Mendel perform his famous experiment?", "Pea", ["Corn",  "Maize", "Pea", "Wheat"])
questionArray.push(questionSeven);



//Picture Logic

newPicture.addEventListener("click", function(){
	console.log("clerked");
	inputField.style.visibility = "visible";
	submitGuess.style.visibility = "visible";
	//have to input something inside of the acceptable array, then will clear canvas and disappear input field
	//<input type="text" value="type here">


	var z = game.picCounter;
	for(i=0; i<picturesArray.length; i++){
		z++;
	}
})


// var bird = function(){
// 	ctx.beginPath();
// 	ctx.moveTo(550, 320)
// 	ctx.ellipse(550, 320, 80, 120, 100 * Math.PI/150, 0, 2 * Math.PI)
// 	ctx.moveTo(535, 325)
// 	ctx.ellipse(535, 325, 80, 95, 100 * Math.PI/150, 0, 2 * Math.PI)
// 	ctx.moveTo(475, 235)
// 	ctx.ellipse(475, 235, 50, 60, 120 * Math.PI/150, 0, 2 * Math.PI)
// 	ctx.moveTo(475, 190)
// 	ctx.lineTo(380,240)
// 	ctx.lineTo(475,260)
//
// }

var bunny = function(){
	for(i=0; i<300; i++){
		ctx.beginPath();
		ctx.ellipse(175, 390, 45, 55, 65 * Math.PI/150, 0, 2 * Math.PI)
		ctx.moveTo(290, 340);
		ctx.ellipse(290, 340, 100, 130, 40 * Math.PI/150, 0, 2 * Math.PI)
		ctx.moveTo(370, 400)
		ctx.ellipse(350, 400, 60, 30, 40 * Math.PI/150, 0, 2 * Math.PI)
		ctx.moveTo(379, 430)
		ctx.ellipse(377, 430, 23, 30, 85 * Math.PI/150, 0, 2 * Math.PI)
		ctx.moveTo(380, 240)
		ctx.ellipse(380, 240, 95, 60, 45 * Math.PI/150, 0, 2 * Math.PI)
		ctx.moveTo(330, 150)
		ctx.ellipse(330, 150, 135, 33, 70 * Math.PI/150, 0, 2 * Math.PI)
		ctx.moveTo(310, 155)
		ctx.ellipse(310, 155, 132, 31, 45 * Math.PI/150, 0, 2 * Math.PI)
	checkk()
	}
}

var rect = function(){
	for(i=0; i<300; i++){
			ctx.beginPath();
			ctx.rect(100, 100, 200, 200);
			checkk()
	}
}

var flower = function(){
	for(i=0; i<300; i++){
		ctx.beginPath()
			ctx.rect(390, 190, 35, 350)
			ctx.moveTo(440, 445)
			ctx.ellipse(440, 445, 15, 45, 30 * Math.PI/150, 0, 2 * Math.PI)
			ctx.moveTo(375, 385)
			ctx.ellipse(375, 385, 45, 15, 40 * Math.PI/150, 0, 2 * Math.PI)
			ctx.moveTo(405, 195)
			ctx.ellipse(405, 195, 60, 60, 45 * Math.PI/150, 0, 2 * Math.PI)
			ctx.ellipse(405, 195, 45, 160, 60 * Math.PI/130, 0, 2 * Math.PI)
			ctx.ellipse(405, 195, 45, 160, 50 * Math.PI/63, 0, 2 * Math.PI)
			ctx.ellipse(405, 195, 45, 160, 48 * Math.PI/41, 0, 2 * Math.PI)
		checkk()
	}
}

var checkk = function(){
	var cordx = Math.random()*900;
	var cordy = Math.random()*900;
	if(ctx.isPointInPath(cordx, cordy)){
			ctx.beginPath()
			ctx.arc(cordx, cordy, 7, 0, Math.PI * 2, true);
			ctx.fillStyle = "#E47505"
			ctx.fill();
	} else {
			ctx.beginPath()
			ctx.arc(cordx, cordy, 7, 0, Math.PI * 2, true);
			ctx.fillStyle = "#354A68"
			ctx.fill();
		}
	}


var picturesArray = [bunny, rect, flower]


var inputField = document.getElementsByClassName("guessPic")[0];
var submitGuess = document.getElementsByClassName("guessPic")[1];
var correctPic = function() {
	inputField.style.visibility = "hidden";
	submitGuess.style.visibility = "hidden";
	game.clearCanvas();
	game.picCounter++;
}

submitGuess.addEventListener("click", function(event){
	console.log("cluck")
	if(game.picCounter === 0){
		if(inputField.value === "bunny" || inputField.value === "rabbit"){
			correctPic();
			game.score += 100;
			scoreCounter.innerHTML = "Points: " + game.score;
		} else console.log("nah uh");
	} else if(game.picCounter === 1) {
		if(inputField.value === "rectangle" || inputField.value === "square"){
			correctPic();
			game.score += 100;
			scoreCounter.innerHTML = "Points: " + game.score;
		} else console.log("nah uh");
	} else if(game.picCounter === 2){
		if(inputField.value === "flower" || inputField.value === "plant"){
			correctPic();
			game.score += 100;
			scoreCounter.innerHTML = "Points: " + game.score;
		} else console.log("nah uh");
	}
})
