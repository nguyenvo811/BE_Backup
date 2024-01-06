const Customer = require("../model/customer.model");

const addCustomer = (data) => {
	return new Promise(async (resolve, reject) => {
		const newData = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			numberPhone: data.numberPhone,
			message: data.message,
		}
		await Customer(newData)
			.save()
			.then((res) => {
				return resolve(res);
			})
			.catch((error) => {
				return reject(error);
			});
	});
};

const editCustomer = (data) => {
	return new Promise(async (resolve, reject) => {
		const findCustomer = await Customer.findById(data.customerID);
		console.log(findCustomer)
		if (findCustomer) {
			await Customer
				.findByIdAndUpdate(findCustomer, {
					$set: {
						firstName: data.firstName,
						lastName: data.lastName,
						email: data.email,
						numberPhone: data.numberPhone,
						message: data.message,
					},
				}, {
					new: true,
					upsert: true,
					rawResult: true
				})
				.then((res) => {
					return resolve(res);
				})
				.catch((error) => {
					console.error(JSON.stringify(error));
					return reject(error);
				});
		} else {
			return reject("Khách hàng không tồn tại!");
		}
	});
};

const findAll = () => {
	return new Promise(async (resolve, reject) => {
		const findCustomer = await Customer.find();
		if (findCustomer) {
			return resolve(findCustomer);
		} else {
			return reject("Kho dữ liệu trống!");
		}
	});
};

const findCustomer = (customerID) => {
	return new Promise(async (resolve, reject) => {
		const findCustomer = await Customer.findById(customerID);
		if (findCustomer) {
			return resolve(findCustomer);
		} else {
			return reject("Kho dữ liệu trống!");
		}
	});
};

const deleteCustomer = (customerID) => {
	return new Promise(async (resolve, reject) => {
		const findCustomer = await Customer.findByIdAndDelete(customerID);
		if (findCustomer) {
			return resolve(findAll());
		} else {
			return reject("Khách hàng không tồn tại!");
		}
	});
};

module.exports = {
	addCustomer: addCustomer,
	editCustomer: editCustomer,
	findAll: findAll,
	deleteCustomer: deleteCustomer,
	findCustomer: findCustomer
};