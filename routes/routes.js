var express = require('express'),
	storesCtrl = require('../controllers/controllers.store'),
  sectionsCtrl = require('../controllers/controllers.section'),
  articlesCtrl = require('../controllers/controllers.article'),
  imagesCtrl = require('../controllers/controllers.images'),
	auth = require('../middlewares/middlewares.auth');

var routes = function () {
	var router = express.Router();

  //stores
	router.route('/stores/')
		.get(storesCtrl.get)
		.post(storesCtrl.post);
	router.route('/stores/:id')
		.get(storesCtrl.getById)
		.delete(auth.authorize, storesCtrl.deleteById);

  //sections
  router.route('/sections/')
		.get(auth.authorize, sectionsCtrl.get)
		.post(auth.authorize, sectionsCtrl.post);
	router.route('/sections/:id')
		.get(auth.authorize, sectionsCtrl.getById)
		.delete(auth.authorize, sectionsCtrl.deleteById);

  //articles
  router.route('/articles/')
		.get(auth.authorize, articlesCtrl.get)
		.post(auth.authorize, articlesCtrl.post);
	router.route('/articles/:id')
		.get(auth.authorize, articlesCtrl.getById)
		.delete(auth.authorize, articlesCtrl.deleteById);

  //images
  router.route('/images/article')
		.post(auth.authorize, imagesCtrl.postByArticle);

	return router;
};

module.exports = routes;
