const Category = require("../model/category.model");
const categoryHelper = require("../helper/category.helper");

const addCategory = async (req, res) => {
  const newData = new Category({
    categoryName: req.body.categoryName,
    description: req.body.description
  });
  console.log(req.user)
  try {
    await categoryHelper
      .addCategory(newData)
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

const editCategory = async (req, res) => {
  try {
    const category = {
      categoryID: req.params.categoryID,
      categoryName: req.body.categoryName,
      description: req.body.description,
    };
    await categoryHelper
      .editCategory(category)
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
    await categoryHelper
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

const findCategory = async (req, res) => {
  const categoryID = req.params.categoryID;
  try {
    await categoryHelper
      .findCategory(categoryID)
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

const deleteCategory = async (req, res) => {
  const categoryID = req.params.categoryID;
  try {
    await categoryHelper
      .deleteCategory(categoryID)
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
  addCategory: addCategory,
  editCategory: editCategory,
  findAll: findAll,
  deleteCategory: deleteCategory,
  findCategory: findCategory
};