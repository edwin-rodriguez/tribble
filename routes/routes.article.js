var express = require('express'),
	articlesCtrl = require('../controllers/controllers.article'),
	auth = require('../middlewares/middlewares.auth');

var routes = function () {
	var router = express.Router();

	router.route('/')
		.get(articlesCtrl.get)
		.post(articlesCtrl.post, auth.authorize);

	router.route('/:id')
		.get(articlesCtrl.getById)
		.delete(articlesCtrl.deleteById, auth.authorize);

	return router;
};

module.exports = routes;