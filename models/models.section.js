var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SectionSchema = new Schema({
	storeId: {type:Schema.ObjectId, required:true},
	title: {type:String, required:true},
	description: {type:String}
});

module.exports = mongoose.model('Section', SectionSchema);