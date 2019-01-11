var express = require('express');
var router = express.Router();

router.post('/', function(request, response) {
	//console.log("yes")
	console.log(request.body.username)
	console.log(request.body.password)
	response.render('auth', {username: request.body.username, password: request.body.password});
})


module.exports = router;