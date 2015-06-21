var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var StoreSchema = new Schema({
	name: {type:String, required: true},
	alias: {type:String, required: true, match: /^[a-zA-Z0-9]+$/}
});

module.exports = mongoose.model('Store', StoreSchema);