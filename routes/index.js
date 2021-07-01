var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/env', function(req, res, next) {
  res.json({"message": (process.env.environment ?? "")});
});

module.exports = router;
