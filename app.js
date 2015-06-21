var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

//connect to db
var db = mongoose.connect('mongodb://localhost/tribble-dev');

//create app
var app = express();

//set up body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//custom routes
var storeRoutes = require('./routes/routes.store')();
var articleRoutes = require('./routes/routes.article')();
var sectionRoutes = require('./routes/routes.section')();
app.use('/stores', storeRoutes);
app.use('/articles', articleRoutes);
app.use('/sections', sectionRoutes);

//root route
app.get('/', function(req, res){
	res.send('hello tribble!');
});

//launch
var port = process.env.PORT || 5000;
app.listen(port, function(){
	console.log(process.env);
	console.log('Tribble app listening at port ' + port + '...');
});

module.exports = app;