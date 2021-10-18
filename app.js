// importing modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Controller
var homeRouter = require('./routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//define path for controller
app.use('/', homeRouter);
app.use('/home', homeRouter);
app.use('/about-me', homeRouter);
app.use('/blog', homeRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Declaring locals to app.
app.locals.title = 'ABala Portfolio',
//app.locals.initials = 'Bala', 
app.locals.tab_home = 'Home',
app.locals.tab_skills = 'Skills',
app.locals.tab_projects = 'Projects',
app.locals.tab_contact = 'Contact Me',
app.locals.tab_about = 'About Me'
app.locals.tab_blog = 'Blog'
//making app public
module.exports = app;