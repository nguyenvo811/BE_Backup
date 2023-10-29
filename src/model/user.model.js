const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	fullName: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	gender: { 
		type: String,
		required: true 
	},
	role: {
		type: String,
		enum: ["Admin", "Staff"],
		default: "Staff"
	},
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);

module.exports.hashPassword = async (password) => {
	try {
		const salt = await bcrypt.genSalt(10);
		return await bcrypt.hash(password, salt);
	} catch (error) {
		return error;
	}
};