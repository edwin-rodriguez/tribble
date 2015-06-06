var express = require('express');

var routes = function () {
	var router = express.Router();

	router.route('/')
		.get(function(req, res){
			res.status(500).send('nothing yet :(');
		});

	return router;
};

module.exports = routes;