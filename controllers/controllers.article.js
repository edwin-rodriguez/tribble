var articleModel = require('../models/models.article');

var ctrl = {
	get: function(req, res) {
		var query = req.query;

		articleModel.find(query, function(err, list){
			if (err)
				res.status(404).send(err);
			else
				res.json(list);
		});
	},
	getById: function(req, res) {
		var id = req.params.id;

		articleModel.findById(id, function(err, obj){
			if(err)
				res.status(404).send(err);
			else
				res.json(obj);
		});
	},
	post: function(req,res){
		var store = new articleModel(req.body);

		store.save(function(err){
			if (err) {
				res.status(500).send(err);
			} else {
				res.status(201);
				res.json(store);
			}
		});
	},
	deleteById: function(req, res){
		var id = req.params.id;

		articleModel.findById(id).remove(function (err){
			if(err)
				res.status(500).send(err);
			else
				res.status(205).send('removed');
		});
	}
};

module.exports = ctrl;
