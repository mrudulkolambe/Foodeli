const mongoose = require('mongoose');
const { Schema } = mongoose;

const CART_SCHEMA = new Schema({
	product: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "PRODUCT",
		required: true
	},
	parent: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "PARENT-PRODUCT",
		required: true
	},
	quantity: {
		type: Number,
		max: 10,
		min: 0,
		required: true
	},
	date: {
		type: Date,
		required: true,
		default: Date.now()	
	},
	user: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "USER",
		required: true
	}
});


module.exports = mongoose.model("CART", CART_SCHEMA);