const express = require("express");
const router = express.Router();
const { verifyToken, requiredSignIn, isStaff } = require("../middleware/auth");
const Contact = require("../controller/contact.controller");

router.post("/Contacts/add-contact", requiredSignIn, isStaff, verifyToken, Contact.addContact);
router.get("/contacts", Contact.findAll);
router.get("/contacts/:contactID", requiredSignIn, isStaff, Contact.findContact);
router.patch("/contacts/:contactID", requiredSignIn, isStaff, Contact.editContact);
router.delete("/contacts/:contactID", requiredSignIn, verifyToken, Contact.deleteContact);

module.exports = router;