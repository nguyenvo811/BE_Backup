const express = require("express");
const router = express.Router();
const Product = require("../controller/product.controller");
const { verifyToken, requiredSignIn, isStaff } = require("../middleware/auth");
const handleFileUploads = require('../middleware/multerMiddleware');

router.post("/products/add-product", requiredSignIn, isStaff, Product.addProduct);
router.patch("/products/:productID", requiredSignIn, isStaff, Product.editProduct);
router.delete("/products/:productID", requiredSignIn, verifyToken, Product.deleteProduct);
router.get("/products", requiredSignIn, isStaff, Product.findAll);

router.get("/home/products", Product.findAll);
router.get("/products/:productID", Product.findProduct);
router.get("/products/products-category/:categoryID", Product.findProductByCategory);
router.get("/search-products", Product.searchProducts);

module.exports = router;