const Product = require("../model/product.model");
const productHelper = require("../helper/product.helper");

const addProduct = async (req, res) => {
	let description = req.body.description;

	// Check if files were uploaded
	if (req.files && req.files.length > 0) {
		// Assuming you have only one image file for simplicity
		const imageBuffer = req.files[0].buffer;
		const imageData = imageBuffer.toString('base64');
		// Add the image data to the description or handle it separately
		description += `<img src="data:image/png;base64,${imageData}" />`;
	}

	const newProduct = new Product({
		productName: req.body.productName,
		description: description,
		category: req.body.category,
		subCategory: req.body.subCategory,
		origin: req.body.origin,
		shortDescription: req.body.shortDescription,
		brand: req.body.brand,
		video: req.body.video,
		variantCategory: req.body.variantCategory,
		variants: req.body.variants,
		active: req.body.active,
		newest: req.body.newest,
		bestSeller: req.body.bestSeller,
		specifications: req.body.specifications
	});
	console.log(newProduct)
	try {
		await productHelper
			.addProduct(newProduct)
			.then((result) => {
				return res.status(200).json({ result: true, data: result });
			})
			.catch((error) => {
				return res.status(500).json({ result: false, message: error });
			});
	} catch (error) {
		return res.status(500).json({ result: false, message: error });
	}
};

const editProduct = async (req, res) => {
	try {
		let description = req.body.description;

		// Check if files were uploaded
		if (req.files && req.files.length > 0) {
			// Assuming you have only one image file for simplicity
			const imageBuffer = req.files[0].buffer;
			const imageData = imageBuffer.toString('base64');
			// Add the image data to the description or handle it separately
			description += `<img src="data:image/png;base64,${imageData}" />`;
		}

		const product = {
			productID: req.params.productID,
			productName: req.body.productName,
			description: description,
			category: req.body.category,
			subCategory: req.body.subCategory,
			origin: req.body.origin,
			shortDescription: req.body.shortDescription,
			brand: req.body.brand,
			video: req.body.video,
			variantCategory: req.body.variantCategory,
			variants: req.body.variants,
			active: req.body.active,
			newest: req.body.newest,
			bestSeller: req.body.bestSeller,
			specifications: req.body.specifications
		};
		console.log(product)
		await productHelper
			.editProduct(product)
			.then((result) => {
				return res.status(200).json({ result: true, data: result });
			})
			.catch((error) => {
				return res.status(500).json({ result: false, message: error });
			});
	} catch (error) {
		return res.status(500).json({ result: false, message: error });
	}
};

const deleteProduct = async (req, res) => {
	const productID = req.params.productID;
	try {
		await productHelper
			.deleteProduct(productID)
			.then((result) => {
				return res.status(200).json({ result: true, data: result });
			})
			.catch((error) => {
				return res.status(500).json({ result: false, message: error });
			});
	} catch (error) {
		return res.status(500).json({ result: false, message: error });
	}
};

const findAll = async (req, res) => {
	try {
		await productHelper
			.findAll()
			.then((result) => {
				return res.status(200).json({ result: true, data: result });
			})
			.catch((error) => {
				return res.status(500).json({ result: false, message: error });
			});
	} catch (error) {
		return res.status(500).json({ result: false, message: error });
	}
};

const findProduct = async (req, res) => {
	try {
		const productID = req.params.productID;
		console.log(req.params)
		await productHelper
			.findProduct(productID)
			.then((result) => {
				return res.status(200).json({ result: true, data: result });
			})
			.catch((error) => {
				return res.status(500).json({ result: false, message: error });
			});
	} catch (error) {
		return res.status(500).json({ result: false, message: error });
	}
};

const findProductByCategory = async (req, res) => {
	const categoryID = req.params.categoryID;
	try {
		await productHelper
			.findProductByCategory(categoryID)
			.then((result) => {
				return res.status(200).json({ result: true, data: result });
			})
			.catch((error) => {
				return res.status(500).json({ result: false, message: error });
			});
	} catch (error) {
		return res.status(500).json({ result: false, message: error });
	}
};

const searchProducts = async (req, res) => {
	const productName = req.query.search;
	try {
		await productHelper
			.searchProducts(productName)
			.then((result) => {
				return res.status(200).json({ result: true, data: result });
			})
			.catch((error) => {
				return res.status(500).json({ result: false, message: error });
			});
	} catch (error) {
		return res.status(500).json({ result: false, message: error });
	}
};

module.exports = {
	addProduct: addProduct,
	editProduct: editProduct,
	deleteProduct: deleteProduct,
	findAll: findAll,
	findProduct: findProduct,
	findProductByCategory: findProductByCategory,
	searchProducts: searchProducts
};