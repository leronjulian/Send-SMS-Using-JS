// List of the possible keywords
var myKeywordsArray = [];
myKeywordsArray[0] = "score";
myKeywordsArray[1] = "assistantship";
myKeywordsArray[2] = "fellowship";
myKeywordsArray[3] = "gre";
myKeywordsArray[4] = "do";
myKeywordsArray[5] = "entrepreneur";
myKeywordsArray[6] = "challenge";
myKeywordsArray[7] = "is";
myKeywordsArray[8] = "apply";
myKeywordsArray[9] = "gpa";
myKeywordsArray[10] = "tuition";
myKeywordsArray[11] = "covered";
myKeywordsArray[12] = "book";
myKeywordsArray[13] = "best";
myKeywordsArray[14] = "job";
myKeywordsArray[15] = "summer";
myKeywordsArray[16] = "scholarship";
myKeywordsArray[17] = "difference";
myKeywordsArray[18] = "work";
myKeywordsArray[19] = "consider";
myKeywordsArray[20] = "after";
myKeywordsArray[21] = "start";
myKeywordsArray[22] = "spring";
myKeywordsArray[23] = "more";
myKeywordsArray[24] = "one";
myKeywordsArray[25] = "agency";
myKeywordsArray[26] = "organization";
myKeywordsArray[27] = "fund";
myKeywordsArray[28] = "supplie";
myKeywordsArray[29] = "source";
myKeywordsArray[30] = "money";
myKeywordsArray[31] = "health";
myKeywordsArray[32] = "insurance";
myKeywordsArray[33] = "better";
myKeywordsArray[34] = "prepare";
myKeywordsArray[35] = "industry";
myKeywordsArray[36] = "position";
myKeywordsArray[37] = "salary";
myKeywordsArray[38] = "salarie";
myKeywordsArray[39] = "benefit";
myKeywordsArray[40] = "obtaining";
myKeywordsArray[41] = "obtain";
myKeywordsArray[42] = "responsibility";
myKeywordsArray[43] = "responsibilities";
myKeywordsArray[44] = "corporate";
myKeywordsArray[45] = "faculty";
myKeywordsArray[46] = "member";
myKeywordsArray[47] = "difficult";
myKeywordsArray[48] = "research";
myKeywordsArray[49] = "benefit";
myKeywordsArray[50] = "becoming";
myKeywordsArray[51] = "give";
myKeywordsArray[52] = "many";
myKeywordsArray[53] = "teaching";
myKeywordsArray[54] = "option";
myKeywordsArray[55] = "computing";
myKeywordsArray[56] = "career";
myKeywordsArray[57] = "phd";
myKeywordsArray[58] = "flexible";
myKeywordsArray[59] = "publication";
myKeywordsArray[60] = "school";
myKeywordsArray[61] = "special";
myKeywordsArray[62] = "doctoral";
myKeywordsArray[63] = "funding";
myKeywordsArray[64] = "pay";
myKeywordsArray[65] = "stipend";
myKeywordsArray[66] = "tuition";
myKeywordsArray[67] = "scholarship";
myKeywordsArray[68] = "limits";
myKeywordsArray[69] = "most";
myKeywordsArray[70] = "highest";
myKeywordsArray[71] = "more";
myKeywordsArray[72] = "greatest";
myKeywordsArray[73] = "amount";
myKeywordsArray[74] = "maximum";
myKeywordsArray[75] = "federal";
myKeywordsArray[76] = "financial";
myKeywordsArray[77] = "aid";
myKeywordsArray[78] = "fafsa";
myKeywordsArray[79] = "loan";
myKeywordsArray[80] = "grant";
myKeywordsArray[81] = "attend";
myKeywordsArray[82] = "competitive";
myKeywordsArray[83] = "go";
myKeywordsArray[84] = "live";
myKeywordsArray[85] = "living";
myKeywordsArray[86] = "cost";
myKeywordsArray[87] = "expenses";
myKeywordsArray[88] = "funds";
myKeywordsArray[89] = "period";
myKeywordsArray[90] = "whole";
myKeywordsArray[91] = "degree";
myKeywordsArray[92] = "dosdiandsi";
myKeywordsArray[93] = "holder";
myKeywordsArray[94] = "company";
myKeywordsArray[95] = "decide";
myKeywordsArray[96] = "program";
myKeywordsArray[97] = "many";
myKeywordsArray[98] = "course";
myKeywordsArray[99] = "balance";
myKeywordsArray[100] = "important";
myKeywordsArray[101] = "view";
myKeywordsArray[102] = "subject";
myKeywordsArray[103] = "eligible";
myKeywordsArray[104] = "government";
myKeywordsArray[105] = "bachelors";
myKeywordsArray[106] = "graduate";
myKeywordsArray[107] = "master";
myKeywordsArray[108] = "doctorate";
myKeywordsArray[109] = "grade";
myKeywordsArray[110] = "researcher";

//==============================================================================
//This function gets the user input and converts all the characters to lowercase
//==============================================================================
exports.askForName = function(userImput)
{ 
	var lowerString = userImput.toLowerCase();
	return lowerString;
}


//==============================================================================
//This function strips 's from words, removes puncuation, and replaces words with
//their synonyms
//==============================================================================
exports.stripWord = function(userImput)
{
	// Here is a list of keyword matches
	var myKeywordMatchesArray = new Array(false);

	// Split the user's sentence up into an array
	var myArray = userImput.split(' '); 

	// Count the number of items in the user imput and save it to a variable
	var arrayLength = myArray.length;

	// Strip punctuation and 's' from each word
	var temp2 = "";
	var temp2b = "";
	var temp3 = "";
	var temp4 = "";
	var nonCharPattern = /\W/g; // Regular expression that finds non-letter text
	var endWithSPattern = /s$/g; // Regular expression that finds word that ends with s

	for (i = 0; i < arrayLength; i++)
	{
		temp2 = myArray[i];
		temp2b = temp2.replace(nonCharPattern, "");
		
		// Exchange synonyms	
			//wordTense.js	
		temp3 = wordtense(temp2b);
			//wordSub.js
		temp4 = wordsub(temp3); 
		
		// words we don't want to strip the 's' off of
		if ((temp4 != "is") && (temp4 != "us") && (temp4 != "was")) 
		{
			myArray[i] = temp4.replace(endWithSPattern, "");
		}
	}

	//---------------TO FIND KEYWORD------------------------------------------
	var counter1 = myArray.length; // Counter for the inner array
	var counter2 = myKeywordsArray.length; // Number of words in the keywords list
	var superCount = 0; // Count the number of comparisons
	var hitCount = 0; // Count the number of keywords found
	isaMatch = "no";
	var name;
	var link;
	var ran;
	var ranner;
	var ranner1;

	while (counter2)
	{
		// See if a input word matches a particular keyword
		while (counter1)
		{
			if (myArray[arrayLength - counter1] == myKeywordsArray[counter2 - 1])
			{
				myKeywordMatchesArray[counter2 - 1] = true;
				isaMatch = "yes";
				hitCount++;
			}
			superCount++;
			counter1--;
		} // End Counter1 Loop
		counter2--;
		counter1 = myArray.length;
	} // End Counter2 Loop
	
	//Array to store the keywords that were found
	var keywords = [];
	var iter = 0;
	
	for (j = 0; j < myKeywordsArray.length; j++)
	{
		if (myKeywordMatchesArray[j] == true)
		{
			keywords[iter] = myKeywordsArray[j];
			iter++
		}
	}

	//Returns [parsed string, keywords that were found in the string]
	return [myArray, keywords];
}

//==============================================================================
//This function returns the keyword if a similar word is given
//precondition is that e is an event
//postcondtion, new word is returned if changed, old word is returned if not
//==============================================================================
function wordsub(temp3){ 
	 // check to make sure word is given
	 if (!temp3)
	 {
		 // alert("no word passed to the function replacing the related words to keywords");
	 }
	 // academics
	 else if (temp3 == "grade")
	 temp3 = "academics";
	 
	 // aid
	 else if (temp3 == "federal" || temp3 == "fafsa" || temp3 == "loan" || temp3 == "land" )
	 temp3 = "apply";
	 
	 // apply
	 else if (temp3 == "get" || temp3 == "obtain" || temp3 == "receive" || temp3 == "land" )
	 temp3 = "apply";
	 

	 // assistantship
	 else if (temp3 == "RA" || temp3 == "GA" || temp3 == "TA")
	 temp3 = "assistantship";
 
	 // attend
	 else if (temp3 == "go" || temp3 == "appear" || temp3 == "show" || temp3 == "visit" )
	 temp3 = "attend";
	 
	 // bachelors
	 else if (temp3 == "undergrad" || temp3 == "undergraduate")
	 temp3 = "bachelors";
	 
	 // benefit
	 else if (temp3 == "advantage" || temp3 == "edge" || temp3 == "convenience" || temp3 == "bonus" )
	 temp3 = "benefit";
	 
	 // best
	 else if (temp3 == "attractive" || temp3 == "great" || temp3 == "perfect" || temp3 == "fine" || temp3 == "better" || temp3 == "top")
	 temp3 = "best";
	 
	 // career
	 else if (temp3 == "job" || temp3 == "field" || temp3 == "work" || temp3 == "employment" || temp3 == "business" || temp3 == "occupation" || temp3 == "profession" || temp3 == "position")
	 temp3 = "career";
	 
	 // cost
	 else if (temp3 == "expense" || temp3 == "amount" || temp3 == "make" || temp3 == "earn" || temp3 == "price")
	 temp3 = "cost";
	 
	 // challenge
	 else if (temp3 == "suffer" || temp3 == "downside" || temp3 == "withstand")
	 temp3 = "challenge";
	 
	 // company
	 else if (temp3 == "industry" || temp3 == "corporation" || temp3 == "corporate")
	 temp3 = "company";
	 
	 // computing
	 else if (temp3 == "cs" || temp3 == "c")
	 temp3 = "company";
	 
	 // decide
	 else if (temp3 == "choose" || temp3 == "conclude" || temp3 == "guess" || temp3 == "select" )
	 temp3 = "decide";
	 
	 // difference
	 else if (temp3 == "compare" || temp3 == "compared" || temp3 == "distinction" || temp3 == "change" )
	 temp3 = "difference";
	 
	 // difficult
	 else if (temp3 == "hard" || temp3 == "tough" || temp3 == "crucial" || temp3 == "heavy" || temp3 == "severe" || temp3 == "lofty")
	 temp3 = "difficult";
	 
	 // do
	 else if (temp3 == "achieve" || temp3 == "accomplish" || temp3 == "complete" || temp3 == "produce" )
	 temp3 = "do";
	 
	 // doctorate
	 else if (temp3 == "doctoral" || temp3 == "phd" )
	 temp3 = "doctorate";

	 // eligible
	 else if (temp3 == "considered" )
	 temp3 = "eligible";
	 
	 // faculty
	 else if (temp3 == "professor" || temp3 == "teach" || temp3 == "teacher")
	 temp3 = "faculty";
	 
	 // fellowship
	 else if (temp3 == "scholarship" )
	 temp3 = "fellowship";
	 
	 // find
	 else if (temp3 == "look" || temp3 == "search")
	 temp3 = "find";
	 
	 // flexible
	 else if (temp3 == "adaptive" || temp3 == "adaptable" || temp3 == "variable")
	 temp3 = "flexible";
	 
	 // funding
	 else if (temp3 == "pay" || temp3 == "stipend" || temp3 == "tuition" || temp3 == "money" || temp3 == "fund" || temp3 == "award" )
	 temp3 = "funding";

	 // give
	 else if (temp3 == "administer" || temp3 == "allow" || temp3 == "deliver" || temp3 == "donate" || temp3 == "part" || temp3 == "provide" || temp3 == "permit" )
	 temp3 = "give";
	 
	 // grade
	 else if (temp3 == "gpa" || temp3 == "academics")
	 temp3 = "grade";
	 
	 // gre
	 else if (temp3 == "test" || temp3 == "score")
	 temp3 = "gre";
	 
	 // important
	 else if (temp3 == "relevant" || temp3 == "needed" || temp3 == "required" || temp3 == "essential" || temp3 == "fundamental" || temp3 == "prominent" || temp3 == "major")
	 temp3 = "important";
	 
	 // include
	 else if (temp3 == "cover" || temp3 == "contain" || temp3 == "involve" || temp3 == "have" )
	 temp3 = "include";
	 
	 // live
	 else if (temp3 == "living" )
	 temp3 = "live";
	 
	 // many
	 else if (temp3 == "multiple" || temp3 == "two" || temp3 == "many" || temp3 == "several" || temp3 == "another" )
	 temp3 = "many";
	 
	 // most
	 else if (temp3 == "highest" || temp3 == "limit" || temp3 == "more" || temp3 == "greatest" || temp3 == "maximum" || temp3 == "much" || temp3 == "very" || temp3 == "full")
	 temp3 = "most";
	 
	 // options
	 else if (temp3 == "choice" || temp3 == "opportunitie" || temp3 == "opportunity")
	 temp3 = "options";
	 
	 // prepare
	 else if (temp3 == "learn" || temp3 == "become")
	 temp3 = "prepare";
	 
	 // program
	 else if ( temp3 == "division" || temp3 == "degree" || temp3 == "department" || temp3 == "major" )
	 temp3 = "program";
	 
	 // publication
	 else if (temp3 == "paper" || temp3 == "manuscript")
	 temp3 = "publication";
	 
	 // responsibility
	 else if (temp3 == "task" || temp3 == "duty" || temp3 == "requirement" )
	 temp3 = "responsibility";
	 
	 // school
	 else if (temp3 == "place" || temp3 == "institution" || temp3 == "college" || temp3 == "university" )
	 temp3 = "school";
	 
	 // salary
	 else if (temp3 == "wage" || temp3 == "earning" || temp3 == "income" )
	 temp3 = "salary";
	 
	 // start
	 else if (temp3 == "begin" || temp3 == "outset")
	 temp3 = "start";
	 
	 // subject
	 else if (temp3 == "area" || temp3 == "niche" || temp3 == "specialization" || temp3 == "track")
	 temp3 = "subject";
	 
	 // viewed
	 else if (temp3 == "interpret")
	 temp3 = "viewed";
	 
	 // whole
	 else if (temp3 == "entire" || temp3 == "all" || temp3 == "total" || temp3 == "every")
	 temp3 = "whole"; 
	 
	 return temp3;	 
}

//==============================================================================
//This function changes the tense of every word that the user entered
//EX. graded = grade, grading = grade
//==============================================================================
function wordtense(temp2b){ 
	 // check to make sure word is given
	 if (!temp2b)
	 {
		 alert("no word passed to the function replacing word tenses");
	 }
	 
	 else if (temp2b == "graded")
	 temp2b = "grade";
	 
	 else if (temp2b == "grading")
	 temp2b = "grade";
	 
	 else if (temp2b == "applied")
	 temp2b = "apply";
	 
	 else if (temp2b == "applying")
	 temp2b = "apply";
	 
	 else if (temp2b == "got")
	 temp2b = "get";
	 
	 else if (temp2b == "getting")
	 temp2b = "get";
	 
	 else if (temp2b == "obtained")
	 temp2b = "obtain";
	 
	 else if (temp2b == "obtaining")
	 temp2b = "obtain";
	 
	 else if (temp2b == "receive")
	 temp2b = "received";
	 
	 else if (temp2b == "receiving")
	 temp2b = "receiving";
	 
	 else if (temp2b == "landed")
	 temp2b = "land";
	 
	 else if (temp2b == "landing")
	 temp2b = "land";
	 
	 else if (temp2b == "attended")
	 temp2b = "attend";
	 
	 else if (temp2b == "attending")
	 temp2b = "attend";
	 
	 else if (temp2b == "gone")
	 temp2b = "go";
	 
	 else if (temp2b == "going")
	 temp2b = "go";
	 
	 else if (temp2b == "appeared")
	 temp2b = "appear";
	 
	 else if (temp2b == "appearing")
	 temp2b = "appear";
	 
	 else if (temp2b == "showing")
	 temp2b = "show";
	 
	 else if (temp2b == "shown")
	 temp2b = "show";
	 
	 else if (temp2b == "visited")
	 temp2b = "visit";
	 
	 else if (temp2b == "visiting")
	 temp2b = "visit";
	 
	 else if (temp2b == "benefitted")
	 temp2b = "benefit";
	 
	 else if (temp2b == "benefitting")
	 temp2b = "benefit";
	 
	 else if (temp2b == "edged")
	 temp2b = "edge";
	 
	 else if (temp2b == "edging")
	 temp2b = "edge";
	 
	 else if (temp2b == "convenienced")
	 temp2b = "convenience";
	 
	 else if (temp2b == "attractiveness")
	 temp2b = "attractive";
	 
	 else if (temp2b == "bonuses")
	 temp2b = "bonus";
	 
	 else if (temp2b == "greatest")
	 temp2b = "great";
	 
	 else if (temp2b == "perfected")
	 temp2b = "perfect";
	 
	 else if (temp2b == "worked")
	 temp2b = "work";
	 
	 else if (temp2b == "working")
	 temp2b = "work";
	 
	 else if (temp2b == "worker")
	 temp2b = "work";
	 
	 else if (temp2b == "employed")
	 temp2b = "employment";
	 
	 else if (temp2b == "employ")
	 temp2b = "employment";
	 
	 else if (temp2b == "businesses")
	 temp2b = "business";
	 
	 else if (temp2b == "made")
	 temp2b = "make";
	 
	 else if (temp2b == "making")
	 temp2b = "make";
	 
	 else if (temp2b == "earned")
	 temp2b = "earn";
	 
	 else if (temp2b == "earning")
	 temp2b = "earn";
	 
	 else if (temp2b == "challenged")
	 temp2b = "challenge";
	 
	 else if (temp2b == "challenging")
	 temp2b = "challenge";
	 
	 else if (temp2b == "suffered")
	 temp2b = "suffer";
	 
	 else if (temp2b == "suffering")
	 temp2b = "suffer";
	 
	 else if (temp2b == "withstanding")
	 temp2b = "withstand";
	 
	 else if (temp2b == "withstood")
	 temp2b = "withstand";
	 
	 else if (temp2b == "industries")
	 temp2b = "industry";
	 
	 else if (temp2b == "deciding")
	 temp2b = "decide";
	 
	 else if (temp2b == "decided")
	 temp2b = "decide";
	 
	 else if (temp2b == "chose")
	 temp2b = "choose";
	 
	 else if (temp2b == "choosing")
	 temp2b = "choose";
	 
	 else if (temp2b == "concluded")
	 temp2b = "conclude";
	 
	 else if (temp2b == "concluding")
	 temp2b = "conclude";
	 
	 else if (temp2b == "guessed")
	 temp2b = "guess";
	 
	 else if (temp2b == "guessing")
	 temp2b = "guess";
	 
	 else if (temp2b == "selected")
	 temp2b = "select";
	 
	 else if (temp2b == "selecting")
	 temp2b = "select";
	 
	 else if (temp2b == "compared")
	 temp2b = "compare";
	 
	 else if (temp2b == "comparing")
	 temp2b = "compare";
	 
	 else if (temp2b == "distinct")
	 temp2b = "distinction";
	 
	 else if (temp2b == "changed")
	 temp2b = "change";
	 
	 else if (temp2b == "changing")
	 temp2b = "change";
	 
	 else if (temp2b == "hardest")
	 temp2b = "hard";
	 
	 else if (temp2b == "harder")
	 temp2b = "hard";
	 
	 else if (temp2b == "toughest")
	 temp2b = "tough";
	 
	 else if (temp2b == "tougher")
	 temp2b = "tough";
	 
	 else if (temp2b == "heaviest")
	 temp2b = "heavy";
	 
	 else if (temp2b == "heavier")
	 temp2b = "heavy";
	 
	 else if (temp2b == "loftier")
	 temp2b = "lofty";
	 
	 else if (temp2b == "achieved")
	 temp2b = "achieve";
	 
	 else if (temp2b == "achievement")
	 temp2b = "achieve";
	 
	 else if (temp2b == "achieving")
	 temp2b = "achieve";
	 
	 else if (temp2b == "accomplished")
	 temp2b = "accomplish";
	 
	 else if (temp2b == "accomplishing")
	 temp2b = "accomplish";
	 
	 else if (temp2b == "completed")
	 temp2b = "complete";
	 
	 else if (temp2b == "completing")
	 temp2b = "complete";
	 
	 else if (temp2b == "produced")
	 temp2b = "produce";
	 
	 else if (temp2b == "producing")
	 temp2b = "produce";
	 
	 else if (temp2b == "considered")
	 temp2b = "consider";
	 
	 else if (temp2b == "considering")
	 temp2b = "consider";
	 
	 else if (temp2b == "taught")
	 temp2b = "teach";
	 
	 else if (temp2b == "teaching")
	 temp2b = "teach";
	 
	 else if (temp2b == "finding")
	 temp2b = "find";
	 
	 else if (temp2b == "looked")
	 temp2b = "look";
	 
	 else if (temp2b == "looking")
	 temp2b = "look";
	 
	 else if (temp2b == "searched")
	 temp2b = "search";
	 
	 else if (temp2b == "searching")
	 temp2b = "search";
	 
	 else if (temp2b == "adapted")
	 temp2b = "adaptive";
	 
	 else if (temp2b == "adapting")
	 temp2b = "adaptive";
	 
	 else if (temp2b == "paid")
	 temp2b = "pay";
	 
	 else if (temp2b == "paying")
	 temp2b = "pay";
	 
	 else if (temp2b == "funded")
	 temp2b = "funds";
	 
	 else if (temp2b == "awarded")
	 temp2b = "award";
	 
	 else if (temp2b == "awarding")
	 temp2b = "award";
	 
	 else if (temp2b == "gave")
	 temp2b = "give";
	 
	 else if (temp2b == "given")
	 temp2b = "give";
	 
	 else if (temp2b == "administered")
	 temp2b = "administer";
	 
	 else if (temp2b == "administering")
	 temp2b = "administer";
	 
	 else if (temp2b == "allowed")
	 temp2b = "allow";
	 
	 else if (temp2b == "allowing")
	 temp2b = "allow";
	 
	 else if (temp2b == "delivered")
	 temp2b = "deliver";
	 
	 else if (temp2b == "delivering")
	 temp2b = "deliver";
	 
	 else if (temp2b == "donated")
	 temp2b = "donate";
	 
	 else if (temp2b == "donating")
	 temp2b = "donate";
	 
	 else if (temp2b == "parted")
	 temp2b = "part";
	 
	 else if (temp2b == "parting")
	 temp2b = "part";
	 
	 else if (temp2b == "provided")
	 temp2b = "provide";
	 
	 else if (temp2b == "providing")
	 temp2b = "provide";
	 
	 else if (temp2b == "permiting")
	 temp2b = "permit";
	 
	 else if (temp2b == "permitted")
	 temp2b = "permit";
	 
	 else if (temp2b == "graded")
	 temp2b = "grade";
	 
	 else if (temp2b == "grading")
	 temp2b = "grade";
	 
	 else if (temp2b == "tested")
	 temp2b = "test";
	 
	 else if (temp2b == "testing")
	 temp2b = "test";
	 
	 else if (temp2b == "scored")
	 temp2b = "score";
	 
	 else if (temp2b == "scoring")
	 temp2b = "score";
	 
	 else if (temp2b == "require")
	 temp2b = "required";
	 
	 else if (temp2b == "requiring")
	 temp2b = "required";
	 
	 else if (temp2b == "majored")
	 temp2b = "major";
	 
	 else if (temp2b == "majoring")
	 temp2b = "major";
	 
	 else if (temp2b == "included")
	 temp2b = "include";
	 
	 else if (temp2b == "including")
	 temp2b = "include";
	 
	 else if (temp2b == "covered")
	 temp2b = "cover";
	 
	 else if (temp2b == "covering")
	 temp2b = "cover";
	 
	 else if (temp2b == "contained")
	 temp2b = "contain";
	 
	 else if (temp2b == "containing")
	 temp2b = "contain";
	 
	 else if (temp2b == "involved")
	 temp2b = "involve";
	 
	 else if (temp2b == "involving")
	 temp2b = "involve";
	 
	 else if (temp2b == "had")
	 temp2b = "have";
	 
	 else if (temp2b == "having")
	 temp2b = "have";
	 
	 else if (temp2b == "lived")
	 temp2b = "living";
	 
	 else if (temp2b == "live")
	 temp2b = "living";
	 
	 else if (temp2b == "twice")
	 temp2b = "two";
	 
	 else if (temp2b == "high")
	 temp2b = "highest";
	 
	 else if (temp2b == "higher")
	 temp2b = "highest";
	 
	 else if (temp2b == "limited")
	 temp2b = "limit";
	 
	 else if (temp2b == "limiting")
	 temp2b = "limit";
	 
	 else if (temp2b == "most")
	 temp2b = "more";
	 
	 else if (temp2b == "greater")
	 temp2b = "greatest";
	 
	 else if (temp2b == "max")
	 temp2b = "maximum";
	 
	 else if (temp2b == "maxed")
	 temp2b = "maximum";
	 
	 else if (temp2b == "filled")
	 temp2b = "full";
	 
	 else if (temp2b == "fulling")
	 temp2b = "full";
	 
	 else if (temp2b == "prepared")
	 temp2b = "prepare";
	 
	 else if (temp2b == "preparing")
	 temp2b = "prepare";
	 
	 else if (temp2b == "learned")
	 temp2b = "learn";
	 
	 else if (temp2b == "learning")
	 temp2b = "learn";
	 
	 else if (temp2b == "became")
	 temp2b = "become";
	 
	 else if (temp2b == "becoming")
	 temp2b = "become";
	 
	 else if (temp2b == "duties")
	 temp2b = "duty";
	 
	 else if (temp2b == "placing")
	 temp2b = "place";
	 
	 else if (temp2b == "placed")
	 temp2b = "place";
	 
	 else if (temp2b == "universities")
	 temp2b = "university";
	 
	 else if (temp2b == "waged")
	 temp2b = "wage";
	 
	 else if (temp2b == "started")
	 temp2b = "start";
	 
	 else if (temp2b == "starting")
	 temp2b = "start";
	 
	 else if (temp2b == "beginning")
	 temp2b = "begin";
	  
	 else if (temp2b == "began")
	 temp2b = "begin";
	 
	 else if (temp2b == "researched")
	 temp2b = "research";
	 
	 else if (temp2b == "researching")
	 temp2b = "research";
	 
	 else if (temp2b == "researcher")
	 temp2b = "research";
	 
	 else if (temp2b == "specialize")
	 temp2b = "specialization";
	 
	 else if (temp2b == "specializing")
	 temp2b = "specialization";
	 
	 else if (temp2b == "specialized")
	 temp2b = "specialization";
	 
	 else if (temp2b == "interpreting")
	 temp2b = "interpret";
	 
	 else if (temp2b == "interpreted")
	 temp2b = "interpret";
	 
	 else if (temp2b == "totaled")
	 temp2b = "total";
	 
	 else if (temp2b == "totaling")
	 temp2b = "total";
	 
	 else if (temp2b == "everything")
	 temp2b = "every";
	 
	 else if (temp2b == "finest")
	 temp2b = "fine";
	 
	 return temp2b; 
}
