console.log("hooked upp")

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var scoreCounter = document.getElementsByTagName("h1")[0]
var body = document.getElementsByTagName("body")[0];
var score = document.getElementsByClassName("score");
var decrOpacity = document.getElementsByClassName("lessOpaque");
var hidden = document.getElementsByClassName("hidden");
var nextQuestion = document.getElementById("nextQ-btn");
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
var listItems = $("li");
var questionh1 = $(".questionHeading");

$('#nextQ-btn').click(function(e){
	game.addRemoveClass("hidden", ".visibility-changeable");
	game.trivCounter++;
	count = game.trivCounter -1
	questionHeading.innerHTML = questionArray[count].question;
	for(i=0; i<listItems.length; i++) {
		listItems[i].innerHTML = questionArray[count].answers[i];
		}
	});


for(i=0; i<listItems.length; i++) {
	$(listItems[i]).click(function() {
		console.log('LI CLICKED');
		if(this.innerHTML === questionArray[count].correctAnswer) {
			game.drawCircles();
			game.addRemoveClass("hidden", ".visibility-changeable");
		} else {
			console.log("no");
		}
	});
}

function QuestionCreator(question, correctAnswer, answers){
	this.question = question || "";
	this.correctAnswer = correctAnswer || "";
	this.answers = answers || [];
}
var questionArray = [];

var questionOne = new QuestionCreator("Which best describes the behavior of an amoeba dividing into two identical daughter cells?", "C: Mitosis",  ["A: Diffusion", "B: Meiosis", "C: Mitosis", "D: Osmosis"])
questionArray.push(questionOne);

var questionTwo = new QuestionCreator("The site of protein synthesis is the", "A: smooth endoplasmic reticulum.", ["A: smooth endoplasmic reticulum.", "B: nucleus.", "C: nucleolus", "D: ribosome."])
questionArray.push(questionTwo);

var questionThree = new QuestionCreator("Potato is a modified form (outgrowth) of", "B: stem.", ["A: root.", "B: stem.", "C: leaf.", "D: fruit."])
questionArray.push(questionThree);

var questionFour = new QuestionCreator("Ordinary table salt is sodium chloride. What is baking soda?", "D: Sodium bicarbonate", ["A: Potassium chloride", "B: Potassium carbonate", "C: Potassium hydroxide", "D: Sodium bicarbonate"])
questionArray.push(questionFour);

var questionFive = new QuestionCreator("The process by which DNA copies itself is called", "C: replication.", ["A: respiration.", "B: translation.", "C: replication.", "D: parturition."])
questionArray.push(questionFive);

var questionSix = new QuestionCreator("Plants have ? while animals lack it.", "B: Cellulose", ["A: Starch", "B: Cellulose", "C: Protein", "D: Fat"])
questionArray.push(questionSix);

var questionSeven = new QuestionCreator("On which of the following did Gregor Mendel perform his famous experiment?", "C: Pea", ["A: Corn",  "B: Maize", "C: Pea", "D: Wheat"])
questionArray.push(questionSeven);

var questionEight = new QuestionCreator("Your tongue does not grow hair because", "B: different genes are expressed on different tissues.", ["A: skin cells have extra DNA that encodes hair proteins.", "B: different genes are expressed on different tissues.", "C: the genes for hair proteins have been deleted from your tongue.", "D: saliva prevents the hair from growing."])
questionArray.push(questionEight);

var questionNine = new QuestionCreator("At what temperature does water boil in Fahrenheit?", "B: 212°", ["A: 100°", "B: 212°", "C: 273°", "D: 190°"])
questionArray.push(questionNine);

var questionTen = new QuestionCreator("Oxygen in our blood is transported by a protein named", "A: hemoglobin.", ["A: hemoglobin.", "B: keratin.", "C: collagen.", "D: myoglobin."])
questionArray.push(questionTen);

var questionEleven = new QuestionCreator("If the DNA fingerprint of a suspect does not match a blood sample from a crime scene, what can you conclude?", "D: The blood sample had to come from another person but the suspect still may have been there", ["A: The suspect was never at the crime scene", "B: The suspect may have been at the crime scene because DNA fingerprinting still may have been there", "C: You cannot get a DNA fingerprint from a blood sample", "D: The blood sample had to come from another person but the suspect still may have been there"])
questionArray.push(questionEleven)

var questionTwelve = new QuestionCreator("Bacterial infections in humans can be treated with what?", "C: Antibiotics", ["A: Methamphetamines", "B: Steroids", "C: Antibiotics", "D: Ibuprofin"])
questionArray.push(questionTwelve);

var questionThirteen = new QuestionCreator("What is the name of the process used by plants to convert sunlight into food?", "D: Photosynthesis", ["A: Mitosis", "B: Respiration", "C: Germination", "D: Photosynthesis"])
questionArray.push(questionThirteen);

var questionFourteen = new QuestionCreator("Animals that eat both plants and other animals are known as what?", "A: Omnivores", ["A: Omnivores", "B: Carnivores", "C: Normies", "D: Herbivores"])
questionArray.push(questionFourteen);

var questionFifteen = new QuestionCreator("What food group has the highest levels of protein?", "C: Meat", ["A: Bread", "B: Vegetables", "C: Meat", "D: Fruit"])
questionArray.push(questionFifteen);

var questionSixteen = new QuestionCreator("In science, the term theory generally applies to an idea that", "B: attempts to explain many related phenomena", ["A: is a speculation lacking supportive observations or experiments", "B: attempts to explain many related phenomena", "C: is synonymous with what scientists call a hypothesis", "D: cannot be tested"])
questionArray.push(questionSixteen);

var questionSeventeen = new QuestionCreator("Plants receive their nutrients mainly from", "C: soil.", ["A: clorophyll.", "B: the atmosphere.", "C: soil.", "D: light."])
questionArray.push(questionSeventeen);

var questionEighteen = new QuestionCreator("What type of variation in finches is passed to the offspring?", "C: All characteristics that are genetically determined", ["A: Any learned behaviors", "B: Only characteristics that were beneficial during a finch’s lifetime", "C: All characteristics that are genetically determined", "D: Any characteristics that were positively influenced by the environment during a finch’s lifetime"])
questionArray.push(questionEighteen)

var questionNineteen = new QuestionCreator("Botany is the study of ", "D: plants.", ["A: animals.", "B: culture.", "C: arachnids.", "D: plants."])
questionArray.push(questionNineteen);

var questionTwenty = new QuestionCreator("Which characteristic of an element determines its position in the periodic table?", "A: Number of protons", ["A: Number of protons", "B: Number of neutrons", "C: Number of electrons", "D: Number of protons + number of neutrons"])
questionArray.push(questionTwenty)

var question21 = new QuestionCreator("Entomology is the science that studies", "B: insects.", ["A: behavior of human beings.", "B: insects.", "C: the origin and history of technical and scientific terms.", "D: the formation of rocks."])
questionArray.push(question21)

var question22 = new QuestionCreator("In a study of effects of alcohol on driving ability, the control group should be given", "D: no alcohol at all.", ["A: a high dosage of alcohol.", "B: one-half the dosage given the experimental group.", "C: a driving test before and after drinking alcohol.", "D: no alcohol at all."])

var question23 = new QuestionCreator("Which of the following is considered by the text to be a pseudo-psychology?", "D: Astrology", ["A: Cognitive psychology", "B: Behaviorism", "C: Gestalt psychology", "D: Astrology"])



//Picture Logic

$('#pic-btn').click(function(e){
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
		ctx.beginPath();
		ctx.arc(cordx, cordy, 5, 0, Math.PI * 2, true);
		ctx.fillStyle = "#021F26";
		ctx.fill();
	} else {
		ctx.beginPath();
		ctx.arc(cordx, cordy, 7, 0, Math.PI * 2, true);
		ctx.fillStyle = "#D3D7D8";
		ctx.fill();
	}
}


var inputField = document.getElementsByClassName("guessPic")[0];
var submitGuess = document.getElementsByClassName("guessPic")[1];
var correctPic = function() {
	game.addRemoveClass('hidden', '.visibility-changeable2');
	game.clearCanvas();
	game.picCounter++;
}


var picturesArray = [heart, bunny, flower, rect, triangle]
//make case insensitive, make DRY
$('#submitGuess').click(function(e) {
	if(game.picCounter === 0){
		if(inputField.value === "heart" || inputField.value === "love" || inputField.value === "Heart"){
			correctPic();
			game.score += 100;
			scoreCounter.innerHTML = "Points: " + game.score;
		} else console.log("nah uh");
	} else if(game.picCounter === 1) {
		if(inputField.value === "bunny" || inputField.value === "rabbit" || inputField.value === "Bunny" || inputField.value === "Rabbit"){
			correctPic();
			game.score += 100;
			scoreCounter.innerHTML = "Points: " + game.score;
		} else console.log("nah uh");
	} else if(game.picCounter === 2){
		if(inputField.value === "flower" || inputField.value === "plant" || inputField.value === "Flower" || inputField.value === "Plant"){
			correctPic();
			game.score += 100;
			scoreCounter.innerHTML = "Points: " + game.score;
		} else console.log("nah uh");
	} else if(game.picCounter === 3){
		if(inputField.value === "rectangle" || inputField.value === "square" || inputField.value === "Rectangle" || inputField.value === "Square"){
			correctPic();
			game.score += 100;
			scoreCounter.innerHTML = "Points: " + game.score;
		} else console.log("nah uh");
	} else if(game.picCounter === 4){
		if(inputField.value === "triangle" || inputField.value === "Triangle"){
			correctPic();
			game.score += 100;
			scoreCounter.innerHTML = "Points: " + game.score;
		} else console.log("nah uh");
	}
})

