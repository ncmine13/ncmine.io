

var listItems = document.getElementsByTagName("li");
var questionh1 = document.getElementsByClassName("questionHeading")

nextQuestion.addEventListener("click", function(event){
	console.log("clicked");
	game.changeOpacity();
	game.showHidden();
	game.trivCounter++;

	var questionOne = new QuestionCreator("How do you tune a fish?", "You don't.", ["Don't ask me that.", "Who cares?", "How do YOU tune a fish?", "You don't."])
	questionh1.innerHTML = questionOne.question;

	var questionTwo = new QuestionCreator("How many years will you live?", "Are you ever truly living?", ["Are you ever truly living?", "Two more, then you're done.", "17.", "115."])
	questionh1.innerHTML = questionTwo.question;

	var questionThree = new QuestionCreator("Do you love your parents?", "Yes, when they let me spread my wings and fly.", ["No.", "Gross, cooties.", "Yes, when they let me spread my wings and fly.", "They are my best friends!"])
	questionh1.innerHTML = questionThree.question;

	for(i=0; i<listItems.length; i++) {
		listItems[i].innerHTML = questionOne.answers[i];
		listItems[i].addEventListener('click', function() {
			if(this.innerHTML === questionOne.correctAnswer) {
				console.log("yaaas");

			} else {
				console.log("nooo");
			}
		});
	}

	}
})


function QuestionCreator(question, correctAnswer, answers){
	this.question = question || "";
	this.correctAnswer = correctAnswer || "";
	this.answers = answers || [];
}
