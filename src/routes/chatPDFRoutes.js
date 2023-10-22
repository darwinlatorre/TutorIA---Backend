const express = require("express");
const chatPDFController = require("../controllers/chatPDFController");

const router = express.Router();

router
  .post("/", chatPDFController.postMessageChatPDF)
  .post("/upload", chatPDFController.uploadPDF);

module.exports = router;
