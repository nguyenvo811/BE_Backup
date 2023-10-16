const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const { createToken } = require("../middleware/auth");

const register = (data) => {
	return new Promise(async (resolve, reject) => {
		const findUser = await User.findOne({ email: data.email });
		if (findUser) {
			console.log("Email đã tồn tại!");
			return reject("Email đã tồn tại");
		} else {
			const saltPassword = await User.hashPassword(data.password);
			const newData = {
				fullName: data.fullName,
				phoneNumber: data.phoneNumber,
				email: data.email,
				gender: data.gender,
				password: saltPassword
			};
			console.log(newData);
			await User(newData)
				.save()
				.then((res) => {
					return resolve(res);
				})
				.catch((error) => {
					return reject(error);
				}
				);
		}
	});
};

const login = (email, password) => {
	return new Promise(async (resolve, reject) => {
		const findUser = await User.findOne({ email: email });
		if (!findUser || !bcrypt.compareSync(
			password,
			findUser.password
		)) {
			console.log("Xác thực thất bại. Email hoặc mật khẩu không đúng!");
			return reject("Xác thực thất bại. Email hoặc mật khẩu không đúng!");
		} else {
			const accessToken = createToken(email, findUser._id, findUser.role);
			console.log("Login thành công!");
			return resolve(accessToken);
		}
	});
};

const findAll = () => {
	return new Promise(async (resolve, reject) => {
		const findUsers = await User.find();
		console.log(findUsers);
		if (findUsers) {
			return resolve(findUsers);
		} else {
			return reject("Kho dữ liệu trống!");
		}
	});
};

const viewProfile = (userID) => {
	return new Promise(async (resolve, reject) => {
		const findUser = await User.findById(userID);
		console.log(findUser);
		if (findUser) {
			return resolve(findUser);
		} else {
			return reject("Không có dữ liệu của người dùng này!");
		}
	});
};

const updateUser = (data) => {
	return new Promise(async (resolve, reject) => {
		const findUser = await User.findById(data.userID);
		console.log(findUser)
		if (findUser) {
			await User
				.findByIdAndUpdate(findUser, {
					$set: {
						email: data.email,
						fullName: data.fullName,
						phoneNumber: data.phoneNumber,
						gender: data.gender,
						role: data.role
					},
				}, {
					new: true,
					upsert: true,
					rawResult: true
				})
				.then((res) => {
					console.log(res)
					return resolve(res);
				})
				.catch((error) => {
					return reject(error);
				});
		} else {
			return reject("Người dùng không tồn tại!");
		}
	});
};

// const changePass = (data) => {
// 	return new Promise(async (resolve, reject) => {
// 		const findUser = await User.findById(data.userID);
// 		console.log(findUser)
// 		if (findUser) {
// 			await User
// 			.findByIdAndUpdate(findUser, {
// 				$set: {
// 					email: data.email,
// 					fullName: data.fullName,
// 					phoneNumber: data.phoneNumber,
// 					role: data.role
// 				},
// 			}, {
// 				new: true,
// 				upsert: true,
// 				rawResult: true 
// 			})
// 			.then((res) => {
// 				console.log(res)
// 				return resolve(res);
// 			})
// 			.catch((error) => {
// 				return reject(error);
// 			});
// 		} else { 
// 			return reject("Người dùng không tồn tại!");
// 		}
// 	});
// };

const deleteUser = (userID) => {
	return new Promise(async (resolve, reject) => {
		const findUser = await User.findByIdAndDelete(userID);
		if (findUser) {
			return resolve(findAll());
		} else {
			return reject("Người dùng không tồn tại!");
		}
	});
};

module.exports = {
	register: register,
	login: login,
	findAll: findAll,
	viewProfile: viewProfile,
	updateUser: updateUser,
	deleteUser: deleteUser
};