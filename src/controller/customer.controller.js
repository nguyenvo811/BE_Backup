const Customer = require("../model/customer.model");
const CustomerHelper = require("../helper/customer.helper");

const addCustomer = async (req, res) => {
  const newData = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    numberPhone: req.body.numberPhone,
    message: req.body.message
  });
  console.log(newData)
  try {
    await CustomerHelper
      .addCustomer(newData)
      .then((result) => {
        return res.status(200).json({ result: true, data: result });
      })
      .catch((error) => {
        return res.status(500).json({ result: false, message: error });
      });
  } catch (error) {
    return res.status(500).json({ result: false, message: error });
  }
};

const editCustomer = async (req, res) => {
  try {
    const Customer = {
      customerID: req.params.customerID,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			numberPhone: req.body.numberPhone,
			message: req.body.message
    };
    await CustomerHelper
      .editCustomer(Customer)
      .then((result) => {
        return res.status(200).json({ result: true, data: result });
      })
      .catch((error) => {
        return res.status(500).json({ result: false, message: error });
      });
  } catch (error) {
    return res.status(500).json({ result: false, message: error });
  }
};

const findAll = async (req, res) => {
  try {
    await CustomerHelper
      .findAll()
      .then((result) => {
        return res.status(200).json({ result: true, data: result });
      })
      .catch((error) => {
        return res.status(500).json({ result: false, message: error });
      });
  } catch (error) {
    return res.status(500).json({ result: false, message: error });
  }
};

const findCustomer = async (req, res) => {
  const customerID = req.params.customerID;
  try {
    await CustomerHelper
      .findCustomer(customerID)
      .then((result) => {
        return res.status(200).json({ result: true, data: result });
      })
      .catch((error) => {
        return res.status(500).json({ result: false, message: error });
      });
  } catch (error) {
    return res.status(500).json({ result: false, message: error });
  }
};

const deleteCustomer = async (req, res) => {
  const customerID = req.params.customerID;
  try {
    await CustomerHelper
      .deleteCustomer(customerID)
      .then((result) => {
        return res.status(200).json({ result: true, data: result });
      })
      .catch((error) => {
        return res.status(500).json({ result: false, message: error });
      });
  } catch (error) {
    return res.status(500).json({ result: false, message: error });
  }
};

module.exports = {
  addCustomer: addCustomer,
  editCustomer: editCustomer,
  findAll: findAll,
  deleteCustomer: deleteCustomer,
  findCustomer: findCustomer
};