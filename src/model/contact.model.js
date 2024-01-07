const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const contactSchema = new mongoose.Schema({
	contactName: { type: String, required: true },
	numberPhone: { type: String, required: true },
	description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);