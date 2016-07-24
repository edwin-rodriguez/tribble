var storeModel = require('../models/models.store'),
	articleModel = require('../models/models.article'),
	sectionModel = require('../models/models.section');

var ctrl = {
	get: function(req, res) {
		var query = req.query;

		storeModel.find(query, function(err, list){
			if (err)
				res.status(404).send(err);
			else
				res.json(list);
		});
	},
	getById: function(req, res) {
		var id = req.params.id;

		storeModel.findById(id, function(err, obj){
			if(err)
				res.status(404).send(err);
			else
				res.json(obj);
		});
	},
	post: function(req,res){
		//create model
		var storeObj = {
			name: req.body.name,
			//autogenerate alias
			alias: req.body.name.replace(/[^a-zA-Z0-9]*/g,'')
		};
		var store = new storeModel(storeObj);

		//save
		store.save(function(err){
			if (err) {
				res.status(500).send(err);
			} else {
				res.status(201).json(store);
			}
		});
	},
	putById: function(req,res){
		var id = req.params.id;

		//find & save
		storeModel.findById(id, function (err, store){
			if (err) { res.status(500).send(err); return; }

			//update data
			store.name = req.body.name;
			store.alias = req.body.name.replace(/[^a-zA-Z0-9]*/g,'');
			store.url = req.body.url;
			store.tags = req.body.tags;
			store.description = req.body.description;

			//save
			store.save(function (err){
				if(err){ res.status(500).send(err); return; }
				res.status(201).json(store);
			});
		});
	},
	deleteById: function(req, res){
		var id = req.params.id;

		storeModel.findById(id).remove(function (err){
			if(err)
				res.status(500).send(err);
			else {
				//remove related articles
				articleModel.find({storeId:id}).remove().exec();
				//remove related sections
				sectionModel.find({storeId:id}).remove().exec();

				res.status(205).send('removed');
			}
		});
	}
};

module.exports = ctrl;
