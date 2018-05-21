var express = require('express');
var router = express.Router();
var movies=require('../model/movie');



/* GET home page. */
router.get('/', function(req, res, next) {
  var _id=movies.getMovieId();
  var _movie=movies.getMovie(_id);
  var _mask=movies.createMask(_movie);
  res.json({id:_id,movieName: _movie, movieMask:_mask});
  
});




module.exports = router;