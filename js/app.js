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
var inputField = document.getElementsByClassName("guessPic")[0];
var submitGuess = document.getElementsByClassName("guessPic")[1];


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
		}
	}

//Question Logic
	var listItems = document.getElementsByTagName("li");
	var questionh1 = document.getElementsByClassName("questionHeading")

	nextQuestion.addEventListener("click", function(event){
		console.log("clicked");
		game.changeOpacity();
		game.showHidden();
		game.trivCounter++;
		count = game.trivCounter -1
		questionHeading.innerHTML = questionArray[count].question;
		for(i=0; i<listItems.length; i++) {
			listItems[i].innerHTML = questionArray[count].answers[i];
			listItems[i].addEventListener('click', function() {
				if(this.innerHTML === questionArray[count].correctAnswer) {
					console.log("yaaas");
					game.restOpacity();
					game.drawCircles();
				} else {
					console.log("nooo");
				}
			});
		}

	})

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

//
// var questionArray = ["Ordinary table salt is sodium chloride. What is baking soda?", "Plants receive their nutrients mainly from", 	"Plants have __________ while animals lack it.", "On which of the following did Gregor Mendel perform his famous experiment?"]
//
// var a1Array = ["Potassium chloride", "Clorophyll.", "Starch", "Corn"]
//
// var a2Array = ["Potassium carbonate", "The atmosphere.", "Cellulose", "Maize"]
//
// var a3Array = ["Potassium hydroxide", "Soil", "Protein", "Pea"]
//
// var a4Array = ["Sodium bicarbonate", "Light", "Fat", "Wheat"]
//
// var correctAnswer = ["Sodium bicarbonate", "Soil", "Cellulose", "Pea"]
//








//Picture Logic

newPicture.addEventListener("click", function(){
	console.log("clerked");
	inputField.style.visibility = "visible";
	submitGuess.style.visibility = "visible";
	//have to input something inside of the acceptable array, then will clear canvas and disappear input field
	//<input type="text" value="type here">
	//game.clearCanvas();
	game.picCounter++;
	var z = game.picCounter;
	for(i=0; i<picturesArray.length; i++){
		z++;
	}
})

var bunny = function(){
	for(i=0; i<200; i++){
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
	checkk()
	}
}

var rect = function(){
	for(i=0; i<200; i++){
			ctx.beginPath();
			ctx.rect(100, 100, 200, 200);
			checkk()
	}
}

var flower = function(){
	for(i=0; i<200; i++){
		ctx.beginPath()
		ctx.rect(400, 200, 40, 300)
		ctx.moveTo(415, 205)
		ctx.ellipse(415, 205, 50, 50, 45 * Math.PI/150, 0, 2 * Math.PI)
		ctx.ellipse(415, 205, 30, 120, 60 * Math.PI/150, 0, 2 * Math.PI)
		ctx.ellipse(415, 205, 30, 120, 50 * Math.PI/65, 0, 2 * Math.PI)
		ctx.ellipse(415, 205, 30, 120, 48 * Math.PI/43, 0, 2 * Math.PI)
		checkk()
	}
}

var checkk = function(){
	var cordx = Math.random()*600;
	var cordy = Math.random()*600;
	if(ctx.isPointInPath(cordx, cordy)){
			ctx.beginPath()
			ctx.arc(cordx, cordy, 5, 0, Math.PI * 2, true);
			ctx.fillStyle = "red"
			ctx.fill();
	} else {
			ctx.beginPath()
			ctx.arc(cordx, cordy, 5, 0, Math.PI * 2, true);
			ctx.fillStyle = "#091b38"
			ctx.fill();
		}
}


var picturesArray = [bunny, rect, flower]
