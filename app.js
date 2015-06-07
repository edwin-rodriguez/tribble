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

//launch
var port = process.env.PORT || 5000;
app.listen(port, function(){
	console.log('Tribble app listening at port ' + port + '...');
});

module.exports = app;