const Product = require("../model/product.model");
const productHelper = require("../helper/product.helper");

const addTimer = async (req, res) => {
	const newProduct = new Product({
		productName: req.body.productName,
		description: req.body.description,
		category: req.body.category,
		origin: req.body.origin,
		variants: req.body.variants,
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
			.addTimer(newProduct)
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
	console.log(req.body.image)
	try {
		const product = {
			productID: req.params.productID,
			productName: req.body.productName,
			description: req.body.description,
			category: req.body.category,
			image: req.body.image,
			color: req.body.color,
			origin: req.body.origin,
			moreAttribute: {
				supplyTimer: req.body.supplyTimer,
				switchContacts: req.body.switchContacts,
				maximumLoadContact: req.body.maximumLoadContact,
				programCapacity: req.body.programCapacity,
				saveProgram: req.body.saveProgram,
				batteryMemory: req.body.batteryMemory
			}
		};
		await productHelper
			.editTimer(product)
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
	const newProduct = new Product({
		productName: req.body.productName,
		description: req.body.description,
		category: req.body.category,
		variants: req.body.variants,
		origin: req.body.origin,
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
			.addAmplifier(newProduct)
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
			image: req.body.image,
			color: req.body.color,
			origin: req.body.origin,
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
			.editAmplifier(product)
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
	const newProduct = new Product({
		productName: req.body.productName,
		description: req.body.description,
		category: req.body.category,
		origin: req.body.origin,
		variants: data.body.variants,
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
	console.log(req.body)
	try {
		await productHelper
			.addSpeaker(newProduct)
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
			image: req.body.image,
			color: req.body.color,
			origin: req.body.origin,
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
			.editSpeaker(product)
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