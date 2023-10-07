const express = require("express");
const router = express.Router();
const { verifyToken, requiredSignIn, isStaff } = require("../middleware/auth");
const Category = require("../controller/category.controller");

router.post("/categories/addcategory", requiredSignIn, isStaff, Category.addCategory);
router.get("/categories", Category.findAll);
router.get("/categories/:categoryID", requiredSignIn, isStaff, Category.findCategory);
router.patch("/categories/:categoryID", requiredSignIn, isStaff, Category.editCategory);
router.delete("/categories/:categoryID", requiredSignIn, verifyToken, Category.deleteCategory);

module.exports = router;