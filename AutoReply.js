//Express Library is a microWeb Framework
var express = require('express');

//BodyParser Library parses Twilio's request
var bodyParser = require('body-parser');

var app = express();

//exteded: false, tells parser not to parse fancy URL Bodies
app.use(bodyParser.urlencoded({extended: false})); 

//Route handles post request on the message endpoint
app.post('/message', function (req, res) 
{
	console.log(req.body);
	//Gets the phone number of the user
	var msgFrom = req.body.From;
	//Gets the message that the user sent
	var msgBody = req.body.Body;

	//used http response (Twiml) which is a set of XML tags to tell Twilio what to do next
	res.send(`
		<Response>
			<Message>
				//Message being replied to the user
				${msgBody}
			</Message>
		</Response>
	`);
});

//Port that the app is listening on (1337)
//Must have app running (node AutoReply.js)
//Must have ngrok running (./ngrok http 1337)
app.listen(1337);