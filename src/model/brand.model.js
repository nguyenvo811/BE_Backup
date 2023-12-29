const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const brandSchema = new mongoose.Schema({
	brandName: { type: String, required: true },
	description: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Brand", brandSchema);