const express = require("express");
const router = express.Router();
const Product = require("../controller/product.controller");
const { verifyToken, requiredSignIn, isStaff } = require("../middleware/auth");

router.post("/products/timers/add-timer", requiredSignIn, isStaff, Product.addTimer);
router.post("/products/speakers/add-speaker", requiredSignIn, isStaff, Product.addSpeaker);
router.post("/products/amplifiers/add-amplifier", requiredSignIn, isStaff, Product.addAmplifier);
router.patch("/products/timers/:productID", requiredSignIn, isStaff, Product.editTimer);
router.post("/products/speakers/:productID", requiredSignIn, isStaff, Product.editSpeaker);
router.post("/products/amplifiers/:productID", requiredSignIn, isStaff, Product.editAmplifier);
router.delete("/products/:productID", requiredSignIn, verifyToken, Product.deleteProduct);
router.get("/products", requiredSignIn, isStaff, Product.findAll);
router.get("/products/:productID", Product.findProduct);
router.get("/products/products-category/:categoryID", Product.findProductByCategory);
router.get("/search-products", Product.searchProducts);

module.exports = router;