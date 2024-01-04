const News = require("../model/news.model");
const newsHelper = require("../helper/news.helper");

const addNews = async (req, res) => {
  const newData = new News({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    shortDescription: req.body.shortDescription,
    active: req.body.active,
    newest: req.body.newest,
    highLight: req.body.highLight,
  });
  console.log(newData)
  try {
    await newsHelper
      .addNews(newData)
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

const editNews = async (req, res) => {
  try {
    const news = {
      newsID: req.params.newsID,
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
      shortDescription: req.body.shortDescription,
      active: req.body.active,
      newest: req.body.newest,
      highLight: req.body.highLight,
    };
    console.log(news)
    await newsHelper
      .editNews(news)
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
    await newsHelper
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

const findNews = async (req, res) => {
  const NewsID = req.params.newsID;
  try {
    await newsHelper
      .findNews(NewsID)
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

const deleteNews = async (req, res) => {
  const NewsID = req.params.newsID;
  try {
    await newsHelper
      .deleteNews(NewsID)
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
  addNews: addNews,
  editNews: editNews,
  findAll: findAll,
  deleteNews: deleteNews,
  findNews: findNews
};