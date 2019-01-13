var express = require('express');
var router = express.Router();
var https = require('https')


router.post('/', function(req, res, next) {
  //console.log(req.body)
  console.log(req.body.following_url)
  var url = req.body.following_url

  // e.g. https://api.github.com/users/jzhang007/following{/other_user}
  var username = url.slice(29, -23
  	);
  console.log('username is ' + username)
  var options = {
  	host: 'api.github.com',
  	path: '/users/' + username + '/following',
  	method: 'GET',
  	headers: {'user-agent': 'node.js'}
  }

  //var body = '';
  var request = https.request(options, function(response) {
  	var body = '';
  	response.on("data", function(chunk) {
  		body += chunk.toString('utf8');
  	})

  	response.on("end", function() {
  		// console.log(body)
  		var data = JSON.parse(body)
  		res.render('following', {data: data});
  	})
  })
  request.end()
  //console.log(body)
  //res.render('repo', {data: body});
  // res.render('repo')

});

module.exports = router;
