const Product = require("../model/product.model");
const productHelper = require("../helper/product.helper");

const addTimer = async (req, res) => {
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
		brand: req.body.brand,
		video: req.body.video,
		variants: req.body.variants,
		active: req.body.active,
		moreAttribute: {
			supplyTimer: req.body.supplyTimer,
			switchContacts: req.body.switchContacts,
			maximumLoadContact: req.body.maximumLoadContact,
			programCapacity: req.body.programCapacity,
			saveProgram: req.body.saveProgram,
			batteryMemory: req.body.batteryMemory
		}
	});
	console.log(req.body.variants)
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

const editTimer = async (req, res) => {
	try {
		const product = {
			productID: req.params.productID,
			productName: req.body.productName,
			description: req.body.description,
			category: req.body.category,
			subCategory: req.body.subCategory,
			origin: req.body.origin,
			brand: req.body.brand,
			video: req.body.video,
			variants: req.body.variants,
			active: req.body.active,
			moreAttribute: {
				supplyTimer: req.body.supplyTimer,
				switchContacts: req.body.switchContacts,
				maximumLoadContact: req.body.maximumLoadContact,
				programCapacity: req.body.programCapacity,
				saveProgram: req.body.saveProgram,
				batteryMemory: req.body.batteryMemory
			}
		};
		console.log("update image", req.body.variants)
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

const addAmplifier = async (req, res) => {
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
		variants: req.body.variants,
		brand: req.body.brand,
		origin: req.body.origin,
		video: req.body.video,
		active: req.body.active,
		moreAttribute: {
			channelInput: req.body.channelInput,
			channelOutput: req.body.channelOutput,
			amplifierClass: req.body.amplifierClass,
			autoSwitching: req.body.autoSwitching,
			autoAdjustVoltage: req.body.autoAdjustVoltage,
			overallDimensions: req.body.overallDimensions,
			weight: req.body.weight
		}
	});
	console.log(req.body)
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

const editAmplifier = async (req, res) => {
	console.log(req.body.image)
	try {
		const product = {
			productID: req.params.productID,
			productName: req.body.productName,
			description: req.body.description,
			category: req.body.category,
			subCategory: req.body.subCategory,
			variants: req.body.variants,
			brand: req.body.brand,
			origin: req.body.origin,
			video: req.body.video,
			active: req.body.active,
			moreAttribute: {
				channelInput: req.body.channelInput,
				channelOutput: req.body.channelOutput,
				amplifierClass: req.body.amplifierClass,
				autoSwitching: req.body.autoSwitching,
				autoAdjustVoltage: req.body.autoAdjustVoltage,
				overallDimensions: req.body.overallDimensions,
				weight: req.body.weight
			}
		};
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

const addSpeaker = async (req, res) => {
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
		brand: req.body.brand,
		video: req.body.video,
		variants: req.body.variants,
		active: req.body.active,
		moreAttribute: {
			frequencyResponse: req.body.frequencyResponse,
			averageSensitivity: req.body.averageSensitivity,
			maximumPowerHandlingCapacity: req.body.maximumPowerHandlingCapacity,
			maximumVoltage: req.body.maximumVoltage,
			overallDimensions: req.body.overallDimensions,
			impedance: req.body.impedance,
			maxHandlingCapacity: req.body.maxHandlingCapacity,
			totalDriver: req.body.totalDriver,
			material: req.body.material
		}
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

const editSpeaker = async (req, res) => {
	console.log(req.body.image)
	try {
		const product = {
			productID: req.params.productID,
			productName: req.body.productName,
			description: req.body.description,
			category: req.body.category,
			subCategory: req.body.subCategory,
			variants: req.body.variants,
			origin: req.body.origin,
			brand: req.body.brand,
			video: req.body.video,
			active: req.body.active,
			moreAttribute: {
				wattage: req.body.wattage,
				frequencyResponse: req.body.frequencyResponse,
				averageSensitivity: req.body.averageSensitivity,
				maximumPowerHandlingCapacity: req.body.maximumPowerHandlingCapacity,
				maximumVoltage: req.body.maximumVoltage,
				overallDimensions: req.body.overallDimensions,
				impedance: req.body.impedance,
				maxHandlingCapacity: req.body.maxHandlingCapacity,
				totalDriver: req.body.totalDriver,
				material: req.body.material
			}
		};
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
	const productName = req.body.search;
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
	addTimer: addTimer,
	editTimer: editTimer,
	addSpeaker: addSpeaker,
	editSpeaker: editSpeaker,
	addAmplifier: addAmplifier,
	editAmplifier: editAmplifier,
	deleteProduct: deleteProduct,
	findAll: findAll,
	findProduct: findProduct,
	findProductByCategory: findProductByCategory,
	searchProducts: searchProducts
};