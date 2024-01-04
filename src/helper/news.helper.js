const News = require("../model/news.model");

const addNews = (data) => {
	return new Promise(async (resolve, reject) => {
		const findNews = await News.findOne({ title: data.title });
		if (findNews) {
			console.log("Tin tức đã tồn tại!");
			return reject("Tin tức đã tồn tại");
		} else {
			const newData = {
				title: data.title,
                image: data.image,
				description: data.description,
				shortDescription: data.shortDescription,
				active: data.active,
				newest: data.newest,
				highLight: data.highLight,
			}
			await News(newData)
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

const editNews = (data) => {
	return new Promise(async (resolve, reject) => {
		const findNews = await News.findById(data.newsID);
		console.log(findNews)
		if (findNews) {
			if (data.image !== "") {
				const newImg = data.image
				await News
				.findByIdAndUpdate(findNews, {
					$set: {
						title: data.title,
                        image: newImg,
						description: data.description,
						shortDescription: data.shortDescription,
						active: data.active,
						newest: data.newest,
						highLight: data.highLight,
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
					console.error(error);
					return reject(error);
				});
			  } else {
				await News
				.findByIdAndUpdate(findNews, {
					$set: {
						title: data.title,
						description: data.description,
						shortDescription: data.shortDescription,
						active: data.active,
						newest: data.newest,
						highLight: data.highLight,
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
					console.error(error);
					return reject(error);
				});
			  }
		} else {
			return reject("Tin tức không tồn tại!");
		}
	});
};

const findAll = () => {
	return new Promise(async (resolve, reject) => {
		const findNews = await News.find();
		if (findNews) {
			return resolve(findNews);
		} else {
			return reject("Kho dữ liệu trống!");
		}
	});
};

const findNews = (NewsID) => {
	return new Promise(async (resolve, reject) => {
		const findNews = await News.findById(NewsID);
		if (findNews) {
			return resolve(findNews);
		} else {
			return reject("Kho dữ liệu trống!");
		}
	});
};

const deleteNews = (NewsID) => {
	return new Promise(async (resolve, reject) => {
		const findNews = await News.findByIdAndDelete(NewsID);
		if (findNews) {
			return resolve(findAll());
		} else {
			return reject("Tin tức không tồn tại!");
		}
	});
};

module.exports = {
	addNews: addNews,
	editNews: editNews,
	findAll: findAll,
	deleteNews: deleteNews,
	findNews: findNews
};