const express = require("express");
const router = express.Router();
const { verifyToken, requiredSignIn, isStaff } = require("../middleware/auth");
const Customer = require("../controller/customer.controller");

router.post("/customers/add-customer", Customer.addCustomer);
router.get("/customers", Customer.findAll);
router.get("/customers/:customerID", requiredSignIn, isStaff, Customer.findCustomer);
router.patch("/customers/:customerID", requiredSignIn, isStaff, Customer.editCustomer);
router.delete("/customers/:customerID", requiredSignIn, verifyToken, Customer.deleteCustomer);

module.exports = router;