var express = require('express');
var router = express.Router();
var github = require('octonode');
// var GitHub = require('@octokit/rest')();
// var client = new GitHub();

router.post('/', function(request, response) {
	
	//console.log(request.body.username)
	//console.log(request.body.password)
	// console.log(request.body.otp)
	// var client = github.client({
	// 	username: request.body.username,
	// 	password: request.body.password,
	// 	//'x-github-otp': request.body.otp
	// });

	// client.get('/user', {}, function(err, status, body, headers) {
	// 	//console.log(body);
	// 	if (err) {
	// 		console.log(err);
	// 		//response.redirect('/');
	// 		//response.render('index', { title: 'GitHub Login' });
	// 		response.status(200).send("no matched username and password in github.");
	// 	} else {
	// 	response.render('user', {body: body});
	// 	}	
	// })
	// 
	var scopes = {
  		'scopes': ['user', 'repo', 'gist'],
  		'note': 'admin script'
	};

	github.auth.config({
  		username: request.body.username,
  		password: request.body.password,
  		otp: request.body.otp
	}).login(scopes, function (err, id, token, headers) {
  		console.log(id, token);
  		console.log(headers)
  	})
	// }).get('/user', {}, function(err, status, body, headers) {
	// 	console.log(body);
	// // 	if (err) {
	// // 		console.log(err);
	// // 		//response.redirect('/');
	// // 		//response.render('index', { title: 'GitHub Login' });
	// // 		response.status(200).send("no matched username and password in github.");
	// // 	} else {
	// // 	response.render('user', {body: body});
	// // 	}	
	// })
})


module.exports = router;