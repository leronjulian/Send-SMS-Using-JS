//Init File to: convert string to lowercase, remove puncuation, and swap synonyms
var initFile = require('./init');
//Express Library is a microWeb Framework
var express = require('express');

//BodyParser Library parses Twilio's request
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 1337

//exteded: false, tells parser not to parse fancy URL Bodies
app.use(bodyParser.urlencoded({extended: false})); 

//Route handles post request on the message endpoint
app.post('/', function (req, res) 
{
	console.log(req.body);
	//Gets the phone number of the user
	var msgFrom = req.body.From; 
	//Gets the message that the user sent
	var initalString = req.body.Body;

	var lowerCaseString = initalString;

	//Converts string to lower case and stores each word in myArray
	lowerCaseString = initFile.askForName(lowerCaseString);

	//Strips punctuation and 's'
	var holder = initFile.stripWord(lowerCaseString);

	//var strippedWords = holder[2];

	//Joins strings in array to create one sentence
	//var sentence = holder.join(" ");

	//The answer to the question
	//var sentence = holder[2];

	var matchedWords = holder[2];

	var keyWords = holder[1].join(", ");

	var assumedQuestion = holder[0].join(" ");


	//TESTING////////
	//The assummed Question
	//Words they mathced on
	//The keywords pair for the question

	var testing = "Assumed Question: " + assumedQuestion + "\n\n" + "Matched Words: " + matchedWords + "\n\n" + "Keywords: " + keyWords;

	//////////////////////



	//Originial question and ECA response in desired format
	//var mentorResponse = "You: " + initalString + "\n\n" + "Mentor: " + sentence;

	//Keywords
	//var keyWords = holder[1].join(" ");

	//used http response (Twiml) which is a set of XML tags to tell Twilio what to do next
	res.send(`
		<Response>
			<Message>
				${testing} 
			</Message>
		</Response>
	`);
});

//Port that the app is listening on (1337)
//Must start server (node AutoReply.js)
//Must have ngrok running (./ngrok http 1337)
//Must set Message Comes In on Twilio Dashboard to the second forwarding (xxx/message)
app.listen(port)