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

const verifyToken = async (req, res, next) => { 
    const authHeader = req.header('Authorization');
    const token = authHeader.split(' ')[1];
    let key = process.env.JWT_SECRET;

    if (!token) {
        return res.sendStatus(401)
    }
    try {
        const decoded = jwt.verify(token, key)
        const user = await User.findOne({ _id: decoded._id, role: "Admin" })
        if (!user) {
            // User with given ID not found or is not an admin
            return res.status(500).send("Access denied, just admin can do this process");
        }
        req.user = decoded._id
        next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(403)
    } 
}

// const requiredSignIn = async (req, res, next) => { 
//     const authHeader = req.header('Authorization');
//     const token = authHeader.split(' ')[1];
//     let key = process.env.JWT_SECRET;

//     if (!token) {
//         return res.sendStatus(401)
//     }
//     try {
//         const decoded = jwt.verify(token, key)
//         req.user = decoded._id
//         next();
//     } catch (error) {
//         console.log(error);
//         return res.sendStatus(403)
//     } 
// }

module.exports = {
    createToken: createToken,
    verifyToken: verifyToken,
    // requiredSignIn: requiredSignIn
}