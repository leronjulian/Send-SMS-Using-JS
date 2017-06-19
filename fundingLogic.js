// JavaScript Document
exports.fundingLogic = function(myKeywordMatchesArray) 
{
	// Based on matches, reply to the user
	var matching = "empty";
	////////////////////////
	// Fellowship Questions
	////////////////////////

	//For Testing
	var matchedKeyWords = [];

	if ((myKeywordMatchesArray[2]) && (myKeywordMatchesArray[8]))
	{
		// fellowship AND apply
		// How do you apply for a fellowship?
		matching = "There are several sources for fellowships and most of them will require the student to apply directly with their organization. Common items included in a fellowship packet includes: transcripts, essays, letters of recommendation and an application form.";

		matchedKeyWords[0] = 2;
		matchedKeyWords[1] = 8;
	}

	else if ((myKeywordMatchesArray[3]) && (myKeywordMatchesArray[2]))
	{	
		// fellowship AND GRE
		// What does my GRE score have to be to get a fellowship?
		matching = "Typically your GRE score needs to be high enough to get into the graduate program that you want to enter. A minimum GRE score for the fellowship itself is not common.";
		
		matchedKeyWords[0] = 2;
		matchedKeyWords[1] = 3;
	}

	else if ((myKeywordMatchesArray[9]) && (myKeywordMatchesArray[2]))
	{	
		//fellowship AND GPA
		// What does my GPA score have to be in order to receive a fellowship?
		matching = "Different awards have different criteria, however the better the GPA, the more competitive your application becomes. Typically, a 3.0 is the minimum since that is usually required to enter a graduate school program.";

		matchedKeyWords[0] = 9;
		matchedKeyWords[1] = 2;
	}

	else if ((myKeywordMatchesArray[10]) && (myKeywordMatchesArray[2]))
	{
		matchedKeyWords[0] = 10;
		matchedKeyWords[1] = 2;
		// fellowship AND tuition
		// Is tuition covered by a fellowship?
		matching = "Some do and some do not. Many times a fellowship will provide a stipend for living expenses and other support while asking the institution to help cover tuition.";
	}

	else if ((myKeywordMatchesArray[12]) && (myKeywordMatchesArray[2]))
	{
		matchedKeyWords[0] = 12;
		matchedKeyWords[1] = 2;
		//fellowship AND books
		// Are books included in the fellowship?
		matching = "It depends on the fellowship program. Keep in mind that some fellowships provide a stipend for living expenses, where the purchase of textbooks would be factored into among other things.";
	}

	else if ((myKeywordMatchesArray[2]) && (myKeywordMatchesArray[13]))
	{
		matchedKeyWords[0] = 2;
		matchedKeyWords[1] = 13;
		//fellowship AND best
		// Which fellowship is the best?
		matching = "Different fellowships are better for different students depending on their situation. Some offer more money, some may be more prestigious, some may have conference travel support or research equipment support. Some may come with mentoring and advisement. It is also important to factor in when you need it. For example, one fellowship may be better for a student working on their dissertation, but not when they are just starting their graduate program.";
	}

	else if ((myKeywordMatchesArray[2]) && (myKeywordMatchesArray[14]))
	{
		matchedKeyWords[0] = 2;
		matchedKeyWords[1] = 14;
		// fellowship AND job
		// Can you have a part time job with a fellowship?
		matching = "Ultimately, it depends on the stipulations of that fellowship. The purpose of many fellowships is to support you while you complete your degree so they may frown upon a recipient working too many hours outside of their department. If you do decide to work an additional job outside your department, let it be because you really need the money and not just because you can.";
	}

	else if ((myKeywordMatchesArray[2]) && (myKeywordMatchesArray[15]))
	{
		matchedKeyWords[0] = 2;
		matchedKeyWords[1] = 15;
		// fellowship AND summer
		// Are fellowships available in the summer?
		matching = "It depends on the fellowship received. Some fellowships are 9 month awards while others are 12 month awards. Some fellowships may be for 9 months and require you work as an intern over the summer.";
	}

	else if ((myKeywordMatchesArray[2]) && (myKeywordMatchesArray[17]))
	{
		matchedKeyWords[0] = 2;
		matchedKeyWords[1] = 17;
		// fellowship AND difference
		// What is the difference between a fellowship and a scholarship?
		matching = "Scholarships are funding packages awarded to undergraduates. Fellowships are funding packages awarded to graduate students.";
	}

	else if ((myKeywordMatchesArray[2]) && (myKeywordMatchesArray[103]))
	{
		matchedKeyWords[0] = 2;
		matchedKeyWords[1] = 103;
		// fellowship AND eligible
		// What must I do to be considered for a fellowship?
		matching = "First, you will need to make sure that you fit the criteria for that fellowship. For example, you may need to belong to a particular ethnic group, be attending a specific institution or working towards a degree in a particular field. If you find that you meet all the qualifications for a particular fellowship, you just apply.";
	}
	else if ((myKeywordMatchesArray[2]) && (myKeywordMatchesArray[21]) )
	{
		matchedKeyWords[0] = 2;
		matchedKeyWords[1] = 21;
		// fellowship AND start
		// Can I apply for a fellowship after a start graduate school?
		matching = "Some you can and some you cant. You just have to check with that particular program";
	}

	else if ((myKeywordMatchesArray[2]) && (myKeywordMatchesArray[22]))
	{
		matchedKeyWords[0] = 2;
		matchedKeyWords[1] = 22;
		// fellowship AND spring
		// Will a fellowship allow me to start in the spring semester?
		matching = "Maybe. It would depend on the fellowship.";
	}

	else if ((myKeywordMatchesArray[2]) && (myKeywordMatchesArray[51]))
	{
		matchedKeyWords[0] = 2;
		matchedKeyWords[1] = 51;
		// fellowship AND give
		// Who gives out fellowships? Where do fellowships come from?
		matching = "Universities, companies, non-profits and governmental agencies are some of the sources for fellowships.";
	}

	else if ((myKeywordMatchesArray[2]) && ((myKeywordMatchesArray[86]) || (myKeywordMatchesArray[69])))
	{	
		matchedKeyWords[0] = 2;
		if(myKeywordMatchesArray[86] == true)
		{
			matchedKeyWords[1] = 86;
		}
		else
		{
			matchedKeyWords[1] = 69;
		}
		// fellowship AND (cost OR most)
		// How much can I make with a fellowship??
		matching = "Different fellowships provide different award amounts. The highest award amount I have heard of for a student's yearly stipend is about $30,000.";
	}

	else if ((myKeywordMatchesArray[2]) && (myKeywordMatchesArray[97]))
	{
		matchedKeyWords[0] = 2;
		matchedKeyWords[1] = 97;
		// fellowship AND many
		// Can I have several fellowships at a time?
		matching = "Possibly. You just need to check the rules and regulations of all of the funding sources.";
	}

	else if ((myKeywordMatchesArray[2]))
	{
		matchedKeyWords[0] = 2;
		// fellowship
		// What is a fellowship?
		matching = "A fellowship is a financial award to attend graduate school that you don't have to pay back. ";
	}

	//////////////////////////////
	// Assistantship Questions
	//////////////////////////////

	else if ((myKeywordMatchesArray[1]) && (myKeywordMatchesArray[9]))
	{
		matchedKeyWords[0] = 1;
		matchedKeyWords[1] = 9;
		//q1
		// assistantship GPA
		// What does my GPA need to be to get an assistantship?
		matching = "There is no universal answer for every school, but obviously the higher your GPA the more likely you are to be awarded an assistantship. Many schools like to see at least a 3.0 when applying for a program, however a school may weight a GPA differently depending on the school the student has graduated from. Sometimes a graduate school will look at specific things in your transcript such as what you made in your major courses or what grades you made after your freshman year.";
	}
	else if ((myKeywordMatchesArray[1]) && (myKeywordMatchesArray[3]))
	{
		matchedKeyWords[0] = 1;
		matchedKeyWords[1] = 3;
		//q2 GRE assistantship
		// What does my GRE score need to be to gain an assistantship?
		matching = "I can not give you a specific score, however a high GRE score is a good thing because it makes you more competitive compared to other applicants. With that being said, some schools will not accept you into their program as a doctoral student in a STEM field without offering you an award. In those cases you would just need to have a high enough GRE to get into the program.";
	}
	else if ((myKeywordMatchesArray[1]) && (myKeywordMatchesArray[52]))
	{
		matchedKeyWords[0] = 1;
		matchedKeyWords[1] = 52;
		//q3 assistantship more
		// Could I have more than one assistantship at a time?
		matching = "You could. A school will  have a maximum number of hours a week you can work at the institution, so as long as your total number of hours worked doesn't exceed that amount, then it should be okay from the institutions perspective.";
	}
	else if ((myKeywordMatchesArray[1]) && (myKeywordMatchesArray[8]))
	{
		matchedKeyWords[0] = 1;
		matchedKeyWords[1] = 8;
		//q4 apply assistantships
		// How do i apply for an assistantships?
		matching = "It will differ from school to school. It also matters what type of assistantship you are seeking. A faculty member that has funding for a research assistant position would be able to tell you how to apply for that position. For a teaching assistantship, the graduate program director may be able to give you more information.";
	}
	else if ((myKeywordMatchesArray[1]) && (myKeywordMatchesArray[14]))
	{
		matchedKeyWords[0] = 1;
		matchedKeyWords[1] = 14;
		//q5 job assistantship
		// Could I have a full or part time job in addition to an assistantship?
		matching = "You should check with the guidelines of that institution. Keep in mind that some faculty frown upon working an outside job if they award you with an assistantship in that same semester.";
	}
	else if ((myKeywordMatchesArray[1]) && (myKeywordMatchesArray[30]))
	{
		matchedKeyWords[0] = 1;
		matchedKeyWords[1] = 30;
		//q6 money assistantship
		// How much money could I make doing an assistantship?
		matching = "It depends on the department for teaching assistantships since there is a typically a standard pay scale for graduate students. For research assistantships, the pay is typically set by the faculty member who is funding the student.";
	}
	else if ((myKeywordMatchesArray[1]) && (myKeywordMatchesArray[10]))
	{
		matchedKeyWords[0] = 1;
		matchedKeyWords[1] = 10;
		//q7 tuition assistantship
		// Is tuition covered by an assistantship?
		matching = "Yes it is.";
	}
	else if ((myKeywordMatchesArray[1]) && (myKeywordMatchesArray[31]))
	{
		matchedKeyWords[0] = 1;
		matchedKeyWords[1] = 31;
		//q8
		//health assistantship
		// Is health insurance included in an assistantship?
		matching = "It depends on the institution.";
	}
	else if ((myKeywordMatchesArray[1]) && (myKeywordMatchesArray[15]))
	{
		matchedKeyWords[0] = 1;
		matchedKeyWords[1] = 15;
		//q8 assistantships summer
		// Are assistantships offered over the summer?
		matching = "Yes, if funds are available from that faculty member or department.";
	}
	else if ((myKeywordMatchesArray[2]) && (myKeywordMatchesArray[1]))
	{
		matchedKeyWords[0] = 2;
		matchedKeyWords[1] = 1;
		//q9 fellowship assitantship
		// Which is better, a fellowship or assistantship?
		matching = "Both assistantships and fellowships have their pros and cons. Fellowships are better if you still engaged in research and active in your department.";
	}

	////////////////////////
	// Other Funding Questions
	////////////////////////

	else if ((myKeywordMatchesArray[69]) && (myKeywordMatchesArray[63]))
	{
		matchedKeyWords[0] = 69;
		matchedKeyWords[1] = 63;
		// funding and most
		//How much can I make with a fellowship or assistantship??
		matching = "Different fellowships provide different award amounts. The highest award amount I have heard of for a student's yearly stipend is about $30,000.";
	}
	else if (myKeywordMatchesArray[77]) 
	{
		matchedKeyWords[0] = 77;
		// financial aid
		//How do I get financial aid to pay for school?
		matching = "Two popular ways are fellowship awards and an assistantships. It is advise you pursue these options before considering student loans or any other source you have to pay back.";
	}

	else if (((myKeywordMatchesArray[63]) || (myKeywordMatchesArray[1]) ||(myKeywordMatchesArray[2]) ) && (myKeywordMatchesArray[90]))
	{
		if (myKeywordMatchesArray[63] == true)
		{
			matchedKeyWords[0] = 63;
		}
		else if (myKeywordMatchesArray[1] == true)
		{
			matchedKeyWords[0] = 1;
		}
		else if (myKeywordMatchesArray[2] == true)
		{
			matchedKeyWords[0] = 2;
		}

		matchedKeyWords[1] = 90;
		//funding and whole
		//How long will a fellowship or assistantship last?
		matching = "Typically, an assistantship is assigned for one year, but can be renewed yearly. A fellowship is typically a year long or multiple year award. ";
	}

	else if (myKeywordMatchesArray[63] && (myKeywordMatchesArray[13] || myKeywordMatchesArray[1] || myKeywordMatchesArray[2]))
	{
		matchedKeyWords[0] = 63;

		if (myKeywordMatchesArray[13] == true)
		{
			matchedKeyWords[1] = 13;
		}
		else if (myKeywordMatchesArray[1] == true)
		{
			matchedKeyWords[1] = 1;
		}
		else if (myKeywordMatchesArray[2] == true)
		{
			matchedKeyWords[1] = 2;
		}

		
		// funding AND (best OR assistantship OR fellowship)
		// Which is better, a fellowship or assistantship?
		matching = "Both assistantships and fellowships are great sources of graduate school funding since you don't have to pay them back; however, they have their pros and cons. Fellowships are more beneficial if you still engaged in research and are active in your department.";
	}

	else if (myKeywordMatchesArray[90] && (myKeywordMatchesArray[63] || myKeywordMatchesArray[1] || myKeywordMatchesArray[2]))
	{
		matchedKeyWords[0] = 90;

		if (myKeywordMatchesArray[63] == true)
		{
			matchedKeyWords[1] = 33;
		}
		else if (myKeywordMatchesArray[1] == true)
		{
			matchedKeyWords[1] = 1;
		}
		else if (myKeywordMatchesArray[2] == true)
		{
			matchedKeyWords[1] = 2;
		}
		// (funding [63] OR assistantship [1] OR fellowship [2] ) AND (whole [90] )
		// How long will a fellowship or assistantship funding last?
		matching = "Typically, an assistantship is assigned for one year, but can be renewed yearly. A fellowship is typically a year long or multiple year award.";
	}

	else if (myKeywordMatchesArray[63] && myKeywordMatchesArray[69])
	{
		matchedKeyWords[0] = 63;
		matchedKeyWords[1] = 69;
		// funding [63] AND most [69]
		// How much can I make with a fellowship or assistantship? 
		matching = "Different fellowships provide different award amounts. An approximate average for annual graduate stipends in STEM disciplines is thirty thousand dollars.";
	}

	else if (myKeywordMatchesArray[63])
	{
		matchedKeyWords[0] = 63;
		//funding
		// What ways can I get funding to attend graduate school? 
		matching = "Two popular ways to get free money to pay for graduate school are fellowship awards and an assistantships.";
	}

	else if (myKeywordMatchesArray[77])
	{
		matchedKeyWords[0] = 77;
		// aid [77]
		// How do I get financial aid to pay for school?
		matching = "Two prominent ways are fellowship awards and an assistantships. It is advise you pursue these options before considering student loans or any other source you have to pay back.";
	}

	else if (myKeywordMatchesArray[1])
	{
		matchedKeyWords[0] = 1;

		// assistantship [1]
		// What is an assistantship?
		matching = "An assistantship is funding for graduate school that requires you to do work. Different types of assistantship include teaching assistantship, research assistantship and generic graduate assistantship.";
	}

	else { 
		matching = "empty";
	}

	return [matching, matchedKeyWords];
}