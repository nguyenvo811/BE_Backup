const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const categorySchema = new mongoose.Schema({
	categoryName: { type: String, required: true },
	description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);