var mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name should be inserted"],
		minlength: [3, "Name should be at least 3 character"]
	},
	type: {
		type: String,
		required: [true, "Type should be inserted"],
		minlength: [3, "Type should be at least 3 character"]
	},
	description: {
		type: String,
		required: [true, "Description should be inserted"],
		minlength: [3, "Name should be at least 3 character"]
	},
	first_skill: {
		type: String,
	},
	second_skill: {
		type: String,
	},
	third_skill: {
		type: String,
	}
})
module.exports = mongoose.model('Pet', PetSchema)