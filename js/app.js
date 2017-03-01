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
var questionHeading = document.querySelector("h1.questionHeading");
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

var questionOne = new QuestionCreator("Which country has the largest population in the world?'", "C: China",  ["A: Indonesia", "B: India", "C: China", "D: Japan"])
questionArray.push(questionOne);

var questionTwo = new QuestionCreator("How many years will you live?", "A: Are you ever truly living?", ["A: Are you ever truly living?", "B: Two more, then you're done.", "C: 17.", "D: 115."])
questionArray.push(questionTwo);

var questionThree = new QuestionCreator("Potato is a modified form (outgrowth) of", "B: stem.", ["A: root.", "B: stem.", "C: leaf.", "D: fruit."])
questionArray.push(questionThree);

var questionFour = new QuestionCreator("Ordinary table salt is sodium chloride. What is baking soda?", "D: Sodium bicarbonate", ["A: Potassium chloride", "B: Potassium carbonate", "C: Potassium hydroxide", "D: Sodium bicarbonate"])
questionArray.push(questionFour);

var questionFive = new QuestionCreator("If you'd like to buy something you don't need but don't have enough money, what should you do?", "D: Wait until you've earned enough extra cash.", ["A: Buy it with your credit card.", "B: Borrow money from a friend or family member.", "C: Get a bank loan for it.", "D: Wait until you've earned enough extra cash."])
questionArray.push(questionFive);

var questionSix = new QuestionCreator("Plants have ? while animals lack it.", "B: Cellulose", ["A: Starch", "B: Cellulose", "C: Protein", "D: Fat"])
questionArray.push(questionSix);

var questionSeven = new QuestionCreator("On which of the following did Gregor Mendel perform his famous experiment?", "C: Pea", ["A: Corn",  "B: Maize", "C: Pea", "D: Wheat"])
questionArray.push(questionSeven);

var questionEight = new QuestionCreator("Do you love your parents?", "C: Yes, when they let me spread my wings and fly.", ["A: No.", "B: Gross, cooties.", "C: Yes, when they let me spread my wings and fly.", "D: They are my best friends!"])
questionArray.push(questionEight);

var questionNine = new QuestionCreator("At what temperature does water boil in Fahrenheit?", "B: 212°", ["A: 100°", "B: 212°", "C: 273°", "D: 190°"])
questionArray.push(questionNine);

var questionTen = new QuestionCreator("Oxygen in our blood is transported by a protein named", "A: hemoglobin.", ["A: hemoglobin.", "B: keratin.", "C: collagen.", "D: myoglobin."])
questionArray.push(questionTen);

var questionEleven = new QuestionCreator("Kool-Aid was originally marketed as", "D: Fruit Smack", ["A: Cool Stuff", "B: Nasty Taste", "C: Sugar Taste", "D: Fruit Smack"])
questionArray.push(questionEleven)

var questionTwelve = new QuestionCreator("Bacterial infections in humans can be treated with what?", "C: Antibiotics", ["A: Methamphetamines", "B: Steroids", "C: Antibiotics", "D: Ibuprofin"])
questionArray.push(questionTwelve);

var questionThirteen = new QuestionCreator("What is the name of the process used by plants to convert sunlight into food?", "D: Photosynthesis", ["A: Mitosis", "B: Respiration", "C: Germination", "D: Photosynthesis"])
questionArray.push(questionThirteen);

var questionFourteen = new QuestionCreator("Animals that eat both plants and other animals are known as what?", "A: Omnivores", ["A: Omnivores", "B: Carnivores", "C: Normies", "D: Herbivores"])
questionArray.push(questionFourteen);

var questionFifteen = new QuestionCreator("What food group has the highest levels of protein?", "C: Meat", ["A: Bread", "B: Vegetables", "C: Meat", "D: Fruit"])
questionArray.push(questionFifteen);

var questionSixteen = new QuestionCreator("What are some of the best ways to protect yourself against unexpected, catastrophic losses?", "D: All of the above", ["A: Minimizing debt", "B: Having health, home/renters, and auto insurance", "C: Having multiple sources of income", "D: All of the above"])
questionArray.push(questionSixteen);

var questionSeventeen = new QuestionCreator("Plants receive their nutrients mainly from", "C: soil.", ["A: clorophyll.", "B: the atmosphere.", "C: soil.", "D: light."])
questionArray.push(questionSeventeen);

var questionEighteen = new QuestionCreator("What percentage of people are left-handed?", "A: 10%", ["A: 10%", "B: 17%", "C: 25%", "D: 35%"])
questionArray.push(questionEighteen)

var questionNineteen = new QuestionCreator("Botany is the study of ", "D: plants.", ["A: animals.", "B: culture.", "C: arachnids.", "D: plants."])
questionArray.push(questionNineteen);

var questionTwenty = new QuestionCreator("Which of the following items was owned by the fewest U.S. homes in 1990?", "B: Compact disc player", ["A: Computer", "B: Compact disc player", "C: Cordless phone", "D: Dishwasher"])
questionArray.push(questionTwenty)

var question21 = new QuestionCreator("Entomology is the science that studies", "B: insects.", ["A: behavior of human beings.", "B: insects.", "C: the origin and history of technical and scientific terms.", "D: the formation of rocks."])
questionArray.push(question21)

var question22 = new QuestionCreator("In a study of effects of alcohol on driving ability, the control group should be given", "D: no alcohol at all.", ["A: a high dosage of alcohol.", "B: one-half the dosage given the experimental group.", "C: a driving test before and after drinking alcohol.", "D: no alcohol at all."])

var question23 = new QuestionCreator("Which of the following is considered by the text to be a pseudo-psychology?", "D: Astrology", ["A: Cognitive psychology", "B: Behaviorism", "C: Gestalt psychology", "D: Astrology"])



//Picture Logic

newPicture.addEventListener("click", function(){
	inputField.value = null;
	game.addRemoveClass('hidden', '.visibility-changeable2');
	var z = game.picCounter;
	for(i=0; i<picturesArray.length; i++){
		z++;
	}
})

var triangle = function(){
	for(i=0; i<300; i++){
		ctx.beginPath()
		ctx.moveTo(680, 90)
		ctx.lineTo(220, 180)
		ctx.lineTo(490, 435)
		ctx.closePath()
		checkk();
	}
}


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
	checkk();
	}
}


var heart = function(){
	for(i=0; i<400; i++){
		ctx.beginPath();
		ctx.moveTo(350, 180);
		ctx.bezierCurveTo(350, 174, 340, 150, 300, 150);
		ctx.bezierCurveTo(240, 150, 240, 225, 240, 225);
		ctx.bezierCurveTo(240, 260, 280, 304, 350, 340);
		ctx.bezierCurveTo(420, 304, 460, 260, 460, 225);
		ctx.bezierCurveTo(460, 225, 460, 150, 400, 150);
		ctx.bezierCurveTo(370, 150, 350, 174, 350, 180);
		//ctx.fill();

	   	checkk();
		}
}


var rect = function(){
	for(i=0; i<300; i++){
			ctx.beginPath();
			ctx.rect(100, 100, 200, 200);
			checkk();
	}
}


var flower = function(){
	for(i=0; i<300; i++){
		ctx.rect(390, 170, 35, 350)
		ctx.moveTo(440, 425)
		ctx.ellipse(440, 425, 25, 60, 30 * Math.PI/150, 0, 2 * Math.PI)
		ctx.moveTo(375, 395)
		ctx.ellipse(375, 395, 55, 25, 40 * Math.PI/150, 0, 2 * Math.PI)
		ctx.moveTo(405, 175)
		ctx.ellipse(405, 175, 60, 60, 45 * Math.PI/150, 0, 2 * Math.PI)
		ctx.ellipse(405, 175, 65, 170, 60 * Math.PI/130, 0, 2 * Math.PI)
		ctx.ellipse(405, 175, 65, 170, 50 * Math.PI/63, 0, 2 * Math.PI)
		ctx.ellipse(405, 175, 65, 170, 48 * Math.PI/41, 0, 2 * Math.PI)
		checkk()
	}
}


var checkk = function(){
	var cordx = Math.random()*900;
	var cordy = Math.random()*900;
	if(ctx.isPointInPath(cordx, cordy)){
			ctx.beginPath()
			ctx.arc(cordx, cordy, 5, 0, Math.PI * 2, true);
			ctx.fillStyle = "#021F26"
			ctx.fill();
	} else {
			ctx.beginPath()
			ctx.arc(cordx, cordy, 7, 0, Math.PI * 2, true);
			ctx.fillStyle = "#D3D7D8"
			ctx.fill();
		}
	}


var inputField = document.getElementsByClassName("guessPic")[0];
var submitGuess = document.getElementsByClassName("guessPic")[1];
var correctPic = function() {
	game.addRemoveClass('hidden', '.visibility-changeable2');
	// inputField.style.visibility = "hidden";
	// submitGuess.style.visibility = "hidden";
	game.clearCanvas();
	game.picCounter++;
}


var picturesArray = [heart, triangle, bunny, flower, rect]

submitGuess.addEventListener("click", function(event){
	console.log("cluck")
	if(game.picCounter === 0){
		if(inputField.value === "heart" || inputField.value === "love" || inputField.value === "Heart"){
			correctPic();
			game.score += 100;
			scoreCounter.innerHTML = "Points: " + game.score;
		} else console.log("nah uh");
	} else if(game.picCounter === 1) {
		if(inputField.value === "triangle" || inputField.value === "Triangle"){
			correctPic();
			game.score += 100;
			scoreCounter.innerHTML = "Points: " + game.score;
		} else console.log("nah uh");
	} else if(game.picCounter === 2){
		if(inputField.value === "bunny" || inputField.value === "rabbit" || inputField.value === "Bunny" || inputField.value === "Rabbit"){
			correctPic();
			game.score += 100;
			scoreCounter.innerHTML = "Points: " + game.score;
		} else console.log("nah uh");
	} else if(game.picCounter === 3){
		if(inputField.value === "flower" || inputField.value === "plant" || inputField.value === "Flower" || inputField.value === "Plant"){
			correctPic();
			game.score += 100;
			scoreCounter.innerHTML = "Points: " + game.score;
		} else console.log("nah uh");
	} else if(game.picCounter === 4){
		if(inputField.value === "rectangle" || inputField.value === "square" || inputField.value === "Rectangle" || inputField.value === "Square"){
			correctPic();
			game.score += 100;
			scoreCounter.innerHTML = "Points: " + game.score;
		} else console.log("nah uh");
	}

})
