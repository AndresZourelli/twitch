const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_KEY, domain: process.env.MAILGUN_DOMAIN});

module.exports = (req, res) => {
	
	 
	var data = {
	  from: 'Excited User <me@samples.mailgun.org>',
	  to: 'serobnic@mail.ru',
	  subject: 'Hello',
	  text: 'Testing some Mailgun awesomeness!'
	};
	 
	mailgun.messages().send(data, function (error, body) {
	  console.log(body);
	});	
}