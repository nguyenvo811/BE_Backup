const express = require("express");
const router = express.Router();
const User = require("../controller/user.controller");
const { verifyToken, requiredSignIn, isStaff } = require("../middleware/auth")

router.post("/register", requiredSignIn, verifyToken, User.register);
router.post("/sign-in", User.login);
router.get("/user-list", requiredSignIn, isStaff, User.findAll);
router.get("/view-profile", requiredSignIn, User.viewProfile);
router.patch("/user-list/:userID", requiredSignIn, verifyToken, User.updateUser);
router.post("/user-list/change-password", requiredSignIn, User.changePass);
router.delete("/user-list/:userID", requiredSignIn, verifyToken, User.deleteUser);

module.exports = router;