const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const Category = require("../controller/category.controller");

router.post("/categories/addcategory", verifyToken, Category.addCategory);
router.get("/categories", verifyToken, Category.findAll);
router.get("/categories/:categoryID", verifyToken, Category.findCategory);
router.patch("/categories/:categoryID", verifyToken, Category.editCategory);
router.delete("/categories/:categoryID", verifyToken, Category.deleteCategory);

module.exports = router;