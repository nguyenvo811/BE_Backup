const Contact = require("../model/contact.model");
const contactHelper = require("../helper/contact.helper");

const addContact = async (req, res) => {
  const newData = new Contact({
    contactName: req.body.contactName,
    numberPhone: req.body.numberPhone,
  });
  console.log(newData)
  try {
    await contactHelper
      .addContact(newData)
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

const editContact = async (req, res) => {
  try {
    const Contact = {
      contactID: req.params.contactID,
      contactName: req.body.contactName,
      numberPhone: req.body.numberPhone
    };
    await contactHelper
      .editContact(Contact)
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
    await contactHelper
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

const findContact = async (req, res) => {
  const ContactID = req.params.contactID;
  try {
    await contactHelper
      .findContact(ContactID)
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

const deleteContact = async (req, res) => {
  const ContactID = req.params.contactID;
  try {
    await contactHelper
      .deleteContact(ContactID)
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
  addContact: addContact,
  editContact: editContact,
  findAll: findAll,
  deleteContact: deleteContact,
  findContact: findContact
};