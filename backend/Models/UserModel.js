const mongoose = require('mongoose');
const { Schema } = mongoose;

const USER_SCHEMA = new Schema({
	firstname: String,
	lastname: String,
	email: {
		type: String,
		trim: true,
		validate: {
			validator: function (v) {
				return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
			},
			message: props => `${props.value} is not a valid email!`
		}
	},
	photoURL: String,
	password: String,
	username: {
		type: String,
		unique: true
	},
	role: {
		type: String,
		required: true
	},
	verified: {
		type: Boolean,
		required: true,
		default: false
	}
});


module.exports = mongoose.model("USER", USER_SCHEMA);