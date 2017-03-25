function populate() {
	if(quiz.isEnded()) {
		

	}
	else {
		
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
	}
}

var questions = [
	new Question("I find rabbits confusing", ["Very confusing","Not confusing","Prefer not to say","What?"], "Not confusing"),
	new Question("I find rabbits funny", ["Very funny","No","Prefer not to say","What?"], "No"),
	new Question("I find rabbits lovely", ["Very lovely","Not confusing","Prefer not to say","What?"], "Not confusing"),
	new Question("I find rabbits hateful", ["Yes","Not hateful","Prefer not to say","What?"], "Yes"),
	new Question("I find rabbits charming", ["Very charming","Always","Prefer not to say","What?"], "Always"),
];

var quiz = new Quiz(questions);

populate();