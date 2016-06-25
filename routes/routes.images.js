var express = require('express'),
	imagesCtrl = require('../controllers/controllers.images'),
	auth = require('../middlewares/middlewares.auth');

var routes = function () {
	var router = express.Router();

	router.route('/article')
		.post(imagesCtrl.postByArticle, auth.authorize);

	return router;
};

module.exports = routes;
