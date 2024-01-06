const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const customerSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
	numberPhone: { type: String, required: true },
    message: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);