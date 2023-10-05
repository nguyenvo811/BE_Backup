const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

const createToken = async (email, userID, role) => {
	let Payload = {
		email: email,
		_id: userID,
		role: role
	}
	let key = process.env.JWT_SECRET;
	let token = null;
	try {
		token = jwt.sign(Payload, key, {
			expiresIn: '1d',
		});
		return token;
	} catch (err) {
		return console.log(err);
	}
}

const requiredSignIn = async (req, res, next) => {
	const authHeader = req.header('Authorization');
	let key = process.env.JWT_SECRET;
	if (!authHeader) {
		return res.status(403).send({ message: "Vui lòng đăng nhập!" })
	}
	const token = authHeader.split(' ')[1];
	console.log(token)
	try {
		const decoded = jwt.verify(token, key)
		req.user = decoded._id
		next();
	} catch (error) {
		if(error.expiredAt && error.expiredAt< new Date()){
			return res.status(401).send({ message:"Session hết hạn. Vui lòng đăng nhập lại!" })
		}else{
			console.log(error);
			return res.status(401).send({ message: "Token không chính xác. Vui lòng đăng nhập lại!" });
		}
	}
}

const verifyToken = async (req, res, next) => {
	const user = await User.findOne({ _id: req.user, role: "Admin" })
	if (!user) {
		// Staff with given ID not found or is not an admin
		return res.status(500).send({ message: "Thao tác thất bai. Chỉ Admin mới có quyền thao tác!" });
	}
	next();
}

const isStaff = async (req, res, next) => {
	const user = await User?.findOne({ _id: req.user, role: ["Staff", "Admin"] })
	if (!user) { 
		return res.status(500).send({ message: "Thao tác thất bai. Chỉ Admin và Staff mới có quyền thao tác!" });
	}
	next();
}

module.exports = {
	createToken: createToken,
	verifyToken: verifyToken,
	requiredSignIn: requiredSignIn,
	isStaff: isStaff
}