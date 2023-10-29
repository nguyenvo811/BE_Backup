const User = require("../model/user.model");
const userHelper = require("../helper/user.helper");

const register = async (req, res) => {
	try {
		const newUser = new User({
			fullName: req.body.fullName,
			phoneNumber: req.body.phoneNumber,
			email: req.body.email,
			gender: req.body.gender,
			password: req.body.password,
			role: req.body.role
		});
		console.log("control", req.body)
		await userHelper
			.register(newUser)
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

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		await userHelper
			.login(email, password)
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
		await userHelper
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

const viewProfile = async (req, res) => {
	const userID = req.user;
	try {
		await userHelper
			.viewProfile(userID)
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

const updateUser = async (req, res) => {
	try {
		const dataUpdate = {
			userID: req.params.userID,
			email: req.body.email,
			role: req.body.role,
			phoneNumer: req.body.phoneNumber,
			gender: req.body.gender,
			fullName: req.body.fullName,
		};
		console.log(req.body)
		await userHelper
			.updateUser(dataUpdate)
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

const changePass = async (req, res) => {
	try {
		const data = {
			oldPass: req.body.oldPass,
			newPass: req.body.newPass
		};
		const user = req.user;
		await userHelper
			.changePass(user, data)
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

const deleteUser = async (req, res) => {
	const userID = req.params.userID;
	try {
		await userHelper
			.deleteUser(userID)
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
	register: register,
	login: login,
	findAll: findAll,
	viewProfile: viewProfile,
	updateUser: updateUser,
	deleteUser: deleteUser,
	changePass: changePass
};