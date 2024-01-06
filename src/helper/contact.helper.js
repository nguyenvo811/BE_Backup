const Contact = require("../model/contact.model");

const addContact = (data) => {
	return new Promise(async (resolve, reject) => {
		const findNumberPhone= await Contact.findOne({ numberPhone: data.numberPhone });
        const findContactName = await Contact.findOne({ contactName: data.contactName });
		if (findContactName) {
			console.log("Tên nhân viên đã tồn tại!");
			return reject("Tên nhân viên đã tồn tại!");
		} else if (findNumberPhone) {
			console.log("Số điện thoại đã tồn tại!");
			return reject("Số điện thoại đã tồn tại!");
		} else {
			const newData = {
				contactName: data.contactName,
				numberPhone: data.numberPhone,
			}
			await Contact(newData)
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

const editContact = (data) => {
	return new Promise(async (resolve, reject) => {
		const findContact = await Contact.findById(data.contactID);
		console.log(findContact)
		if (findContact) {
			await Contact
				.findByIdAndUpdate(findContact, {
					$set: {
						contactName: data.contactName,
						numberPhone: data.numberPhone,
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
			return reject("Nhân viên không tồn tại!");
		}
	});
};

const findAll = () => {
	return new Promise(async (resolve, reject) => {
		const findContact = await Contact.find();
		if (findContact) {
			return resolve(findContact);
		} else {
			return reject("Kho dữ liệu trống!");
		}
	});
};

const findContact = (contactID) => {
	return new Promise(async (resolve, reject) => {
		const findContact = await Contact.findById(contactID);
		if (findContact) {
			return resolve(findContact);
		} else {
			return reject("Kho dữ liệu trống!");
		}
	});
};

const deleteContact = (contactID) => {
	return new Promise(async (resolve, reject) => {
		const findContact = await Contact.findByIdAndDelete(contactID);
		if (findContact) {
			return resolve(findAll());
		} else {
			return reject("Nhân viên không tồn tại!");
		}
	});
};

module.exports = {
	addContact: addContact,
	editContact: editContact,
	findAll: findAll,
	deleteContact: deleteContact,
	findContact: findContact
};