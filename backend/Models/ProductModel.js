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
	thumbnail: {
		type: String,
		trim: true,
		required: true
	},
	productID: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: "PARENT-PRODUCT"
	},
	displayDetails: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	available: {
		type: Boolean,
		required: true
	},
	discountAmount: {
		type: Number,
		required: true
	}
});


module.exports = mongoose.model("PRODUCT", PRODUCT_SCHEMA);