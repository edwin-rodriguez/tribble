var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	storeId: {type:Schema.ObjectId, required:true},
	name: {type:String},
	description: {type:String},
	isVisible: {type:Boolean, default:true},
	sections: [ {type:Schema.ObjectId, required:true} ],
	tags: [ {type:String, required:true, match: /^[a-zA-Z0-9]+$/} ]
});

module.exports = mongoose.model('Article', ArticleSchema);