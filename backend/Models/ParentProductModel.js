const mongoose = require('mongoose');
const { Schema } = mongoose;

const PARENT_PRODUCT_SCHEMA = new Schema({
	title: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true,
		unique: true
	},
	thumbnail: {
		type: String,
		trim: true,
		required: true
	},
	category: {
		type: String,
		required: true,
	},
	description: {
		type: String
	},
	minPrice: {
		type: Number,
		required: true
	},
	maxPrice: {
		type: Number,
		required: true
	}
});


module.exports = mongoose.model("PARENT-PRODUCT", PARENT_PRODUCT_SCHEMA);