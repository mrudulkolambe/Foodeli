const mongoose = require('mongoose');
const { Schema } = mongoose;

const CATEGORY_SCHEMA = new Schema({
	title: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true
	}
});


module.exports = mongoose.model("CATEGORY", CATEGORY_SCHEMA);