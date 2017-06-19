// JavaScript Document
exports.careerLogic = function(myKeywordMatchesArray) 
{
	var matching = "empty";
	// Based on matches, reply to the user

	///////////////////////////////
	// Entrepreneurship Questions
	///////////////////////////////

	//For Testing
	var matchedKeyWords = [];

	if ((myKeywordMatchesArray[42]) && (myKeywordMatchesArray[5]))
	{
		matchedKeyWords[0] = 42;
		matchedKeyWords[1] = 5;
		// responsibility AND entrepreneur
		// What would I do as an entrepreneur?
		matching = "Your job responsibilities as an entrepreneur would depend on the opportunity you are seeking. Various job responsibilities include developing a product or application, finding funding, marketing your product, pay employees and selling the company";
		audio = 'eq112';
	}

	else if ((myKeywordMatchesArray[39]) && (myKeywordMatchesArray[5]))
	{
		matchedKeyWords[0] = 39;
		matchedKeyWords[1] = 5;
		// entrepreneur AND benefits
		// What are some of the benefits of becoming an entrepreneur?
		matching = "First you have the potential to make a lot of money as an entrepreneur. You also have full control over decisions made throughout your company.";
	}

	else if ((myKeywordMatchesArray[6]) && (myKeywordMatchesArray[5]))
	{
		matchedKeyWords[0] = 6;
		matchedKeyWords[1] = 5;
		// entrepreneur AND challenges
		// What would be some of the challenges of becoming an entrepreneur?
		matching = "Some of the challenges of becoming an entrepreneur include raising capital, the amount of time needed, having to invest portions of your income back into the company.";
	}

	///////////////////////////////
	// Industry Questions
	///////////////////////////////

	else if ((myKeywordMatchesArray[34]) && (myKeywordMatchesArray[35]))
	{
		matchedKeyWords[0] = 34;
		matchedKeyWords[1] = 35;
		// q1 prepare industry
		// What Would I do to prepare for an industry position?
		matching = "There are many strategies that you can take. You could get an internship with the company you want to work for or you can do research in graduate school that is relevant to the company you want to work at. When you encounter individuals that could help you get a job in a company, it is good to keep in contact with them and keep them updated on your accomplishments and current status.";
	}
	else if ((myKeywordMatchesArray[35]) && (myKeywordMatchesArray[37]))
	{
		matchedKeyWords[0] = 35;
		matchedKeyWords[1] = 37;
		//q2 money industry
		// How much would you make in industry positions?
		matching = "You should expect to start out no lower than 90 thousand dollars a year depending on your location. A six-figure salary is very common when starting out.";
	}
	else if ((myKeywordMatchesArray[35]) && (myKeywordMatchesArray[39]))
	{	
		matchedKeyWords[0] = 35;
		matchedKeyWords[1] = 39;
		//q3 benefits industry
		// What are the benefits of obtaining an industry position?
		matching = "Some of the benefits in working in industry include flexible work hours, high salary and corporate benefits. Compared to academia companies can take ideas to the marketplace faster, you don't have to bring in grants to fund your research and companies do not put employees through a formal tenure process.";
	}
	else if ((myKeywordMatchesArray[35]) && (myKeywordMatchesArray[6]))
	{
		matchedKeyWords[0] = 35;
		matchedKeyWords[1] = 6;
		//q4
		// What are some of the challenges of having an industry position?
		matching = "Some of the challenges of working in industry include abrupt changes in direction from management, number of hours needed to work, performance evaluation, retraction of funding for a project and the restrictiveness of the research that you work on.";
	}
	else if ((myKeywordMatchesArray[35]) && (myKeywordMatchesArray[43]))
	{
		matchedKeyWords[0] = 35;
		matchedKeyWords[1] = 43;
		//q5 responsibilities industry
		// What are your job responsibilities at an industry position?
		matching = "Job responsibilities will vary depending on the specific project or product worked on. Potential tasks include working in teams, gathering data, presenting findings, develop prototypes and collect feedback from users.";
	}

	///////////////////////////////
	// Faculty Questions
	///////////////////////////////

	else if ((myKeywordMatchesArray[43]) && (myKeywordMatchesArray[48]))
	{
		matchedKeyWords[0] = 43;
		matchedKeyWords[1] = 48;
		//q1 reponsibilities research
		// What are my job responsibilities as a research faculty member?
		matching = "Job responsibilities include teaching, research and service. When conducting research you must generate grant funding to fund your students and equipment. You will also conduct research and publish your results. Different service activities to perform could include advising graduate students, administer qualifying exams and serving on committees like department committees or dissertation committees.";
	}
	else if ((myKeywordMatchesArray[47]) && (myKeywordMatchesArray[14]))
	{
		matchedKeyWords[0] = 47;
		matchedKeyWords[1] = 14;
		//q2 difficult research
		// How difficult is it to obtain a job as a research faculty member?
		matching = "Very hard. One needs a lot of publications of high quality. However, depending on how qualified a candidate is, your relationship with the people you are applying to and the climate of the academic market it may be less difficult.";
	}
	else if ((myKeywordMatchesArray[39]) && (myKeywordMatchesArray[48]))
	{
		matchedKeyWords[0] = 39;
		matchedKeyWords[1] = 48;
		//q3 research benefits
		// What are the benefits of becoming a research faculty member?
		matching = "You get to make your own decision about the type of research that you one to do. You also get the satisfaction in mentoring students. Other benefits include the travel, the pay, flexible work schedule and the access to resources as an entrepreneur.";
	}
	else if ((myKeywordMatchesArray[34]) && (myKeywordMatchesArray[48]))
	{
		matchedKeyWords[0] = 34;
		matchedKeyWords[1] = 48;
		//q4 prepare research
		// How do I prepare if I want to become a research faculty member?
		matching = "A strong publication record is required. Other ways to prepare include helping to write a grant proposal, getting some experience as a teaching assistant, develop oral and written communication skills, take on leadership positions and take as many courses as you can in your perspective research area.";
	}
	//Joshua Addition, WE THE BEST LLC Incorpoarated AFA 
	//1
	else if ((myKeywordMatchesArray[6]) && (myKeywordMatchesArray[48]))
	{
		matchedKeyWords[0] = 6;
		matchedKeyWords[1] = 48;
		//q5 research challenges
		// For a research faculty member, what are some of the challenges of working as a research faculty member?
		matching = "There is a lot you have to balance as a research faculty member, including advising students, publishing and grant writing. Getting tenure and promotion maybe the biggest challenge. ";
	}
	//2
	else if ((myKeywordMatchesArray[53]) && (myKeywordMatchesArray[48]))
	{
		matchedKeyWords[0] = 53;
		matchedKeyWords[1] = 48;
		//q6 research teaching
		// How much teaching would i do as a research faculty member?
		matching = "It varies, some institutions tends to teach one class a semester, some institutions teach three classes a year across two semesters, some institutions teach four. It just depends on the department and the level of research. ";
	}
	//3
	else if ((myKeywordMatchesArray[58]) && (myKeywordMatchesArray[53]))
	{
		matchedKeyWords[0] = 58;
		matchedKeyWords[1] = 53;
		//q6 flexible research
		//How flexible is a job as a research faculty member?
		matching = "You have complete flexibility.  You work at your own time, at your own pace. All you have to do is be there in class, now you have some control over that but the most part you do what you want to do.  You decide what trips to take, where to go, and what trips not to take. ";
	}
	//4
	else if ((myKeywordMatchesArray[4]) && (myKeywordMatchesArray[53]))
	{
		matchedKeyWords[0] = 4;
		matchedKeyWords[1] = 53;
		//q1 teaching faculty
		//What do you do as a teaching faculty member?
		matching = "You spend a lot of time teaching classes. Outside of teaching, you will also have to advise students, attend faculty meetings, serve on committees and conduct some research.  ";
	}
	else if ((myKeywordMatchesArray[50]) && (myKeywordMatchesArray[53]))
	{
		matchedKeyWords[0] = 50;
		matchedKeyWords[1] = 53;
		//q2 teaching choice
		//How is the choice of school important for a teaching faculty?
		matching = "Because there's still such a lack of diversity with African-American men or women in computer sciences, the choice of school is not as big of a factor. ";
	}
	else if ((myKeywordMatchesArray[34]) && (myKeywordMatchesArray[53]))
	{
		matchedKeyWords[0] = 34;
		matchedKeyWords[1] = 53;
		//q3 teaching prepare
		//What can i do to prepare for a career as a teaching faculty member?
		matching = "You can certainly talk to individuals that are currently teaching faculty. Taking education classes in graduate school, working as a teaching assistant and working as an adjunct instructor may also help.  ";
	}
	else if ((myKeywordMatchesArray[59]) && (myKeywordMatchesArray[53]))
	{
		matchedKeyWords[0] = 59;
		matchedKeyWords[1] = 53;
		//q4 teaching publications
		//Are publications important to obtaining a teaching position?
		matching = "Yes. It will help you land a teaching faculty position. It will also factor into the department's decision to give you tenure or not. Lastly, conducting research will have a positive effect on your teaching. ";
	}
	else if ((myKeywordMatchesArray[41]) && (myKeywordMatchesArray[53]))
	{	
		matchedKeyWords[0] = 41;
		matchedKeyWords[1] = 53;
		//q5 obtain teaching
		//How would someone obtain a job as teaching faculty member?
		matching = "Find out when and where job opening are, find out how to apply, gather all the needed documentation and submit your application. ";
	}
	else if ((myKeywordMatchesArray[39]) && (myKeywordMatchesArray[53]))
	{
		matchedKeyWords[0] = 39;
		matchedKeyWords[1] = 53;
		//q6 benefits teaching
		//What are some of the benefits of becoming a teaching faculty member?
		matching = "You get to impact the lives of young students, you get flexibility with your time and you can also make more money with your free time. ";
	}
	else if ((myKeywordMatchesArray[6]) && (myKeywordMatchesArray[53]))
	{
		matchedKeyWords[0] = 6;
		matchedKeyWords[1] = 53;
			//q7 teaching challenges
		//What are some of the challenges of becoming a teaching faculty member?
		matching = "Some of the challenges include lower salary, compared to research faculty and money for supplies. Since you are teaching so many classes you have less time for your own research.  ";
	}
	else if ((myKeywordMatchesArray[30]) && (myKeywordMatchesArray[53]))
	{
		matchedKeyWords[0] = 30;
		matchedKeyWords[1] = 53;
		//q8 teaching money
		//How much money can i make as a teaching faculty member?
		matching = "From what I hear, you can make from the low to mid sixties starting straight out of graduate school. This would be your 9 month salary and doesn't include any extra income for teaching summer school.  ";
	}

	else if ( ((myKeywordMatchesArray[93]) || (myKeywordMatchesArray[94])) && ((myKeywordMatchesArray[34])||(myKeywordMatchesArray[8]) ) )
	{
		if (myKeywordMatchesArray[93] == true)
		{
			matchedKeyWords[0] = 93;
		}

		else if (myKeywordMatchesArray[94] == true)
		{
			matchedKeyWords[0] = 94;
		}

		if (myKeywordMatchesArray[34] == true)
		{
			matchedKeyWords[1] = 34;
		}

		else if (myKeywordMatchesArray[8] == true)
		{
			matchedKeyWords[1] = 8;
		}
		//apply/prepare company/career 
		//What would I do to prepare for an industry position?
		matching = "There are many strategies that you can take. You could get an internship with the company you want to work for or you can do research in graduate school that is relevant to the company you want to work at. When you encounter individuals that could help you get a job in a company, it is good to keep in contact with them and keep them updated on your accomplishments and current status.";
	}
	else if ((myKeywordMatchesArray[95] ) && (myKeywordMatchesArray[56] ))
	{
		matchedKeyWords[0] = 95;
		matchedKeyWords[1] = 56;
		// decide and career
		// What things should I consider when deciding a career path with a graduate degree?
		matching = "Some things you should consider is the type of work you would do, how much research you want to do, if you enjoy teaching, how much money do you want to make and what type of location do you want to live at. Also consider if you want to chose your own research to work on or are you comfortable working on an assigned research project. ";
	}

	else if ((myKeywordMatchesArray[45] ) && (myKeywordMatchesArray[34] ))
	{
		matchedKeyWords[0] = 45;
		matchedKeyWords[1] = 34;
		// faculty and prepare
		// How do I prepare in graduate school to become to faculty member?
		matching = "A strong publication record is required. Other ways to prepare include helping to write a grant proposal, getting some experience as a teaching assistant, develop oral and written communication skills, take on leadership positions and take as many courses as you can in your perspective research area. ";
	}
	else if ((myKeywordMatchesArray[56] ) && (myKeywordMatchesArray[96] ))
	{
		matchedKeyWords[0] = 56;
		matchedKeyWords[1] = 96;
		// career and program 
		// How does your choice of school affect your chances to obtain a corporate research position?
		matching = "When many companies hire someone with a Ph.D. in computing, they will usually stick with graduates of a few select institutions. Attending a graduate school that has a good reputation with companies will increase your chances of obtaining a job with one of these companies. ";
	}

		else if ((myKeywordMatchesArray[56]) && (myKeywordMatchesArray[57]) || (myKeywordMatchesArray[54]) && (myKeywordMatchesArray[55]) || (myKeywordMatchesArray[61]) && (myKeywordMatchesArray[108]))
	{
		matchedKeyWords[0] = 56;

		if (myKeywordMatchesArray[57] == true)
		{
			matchedKeyWords[1] = 57;
		}

		if (myKeywordMatchesArray[54] == true)
		{
			matchedKeyWords[1] = 54;
		}

		if (myKeywordMatchesArray[55] == true)
		{
			matchedKeyWords[2] = 55;
		}

		if (myKeywordMatchesArray[61] == true)
		{
			matchedKeyWords[2] = 61;
		}

		matchedKeyWords[3] = 108;
		// (career AND phd) || (options AND computing) || (special AND doctoral)
		//What are my career options with a PhD in computing?
		matching = "You could become a professor, you could go work at government or corporate research labs.  You could be an entrepreneur or work for a non-profit. There are many options with a Ph.D. in computing. ";
	}

	else if ((myKeywordMatchesArray[4]) && (myKeywordMatchesArray[91]))
	{
		matchedKeyWords[0] = 4;
		matchedKeyWords[1] = 91;
		// do and degree
		// How are my career options enhanced with a graduate degree in computer science?
		matching = "A master's degree will typically provide you with a learning experience in a particular area of computing. Finding a job with a company, non-profit or government agency is common. A doctoral degree will give you the same opportunities, however it is a research degree and will prepare you to take up a research career in industry, government, policy or higher education.";
	}

	else if ((myKeywordMatchesArray[56] ) &&  (myKeywordMatchesArray[102]) )
	{
		matchedKeyWords[0] = 56;
		matchedKeyWords[1] = 102;
		// (career) AND (subject)
		// How does my research area affected my career options?
		matching = "Often companies, government agencies, research labs, and colleges will look for someone with a particular expertise. Other times, they may look for someone who is just a strong researcher. It would be wise to work in an hot area to ensure yourself more employment opportunities.";
	}

	else if ((myKeywordMatchesArray[56] || myKeywordMatchesArray[105] || myKeywordMatchesArray[106] || myKeywordMatchesArray[107] || myKeywordMatchesArray[108] ) &&  (myKeywordMatchesArray[54] || myKeywordMatchesArray[56] || myKeywordMatchesArray[4] || myKeywordMatchesArray[95]))
	{
		if (myKeywordMatchesArray[56] == true)
		{
			matchedKeyWords.push(56);
		}

		if (myKeywordMatchesArray[105] == true)
		{
			matchedKeyWords.push(105);
		}

		if (myKeywordMatchesArray[106] == true)
		{
			matchedKeyWords.push(106);
		}

		if (myKeywordMatchesArray[107] == true)
		{
			matchedKeyWords.push(107);
		}

		if (myKeywordMatchesArray[108] == true)
		{
			matchedKeyWords.push(108);
		}

		if (myKeywordMatchesArray[54] == true)
		{
			matchedKeyWords.push(54);
		}

		if (myKeywordMatchesArray[56] == true)
		{
			matchedKeyWords.push(56);
		}

		if (myKeywordMatchesArray[4] == true)
		{
			matchedKeyWords.push(4);
		}

		if (myKeywordMatchesArray[95] == true)
		{
			matchedKeyWords.push(95);
		}

		/*
		if (myKeywordMatchesArray[56] == true)
		{
			matchedKeyWords[0] = 56;
		}

		else if (myKeywordMatchesArray[105] == true)
		{
			matchedKeyWords[0] = 105;
		}

		else if(myKeywordMatchesArray[106] == true)
		{
			matchedKeyWords[0] = 106;
		}

		else if(myKeywordMatchesArray[107] == true)
		{
			matchedKeyWords[0] = 107;
		}

		else if(myKeywordMatchesArray[108] == true)
		{
			matchedKeyWords[0] = 108;
		}


		if (myKeywordMatchesArray[54] == true)
		{
			matchedKeyWords[1] = 54;
		}

		else if (myKeywordMatchesArray[56] == true)
		{
			matchedKeyWords[1] = 56;
		}

		else if(myKeywordMatchesArray[4] == true)
		{
			matchedKeyWords[1] = 4;
		}

		else if(myKeywordMatchesArray[95] == true)
		{
			matchedKeyWords[1] = 95;
		}
		*/
		// (career)  AND (options)
		// What are my career options with a graduate degree in computing?
		matching = "A master's degree will typically provide you with a learning experience in a particular area of computing. Finding a job with a company, non-profit or government agency is common. A doctoral degree will give you the same opportunities, however it is a research degree and will prepare you to take up a research career in industry, government, policy or higher education. ";
	}

	else if (myKeywordMatchesArray[60]  && myKeywordMatchesArray[94]) 
	{
		matchedKeyWords[0] = 60;
		matchedKeyWords[1] = 94;
		// school [60] AND company [94]
		// What are the benefits for getting a graduate degree in computing?
		matching = "There are many benefits for pursuing a doctoral degree in computing versus a bachelors or masters degree. Some benefits include an increased salary, less supervision, and more say in decisions about the projects you would work on. Additionally, having PhD says you are able to do independent research and you made a contribution to the field and you are an expert over that area. Having a Master's degree indicates that you have the capability to master a general area like computer science; and a Bachelor's degree indicates that you have some capacity to perform using fundamental computer science techniques and theories.";
	}

	else if ((myKeywordMatchesArray[102] || myKeywordMatchesArray[54]) && (myKeywordMatchesArray[56] || myKeywordMatchesArray[55]))
	{
		if (myKeywordMatchesArray[102] == true)
		{
			matchedKeyWords[0] = 102;
		}

		else if (myKeywordMatchesArray[54] == true)
		{
			matchedKeyWords[0] = 54;
		}

		if (myKeywordMatchesArray[56] == true)
		{
			matchedKeyWords[1] = 56;
		}

		else if (myKeywordMatchesArray[55] == true)
		{
			matchedKeyWords[1] = 55;
		}
		// (subject [102] OR options [54]) AND (career [56] OR computing [55])
		// How does my research area affected my career options?
		matching = "Often companies, government agencies, research labs, and colleges will look for someone with a particular expertise. They may also look for someone who has a strong background in research. It would be wise to work in an hot area to ensure yourself more employment opportunities.";
	}

	else 
	{ 
		matching = "empty";
	}

	return [matching, matchedKeyWords];
}