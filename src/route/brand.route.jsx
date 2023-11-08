const express = require("express");
const router = express.Router();
const { verifyToken, requiredSignIn, isStaff } = require("../middleware/auth");
const Brand = require("../controller/brand.controller");

router.post("/brands/add-brand", requiredSignIn, isStaff, Brand.addBrand);
router.get("/brands", Brand.findAll);
router.get("/brands/:brandID", requiredSignIn, isStaff, Brand.findBrand);
router.patch("/brands/:brandID", requiredSignIn, isStaff, Brand.editBrand);
router.delete("/brands/:brandID", requiredSignIn, verifyToken, Brand.deleteBrand);

module.exports = router;