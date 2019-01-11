var express = require('express');
var router = express.Router();
var github = require('octonode');

router.post('/', function(request, response) {
	//console.log("yes")
	//console.log(request.body.username)
	//console.log(request.body.password)
	var client = github.client({
		username: request.body.username,
		password: request.body.password
	});

	client.get('/user', {}, function(err, status, body, headers) {
		console.log(body);
	})
	response.render('auth', {username: request.body.username, password: request.body.password});
	
})


module.exports = router;