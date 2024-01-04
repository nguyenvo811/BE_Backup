const express = require("express");
const router = express.Router();
const { verifyToken, requiredSignIn, isStaff } = require("../middleware/auth");
const News = require("../controller/news.controller");

router.post("/news/add-news", requiredSignIn, isStaff, verifyToken, News.addNews);
router.get("/news", News.findAll);
router.get("/news/:newsID", requiredSignIn, isStaff, News.findNews);
router.patch("/news/:newsID", requiredSignIn, isStaff, News.editNews);
router.delete("/news/:newsID", requiredSignIn, verifyToken, News.deleteNews);

router.get("/news-detail/:newsID", News.findNews);

module.exports = router;