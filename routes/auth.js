var express = require('express');
var router = express.Router();
var github = require('octonode');

router.post('/', function(request, response) {
	
	//console.log(request.body.username)
	//console.log(request.body.password)
	var client = github.client({
		username: request.body.username,
		password: request.body.password
	});

	client.get('/user', {}, function(err, status, body, headers) {
		//console.log(body);
		if (err) {
			console.log(err);
			//response.redirect('/');
			//response.render('index', { title: 'GitHub Login' });
			response.status(200).send("no matched username and password in github.");
		} else {
		response.render('user', {body: body});
		}	
	})
	
	
})


module.exports = router;