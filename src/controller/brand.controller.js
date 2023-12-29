const Brand = require("../model/brand.model");
const brandHelper = require("../helper/brand.helper");

const addBrand = async (req, res) => {
  const newData = new Brand({
    brandName: req.body.brandName,
    description: req.body.description,
  });
  console.log(newData)
  try {
    await brandHelper
      .addBrand(newData)
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

const editBrand = async (req, res) => {
  try {
    const Brand = {
      brandID: req.params.brandID,
      brandName: req.body.brandName,
      description: req.body.description
    };
    await brandHelper
      .editBrand(Brand)
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
    await brandHelper
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

const findBrand = async (req, res) => {
  const brandID = req.params.brandID;
  try {
    await brandHelper
      .findBrand(brandID)
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

const deleteBrand = async (req, res) => {
  const brandID = req.params.brandID;
  try {
    await brandHelper
      .deleteBrand(brandID)
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
  addBrand: addBrand,
  editBrand: editBrand,
  findAll: findAll,
  deleteBrand: deleteBrand,
  findBrand: findBrand
};