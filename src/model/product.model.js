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
	subCategory: { type: String },
	brand: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Brand",
		required: true
	},
	origin: { type: String, required: true },
	shortDescription: { type: String, required: true },
	video: { type: String},
	variantCategory: { type: String, required: true },
	variants: [{
		variantName: String,
		images: [String],
		price: String
	}],
	active: { type: Boolean, default: true },
	newest: { type: Boolean, default: true },
	bestSeller: { type: Boolean, default: false },
	specifications: [{
		name: String,
		value: String
	}],
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);