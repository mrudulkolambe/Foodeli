const mongoose = require('mongoose');
const { Schema } = mongoose;

const PRODUCT_SCHEMA = new Schema({
	title: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	},
	thumbnail: {
		type: String,
		trim: true,
		required: true
	},
	category: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: "CATEGORY"
	},
	parentCategory: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: "PARENT-PRODUCT"
	},
	available: {
		type: Boolean,
		required: true
	}
});


module.exports = mongoose.model("PRODUCT", PRODUCT_SCHEMA);