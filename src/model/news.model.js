const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const newsSchema = new mongoose.Schema({
	title: { type: String, required: true },
    image: { type: String, required: true },
	description: { type: String, required: true },
	shortDescription: { type: String, required: true },
	active: { type: Boolean, default: true },
	newest: { type: Boolean, default: true },
	highLight: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("News", newsSchema);