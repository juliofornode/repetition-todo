//1. dependencies
//npm modules
var express = require('express');
var path = require('path');

//our own modules
var routes = require('./routes');


//2. db connection


//3. app instantiation
var app = express();


//4. app configuration: views, views engine
app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'jade');


//5. middleware definition: static, error handling, form handling
app.use(express.static(path.join('/public')));


//6. routes and request handlers
app.get('/', routes);


//catch-all route
app.all('*', function(req, res) {
    res.status(404).send('Page Not Found');
});

//7. app server start on host and port