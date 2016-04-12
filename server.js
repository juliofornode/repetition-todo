//1. dependencies
//npm modules
var express = require('express');
var path = require('path');
var http = require('http');
var methodOverride = require('method-override');
var logger = require('morgan');
var errorHandler = require('errorhandler');

//our own modules
var routes = require('./routes');


//2. db connection


//3. app instantiation
var app = express();


//4. app configuration: views, views engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
var port = app.get('port');


//5. middleware definition: static, error handling, form handling
app.use(express.static(path.join('/public')));
app.use(methodOverride());
app.use(logger('dev'));
// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}


//6. routes and request handlers
app.get('/', routes.index);


//catch-all route
app.all('*', function(req, res) {
    res.status(404).send('Page Not Found');
});

//7. app server start on host and port
http.createServer(app).listen(port, function(req, res) {
    console.log('the server is listening on port ', port);
});