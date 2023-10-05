const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
	productName: { type: String, required: true },
	description: { type: String, required: true },
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
		required: true
	},
	image: [String],
	color: [String],
	origin: { type: String, required: true },
	moreAttribute: {}
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);