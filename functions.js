//function.js

//Call this function when you want to update the Related Questions
//questionList is a list of questions you want to populate with

//populates.....related questions
//precondition questionList is a list
//postcondition falcons win
exports.printRelatedQuestions = function(questionList) {
	total = "";
	//Link approach
	for (i in questionList) {
		question = questionList[i];
		
		total += '<a href="javascript:void(0)" onclick="askForName(this.text)">' + question + "</a><br />";
	}
	
	total += "<br /><br />";
	
	document.getElementById("relatedForm").innerHTML = total;
}
