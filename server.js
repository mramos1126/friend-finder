var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



var app = express(); 
var PORT = process.env.PORT || 7500; 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


//require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


// app.get('/survey', function(req, res){
// 		res.sendFile(path.join(__dirname + '/../public/survey.html'));
// 	});

// 	app.get('/home', function(req, res){
// 		res.sendFile(path.join(__dirname + '/../public/home.html'));
// 	});

// 	// If no matching route is found default to home
// 	app.use(function(req, res){
// 		res.sendFile(path.join(__dirname + '/../public/home.html'));
// 	});







app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});