var express = require('express');
var router = express.Router();
var movies=require('../model/movie');



/* GET home page. */
router.get('/', function(req, res, next) {
  var m=movies.getMovie();
  var mask=movies.createMask(m)
  res.write('{movie:'+m+',mask:'+mask+'}');
  res.end();
  
});




module.exports = router;