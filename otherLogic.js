// JavaScript Document
exports.otherLogic = function(myKeywordMatchesArray) 
{
	// Based on matches, reply to the user

	var matching = "empty";
	/////////////////////
	// Other Questions
	/////////////////////

	//For Testing
	var matchedKeyWords = [];

	if ((myKeywordMatchesArray[83]) && (myKeywordMatchesArray[60]))
	{
		matchedKeyWords[0] = 83;
		matchedKeyWords[1] = 60;
		// go and school
		// What is the best school for me to attend?
		matching = "You can find a list of schools with doctorate programs in computing using the Taulbee Survey [link to the survey: http://cra.org/resources/taulbee/]. The Taulbee Survey is the principal source of information on the enrollment, production, and employment of Ph.D.s in computer science and computer engineering. An additional resource is the Computer Science rankings of the  <a href='http://grad-schools.usnews.rankingsandreviews.com/best-graduate-schools/top-science-schools/computer-science-rankings' target='_blank'>US News and World Reports</a>.";
	}

	else if ((myKeywordMatchesArray[93] ) && (myKeywordMatchesArray[96] ))
	{
		matchedKeyWords[0] = 93;
		matchedKeyWords[1] = 96;
		// many and program
		// Can I work on two graduate degrees at the same time?
		matching = "It is common and sometimes advantageous to do interdisciplinary work across departments. However it is uncommon to work on two degrees at the same time.  ";
	}

	else if ((myKeywordMatchesArray[3] ) && (myKeywordMatchesArray[86] ))
	{
		matchedKeyWords[0] = 3;
		matchedKeyWords[1] = 86;
		// gre [3] AND cost [86]
		// How much does the GRE cost?
		matching = "As of October of 2012, the price of the GRE is $175. Go to the Educational Testing Service website to see if the price has changed. The website address is w w w dot e t s dot com.";
	}

	else if ((myKeywordMatchesArray[3] ) && (myKeywordMatchesArray[60] ))
	{
		matchedKeyWords[0] = 3;
		matchedKeyWords[1] = 60;
		// gre [3]  and school [60]
		// Which graduate and business school institutions accept GRE scores?
		matching = "See the complete list of institutions PDF using GRE scores and their official ETS code number.";
	}

	else if (((myKeywordMatchesArray[99] )) && ((myKeywordMatchesArray[60]) || (myKeywordMatchesArray[98])  ) )
	{
		matchedKeyWords[0] = 99;
		if(myKeywordMatchesArray[60] == true)
		{
			matchedKeyWords[1] = 60;
		}
		else
		{
			matchedKeyWords[1] = 98;
		}
		// balance AND (school OR course)
		// What ways can I find balance in graduate school?
		matching = "Graduate school easier the more organized you are. It's easy to schedule personal time for yourself when you schedule work time for yourself.";
	}

	else if ((myKeywordMatchesArray[99] ) && ((myKeywordMatchesArray[100]) || (myKeywordMatchesArray[101])))
	{
		matchedKeyWords[0] = 99;
		if(myKeywordMatchesArray[100] == true)
		{
			matchedKeyWords[1] = 100;
		}
		else
		{
			matchedKeyWords[1] = 101;
		}
		// (important OR view) AND (grade)
		// How important are grades in graduate school?
		matching = "Graduate schools typically require you to maintain at least a B average to remain in good standing with the program. However, employers may not weigh your GPA as heavily as they would coming out of undergrad. Thing common things employers look at is who you worked with, what school did you attend and what research did you conduct while you were there.";
	}

	else if ((myKeywordMatchesArray[100] || myKeywordMatchesArray[101]) && myKeywordMatchesArray[109])
	{
		
		if(myKeywordMatchesArray[100] == true)
		{
			matchedKeyWords[0] = 100;
		}
		else
		{
			matchedKeyWords[0] = 109;
		}
		matchedKeyWords[1] = 109;
		// (important [100] OR view [101]) AND (grade [109])
		// How important are grades in graduate school?
		matching = "Graduate schools typically require you to maintain at least a B average to remain in good standing with the program. However, employers may not weigh your GPA as heavily as they would coming out of undergrad. Thing common things employers look at is who you worked with, what school did you attend and what research did you conduct while you were there.";
	}

	else if ((myKeywordMatchesArray[52] ) && (myKeywordMatchesArray[96] || myKeywordMatchesArray[91]  || myKeywordMatchesArray[108] ))
	{
		matchedKeyWords[0] = 52;

		if(myKeywordMatchesArray[96] == true)
		{
			matchedKeyWords[1] = 96;
		}
		else if (myKeywordMatchesArray[91] == true)
		{
			matchedKeyWords[1] = 91;
		}
		else
		{
			matchedKeyWords[1] = 108;
		}


		// many [52]  and (school [96] or degree[91] or doctorate[108])
		// Can I work on two graduate degrees at the same time?
		matching = "It is common and sometimes advantageous to do interdisciplinary work across departments; however, it is uncommon to work on two degrees at the same time.";
	}

	else if ((myKeywordMatchesArray[13] ) && (myKeywordMatchesArray[96] ))
	{
		matchedKeyWords[0] = 13;
		matchedKeyWords[1] = 96;
			// best [13]  and school [96]
		// What is the best school for me to attend?
		matching = "You can find a list of schools with doctorate programs in computing using the Taulbee Survey. The Taulbee Survey is the principal source of information on the enrollment, production, and employment of Ph.D.s in computer science and computer engineering. An additional resource is the Computer Science rankings of the US News and World Reports.";
	}

	else if ((myKeywordMatchesArray[52] && myKeywordMatchesArray[96]) || myKeywordMatchesArray[81])
	{
		matchedKeyWords[0] = 52;
		if(myKeywordMatchesArray[96] == true)
		{
			matchedKeyWords[1] = 96;
		}
		else
		{
			matchedKeyWords[1] = 81;
		}
		// gre [52]  and school [96]
		// What is the best school for me to attend?
		matching = "You can find a list of schools with doctorate programs in computing using the Taulbee Survey. The Taulbee Survey is the principal source of information on the enrollment, production, and employment of Ph.D.s in computer science and computer engineering. An additional resource is the Computer Science rankings of the US News and World Reports.";
	}

	else if (myKeywordMatchesArray[3])
	{
		matchedKeyWords[0] = 3;
		// gre [3] 
		// What is the GRE?
		matching = "The Graduate Record Examinations (GRE) is a standardized test created and administered by Educational Testing Service that is an admissions requirement for many graduate schools in the United States.";
	}

	else if (myKeywordMatchesArray[48] || myKeywordMatchesArray[110])
	{
		if(myKeywordMatchesArray[48] == true)
		{
			matchedKeyWords[0] = 48;
		}

		else if (myKeywordMatchesArray[110] == true)
		{
			matchedKeyWords[0] = 110;
		}
		// research [48] or researcher [110]
		// What type of research activities would I do in graduate school?
		matching = "Computer Science research can include such diverse activities as designing and building new computer systems, proving mathematical theorems, writing computer software, measuring the performance of a computer system, using analytical tools to assess a design, or studying the errors programmers make as they build a large software system. Because a researcher chooses the activities appropriate to answer each question that arises in a research investigation, and because new questions arise as an investigation proceeds, research activities vary from project to project and over time in a single project. A researcher must be prepared to use a variety of approaches and tools.";
	}

	else if (myKeywordMatchesArray[60])
	{
		matchedKeyWords[0] = 60;
		// school [60]
		// How do I select a graduate school?
		matching = "When selecting a graduate school, some factors for choosing a graduate school include a relationship with one of the faculty, research at that school you are interested in, ranking and reputation of the school or department and funding. You can find a list of schools with doctorate programs in computing using the Taulbee Survey.";
	}

	else if (myKeywordMatchesArray[108])
	{
		matchedKeyWords[0] = 108;
		// phd [108]
		// What is a phd?
		matching = "A Doctor of Philosophy degree, abbreviated Ph.D., is the highest academic degree anyone can earn. Because earning a Ph.D. requires extended study and intense intellectual effort, less than one percent of the population attains the degree. Society shows respect for a person who holds a Ph.D. by addressing them with the title, Doctor. To earn a Ph.D., one must accomplish two things. First, one must master a specific subject completely. Second, one must extend the body of knowledge about that subject.";
	}

	else if (myKeywordMatchesArray[86])
	{
		matchedKeyWords[0] = 86;
		// cost [86]
		// What is the cost of graduate school?
		matching = "The cost of graduate will depend on the school and potentially your state of residency. If you get accepted into a Ph.D. program and some masters programs you have a strong chance of receiving free tuition from either a fellowship award or assistantship from the university.";
	}

	else if (myKeywordMatchesArray[104])
	{
		matchedKeyWords[0] = 104;
		// government [104]
		// Can I have a career in government with a PhD?
		matching = "The government offers career options with a Ph.D. in computing. There are jobs in different governmental agencies as well as jobs working in national research labs.";
	}

	else { 
		matching = "I don't understand your statement";
	}

	return [matching, matchedKeyWords];
}