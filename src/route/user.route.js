const express = require("express");
const router = express.Router();
const User = require("../controller/user.controller");
const { verifyToken } = require("../middleware/auth")

router.post("/register", User.register);
router.post("/login", User.login);
router.get("/user-list", verifyToken, User.findAll);
router.get("/view-profile/:userID", verifyToken, User.viewProfile);
router.patch("/user-list/:userID", verifyToken, User.updateUser);
router.delete("/user-list/:userID", verifyToken, User.deleteUser);

module.exports = router;