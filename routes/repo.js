var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('repo', {data: req.body});
});

module.exports = router;
