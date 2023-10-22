const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const pdfInfo = require("../database/pdfInfo");

const postMessageChatPDF = async (newConsult) => {
  const config = {
    headers: {
      "x-api-key": process.env.X_API_KEY,
      "Content-Type": "application/json",
    },
  };

  const data = {
    sourceId: pdfInfo.findByName("sample"),
    messages: [
      {
        role: "user",
        content: newConsult.message,
      },
    ],
  };

  var res;

  await axios
    .post("https://api.chatpdf.com/v1/chats/message", data, config)
    .then((response) => {
      res = response.data.content;
    })
    .catch((error) => {
      res = error.message;
    });
  return res;
};

const uploadPDF = async () => {
  const formData = new FormData();
  formData.append(
    "sample",
    fs.createReadStream("src/database/pdfs/sample.pdf")
  );

  const options = {
    headers: {
      "x-api-key": process.env.X_API_KEY,
      ...formData.getHeaders(),
    },
  };
  var res;
  await axios
    .post("https://api.chatpdf.com/v1/sources/add-file", formData, options)
    .then(async (response) => {
      const info = {
        nombre: "sample",
        id: response.data.sourceId,
      };
      res = response.data.sourceId;
    })
    .catch((error) => {
      res = error.message;
    });
  return res;
};

module.exports = { postMessageChatPDF, uploadPDF };
