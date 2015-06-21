var express = require('express'),
	storesCtrl = require('../controllers/controllers.store'),
	auth = require('../middlewares/middlewares.auth');

var routes = function () {
	var router = express.Router();

	router.route('/')
		.get(storesCtrl.get)
		.post(storesCtrl.post, auth.authorize);

	router.route('/:id')
		.get(storesCtrl.getById)
		.delete(storesCtrl.deleteById, auth.authorize);

	return router;
};

module.exports = routes;