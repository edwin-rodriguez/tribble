var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

//connect to db
var db = mongoose.connect('mongodb://tribble-dev:tribble-dev@ds023213.mlab.com:23213/tribble-dev'); //mlab

//create app
var app = express();

//set up body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//CORS support
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

//custom routes
var storeRoutes = require('./routes/routes.store')();
var articleRoutes = require('./routes/routes.article')();
var sectionRoutes = require('./routes/routes.section')();
var sectionRoutes = require('./routes/routes.images')();
app.use('/stores', storeRoutes);
app.use('/articles', articleRoutes);
app.use('/sections', sectionRoutes);
app.use('/images', sectionRoutes);

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
