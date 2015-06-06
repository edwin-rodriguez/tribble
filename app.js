var express = require('express');

//create app
var app = express();

//custom routes
var storeRoutes = require('./routes/storeRoutes')();
app.use('/stores', storeRoutes);

//root directory
app.get('/', function(req, res){
	res.send('hello tribble!');
});

app.listen(5000, function(){
	console.log('Tribble app listening...');
});

module.exports = app;