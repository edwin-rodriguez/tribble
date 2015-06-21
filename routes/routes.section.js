var express = require('express'),
	sectionsCtrl = require('../controllers/controllers.section'),
	auth = require('../middlewares/middlewares.auth');

var routes = function () {
	var router = express.Router();

	router.route('/')
		.get(sectionsCtrl.get)
		.post(sectionsCtrl.post, auth.authorize);

	router.route('/:id')
		.get(sectionsCtrl.getById)
		.delete(sectionsCtrl.deleteById, auth.authorize);

	return router;
};

module.exports = routes;