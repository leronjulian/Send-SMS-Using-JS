questionList = [];
aList = [];
url = [];
nameList=[];


if (myKeywordMatchesArray[5] == true)
{
	questionList = ["What would I do as an entrepreneur?"];
}

else if ((hitCount == 1) && (myKeywordMatchesArray[2] == true))
{
	questionList = ["What is a fellowship?",
					"How do you apply for a fellowship?",
					"What is the difference between a fellowship and a scholarship?",
					"What does my GRE score have to be to get a fellowship?",
					"What does my GPA score have to be in order to receive a fellowship?",
					"Can I have more than one fellowship at a time?",
					"Who gives out fellowships? Where do fellowships come from?",
					"This is a test?",
					"Are fellowships available in the summer?"
					];
	aList = ["Southern Regional Education Board (SREB) Doctoral Scholars Program", "The National Consortium for Graduate Degrees for Minorities (GEM) in Engineering and Science Fellowship", 
	"NSF Graduate Research Fellowships Program (GRFP)", "Ford Foundation Fellowship Program"];
	url = ["http://www.sreb.org/page/1074/doctoral_scholars.html", "http://www.gemfellowship.org/gem-fellowship/",
			"http://www.nsfgrfp.org/", "http://sites.nationalacademies.org/PGA/FordFellowships/PGA_047958/"];
	
}

 else if ((myKeywordMatchesArray[2] == true ) && (myKeywordMatchesArray[30] == true))
{
	questionList = [ "Is tuition covered by a fellowship?",
					"Are books included in the fellowship?",
					"Which fellowship is the best?",
					"Can you have a part time job with a fellowship?",
					"How much can I make with a fellowship??"];
		aList = ["Southern Regional Education Board (SREB) Doctoral Scholars Program", "The National Consortium for Graduate Degrees for Minorities (GEM) in Engineering and Science Fellowship", 
		"NSF Graduate Research Fellowships Program (GRFP)", "Ford Foundation Fellowship Program"];
		url = ["http://www.sreb.org/page/1074/doctoral_scholars.html", "http://www.gemfellowship.org/gem-fellowship/",
				"http://www.nsfgrfp.org/", "http://sites.nationalacademies.org/PGA/FordFellowships/PGA_047958/"];
}
else if ((myKeywordMatchesArray[2] == true) && (myKeywordMatchesArray[18] == true))
{
	questionList = [ "Do you have to work if you have a fellowship?",
					"Can you have a part time job with a fellowship?",
					"What must I do to be considered for a fellowship?",
					"Which fellowship is the best?"];
			aList = ["Southern Regional Education Board (SREB) Doctoral Scholars Program", "The National Consortium for Graduate Degrees for Minorities (GEM) in Engineering and Science Fellowship", 
		"NSF Graduate Research Fellowships Program (GRFP)", "Ford Foundation Fellowship Program"];
		url = ["http://www.sreb.org/page/1074/doctoral_scholars.html", "http://www.gemfellowship.org/gem-fellowship/",
				"http://www.nsfgrfp.org/", "http://sites.nationalacademies.org/PGA/FordFellowships/PGA_047958/"];
}
else if ((myKeywordMatchesArray[2] == true ) && (myKeywordMatchesArray[14] == true))
{
	questionList = [ "Can you have a part time job with a fellowship?",
					"How much can I make with a fellowship??",
					"Do you have to work if you have a fellowship?",
					"Is tuition covered by a fellowship?"
					];
				aList = ["Southern Regional Education Board (SREB) Doctoral Scholars Program", "The National Consortium for Graduate Degrees for Minorities (GEM) in Engineering and Science Fellowship", 
		"NSF Graduate Research Fellowships Program (GRFP)", "Ford Foundation Fellowship Program"];
		url = ["http://www.sreb.org/page/1074/doctoral_scholars.html", "http://www.gemfellowship.org/gem-fellowship/",
				"http://www.nsfgrfp.org/", "http://sites.nationalacademies.org/PGA/FordFellowships/PGA_047958/"];
}
else if ((myKeywordMatchesArray[2] == true) && (myKeywordMatchesArray[60] == true))
{
	questionList = ["This is a test?",
					"Will a fellowship allow me to start in the spring semester?",
					"What does my GRE score have to be to get a fellowship?",
					"What does my GPA score have to be in order to receive a fellowship?",
					"What must I do to be considered for a fellowship?"] ;
					
					
		aList = ["Southern Regional Education Board (SREB) Doctoral Scholars Program", "The National Consortium for Graduate Degrees for Minorities (GEM) in Engineering and Science Fellowship", 
		"NSF Graduate Research Fellowships Program (GRFP)", "Ford Foundation Fellowship Program"];
		url = ["http://www.sreb.org/page/1074/doctoral_scholars.html", "http://www.gemfellowship.org/gem-fellowship/",
				"http://www.nsfgrfp.org/", "http://sites.nationalacademies.org/PGA/FordFellowships/PGA_047958/"];
}
else if ((myKeywordMatchesArray[2] == true) && (myKeywordMatchesArray[0] == true))
{
	questionList = ["What does my GRE score have to be to get a fellowship?",
					"What does my GPA score have to be in order to receive a fellowship?",
					"What must I do to be considered for a fellowship?"]; 
		aList = ["Southern Regional Education Board (SREB) Doctoral Scholars Program", "The National Consortium for Graduate Degrees for Minorities (GEM) in Engineering and Science Fellowship", 
		"NSF Graduate Research Fellowships Program (GRFP)", "Ford Foundation Fellowship Program"];
		url = ["http://www.sreb.org/page/1074/doctoral_scholars.html", "http://www.gemfellowship.org/gem-fellowship/",
				"http://www.nsfgrfp.org/", "http://sites.nationalacademies.org/PGA/FordFellowships/PGA_047958/"];
}
else if ( (hitCount == 1) &&(myKeywordMatchesArray[1] == true) ) 
{	
	/*document.getElementById("myQuestions1").innerHTML="What does my GPA need to be to get an assistantship?";
	document.getElementById("myQuestions2").innerHTML="What does my GRE score need to be to gain an assistantship?";
	document.getElementById("myQuestions3").innerHTML="Could I have more than one assistantship at a time?";
	
	cheese1 ="What does my GPA need to be to get an assistantship?";
	cheese2 ="What does my GRE score need to be to gain an assistantship?";
	cheese3 ="Could I have more than one assistantship at a time?";*/
	
	questionList = ["What does my GPA need to be to get an assistantship?",
					"What does my GRE score need to be to gain an assistantship?",
					"Could I have more than one assistantship at a time?",
					"How do i apply for an assistantships?",
					"Which is better, a fellowship or assistantship?"];
					aList = ["Arizona State Assitantship information", "University of Texas Assistantship Information",
						"Clemson University Assistantship Information"];
					url = ["http://graduate.asu.edu/financing/tara/", "http://finaid.utexas.edu/sources/taships.html/",
					"http://www.grad.clemson.edu/ga_FAQ.php/"];
					
}
 else if ((myKeywordMatchesArray[1] == true) && (myKeywordMatchesArray[0] == true))
{
	questionList = [ "What does my GPA need to be to get an assistantship?",
					"What does my GPA need to be to get an assistantship?",
					"Are assistantships offered over the summer?"] ;
				aList = ["Arizona State Assitantship information", "University of Texas Assistantship Information",
							"Clemson University Assistantship Information"];
						url = ["http://graduate.asu.edu/financing/tara/", "http://finaid.utexas.edu/sources/taships.html/",
						"http://www.grad.clemson.edu/ga_FAQ.php/"];
}
else if ((myKeywordMatchesArray[1] == true) && (myKeywordMatchesArray[30] == true)) 
{
	questionList = ["Could I have a full or part time job in addition to an assistantship?",
					"How much money could I make doing an assistantship?",
					"Is tuition covered by an assistantship?",
					"Is health insurance included in an assistantship?"] ;
					
	aList = ["Arizona State Assitantship information", "University of Texas Assistantship Information",
							"Clemson University Assistantship Information"];
						url = ["http://graduate.asu.edu/financing/tara/", "http://finaid.utexas.edu/sources/taships.html/",
						"http://www.grad.clemson.edu/ga_FAQ.php/"];
} 

else if (myKeywordMatchesArray[35] == true)
{
	/*document.getElementById("myQuestions1").innerHTML="What Would I do to prepare for an industry position?";
	cheese1 ="What Would I do to prepare for an industry position?";
	cheese2 ="middle";
	cheese3 ="griddle";*/
	
	questionList = ["What would I do to prepare for an industry position?",
					"How much would you make in industry positions?",
					"What are the benefits of obtaining an industry position?",
					"What are some of the challenges of having an industry position?",
					"What are your job responsibilities at an industry position?" ]; 
					
	aList = ["Arizona State Assitantship information", "University of Texas Assistantship Information",
						"Clemson University Assistantship Information"];
					url = ["http://graduate.asu.edu/financing/tara/", "http://finaid.utexas.edu/sources/taships.html/",
					"http://www.grad.clemson.edu/ga_FAQ.php/"];
}

else if (myKeywordMatchesArray[48] == true)
{
	/*document.getElementById("myQuestions1").innerHTML="What are my job responsibilities as a research faculty member?";
	cheese1 ="What are my job responsibilities as a research faculty member?";
	cheese2 ="diddle";
	cheese3 ="fiddle";*/
	
	questionList = ["What are my job responsibilities as a research faculty member?",
	"How difficult is it to obtain a job as a research faculty member?",
	"What are the benefits of becoming a research faculty member?",
	"How do I prepare if I want to become a research faculty member?",
	"For a research faculty member, what are some of the challenges of working as a research faculty member?",
	"How much teaching would i do as a research faculty member?",
	"How flexible is a job as a research faculty member?"];
	aList = ["Dr. Juan Gilbert","American Association of University Professors","American Council on Education" , "List of African American Computer Scientists"];
	url = ["http://www.juangilbert.com/","http://www.aaup.org/aaup/","http://www.acenet.edu/AM/Template.cfm?Section=Home/", "http://www.math.buffalo.edu/mad/computer-science/cs-peeps.html"];
}

else if (myKeywordMatchesArray[53]== true)
{
	/*document.getElementById("myQuestions1").innerHTML="What do you do as a teaching faculty member?";
	cheese1 ="What do you do as a teaching faculty member?";
	cheese2 = "ice";
	cheese3 = "time";*/
	
	questionList = ["What do you do as a teaching faculty member?",
	"How is the choice of school important for a teaching faculty?",
	"What can i do to prepare for a career as a teaching faculty member?",
	"Are publications important to obtaining a teaching position?",
	"How would someone obtain a job as teaching faculty member?",
	"What are some of the benefits of becoming a teaching faculty member?",
	"What are some of the challenges of becoming a teaching faculty member?"];
	aList = ["Dr. Brian Blake University Professor, Miami University", "American Association of University Professors","American Council on Education", "List of African American Computer Scientists"];
	url = ["http://www.miami.edu/index.php/university_administration_biographies/university_administration_deans/brian_blake_biography/",
		"http://www.aaup.org/aaup/","http://www.acenet.edu/AM/Template.cfm?Section=Home/",
	       "http://www.math.buffalo.edu/mad/computer-science/cs-peeps.html"];
}

printRelatedQuestions(questionList);
/* populateLists(reulistsouth,reulinksouth, "south");
populatelists(reulistmidwest, reulinkmidwest, "midwest");
populatelists(reulistwest, reulinkwest, "west");
populatelists(orgList, orgLink, "orglists");
populatelists(facultyList, facultyLink, "facultylists");
populatelists(onCampus, onCampusLink, "onncampuslists");*/

//populateLinks(onCampus, onCampusLink, "oppForm");
//populateLinks(orgList,orgLink, "organizationsF");
//populateLinks(reuList, reuLink, "relatedREUForm");
//populateLinks(facultyList, facultyLink, "relatedFForm");
//populateLinks(aList, url, "relatedLForm")


// Find the response based on the keywords matched
feedback = careerLogic(myKeywordMatchesArray);
//alert(feedback);
if (feedback == "empty")
{
	feedback = fundingLogic(myKeywordMatchesArray);
	//alert(feedback);
}
if (feedback == "empty")
{
	feedback = otherLogic(myKeywordMatchesArray);
	//alert("Third");
}
	conversationArray.push(feedback);
	return feedback;
}

// Myles Note: Add a way to directly do the processing for the text. (Hint: Make a function)
// Currently there's no way in the code for me to just take a question and give it to the mentor directly


//function.js
/*
//Call this function when you want to update the Related Questions
//questionList is a list of questions you want to populate with

//populates.....related questions
//precondition questionList is a list
//postcondition falcons win
function printRelatedQuestions(questionList) {
	total = "";
	//Link approach
	for (i in questionList) {
		question = questionList[i];
		
		total += '<a href="javascript:void(0)" onclick="askForName(this.text)">' + question + "</a><br />";
	}
	
	total += "<br /><br />";
	
	
	
	document.getElementById("relatedForm").innerHTML = total;
}
*/