const Category = require("../model/category.model");

const addCategory = (data) => {
	return new Promise(async (resolve, reject) => {
		const findCategory = await Category.findOne({ categoryName: data.categoryName });
		if (findCategory) {
			console.log("Thể loại sản phẩm đã tồn tại!");
			return reject("Thể loại sản phẩm đã tồn tại");
		} else {
			const newData = {
				categoryName: data.categoryName,
				description: data.description
			}
			await Category(newData)
				.save()
				.then((res) => {
					return resolve(res);
				})
				.catch((error) => {
					return reject(error);
				});
		}
	});
};

const editCategory = (data) => {
	return new Promise(async (resolve, reject) => {
		const findCategory = await Category.findById(data.categoryID);
		console.log(findCategory)
		if (findCategory) {
			await Category
				.findByIdAndUpdate(findCategory, {
					$set: {
						categoryName: data.categoryName,
						description: data.description,
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
			return reject("Thể loại sản phẩm không tồn tại!");
		}
	});
};

const findAll = () => {
	return new Promise(async (resolve, reject) => {
		const findCategory = await Category.find();
		if (findCategory) {
			return resolve(findCategory);
		} else {
			return reject("Kho dữ liệu trống!");
		}
	});
};

const findCategory = (categoryID) => {
	return new Promise(async (resolve, reject) => {
		const findCategory = await Category.findById(categoryID);
		if (findCategory) {
			return resolve(findCategory);
		} else {
			return reject("Kho dữ liệu trống!");
		}
	});
};

const deleteCategory = (categoryID) => {
	return new Promise(async (resolve, reject) => {
		const findCategory = await Category.findByIdAndDelete(categoryID);
		if (findCategory) {
			return resolve(findAll());
		} else {
			return reject("Category ID not exist");
		}
	});
};

module.exports = {
	addCategory: addCategory,
	editCategory: editCategory,
	findAll: findAll,
	deleteCategory: deleteCategory,
	findCategory: findCategory
};