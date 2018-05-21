//server setup------------------------------------------
var createError = require('http-errors');
var express = require('express');
var path = require('path');
//using logger to keep track of requests
var logger = require('morgan');
var apiRouter = require('./routes/movieroutes');
var app = express();
app.use(logger('dev'));
app.use(express.json());
//server setup------------------------------------------

//game setup------------------------------------------
var wins = 0;
var loss = 0;
const movies=require('./model/movie');
var m=movies.getMovie();
// console.log(m);
//game setup------------------------------------------


//routing setup------------------------------------------
app.use(express.static(path.join(__dirname, 'dist/game')));
app.use('/', express.static(path.join(__dirname, 'dist/game')));

//testAPI
app.use('/api', apiRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(err.status);
});
//routing setup------------------------------------------

module.exports = app;