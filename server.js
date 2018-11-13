//Dependencies
var express = require ('express');
var path = require('path');


//Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

//Sets up the express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/app'));

//Routing
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


//Start listening on Port
app.listen(PORT, function() {
    console.log('Friend Finder app is listening on PORT: '+ PORT);
    
});