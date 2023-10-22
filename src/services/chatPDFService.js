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
    sourceId: pdfInfo.findByName(newConsult.filename),
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
      res = [error.message, error.response.data];
    });
  return res;
};

const uploadPDF = async () => {
  const formData = new FormData();
  const pdfFilePath = `src/database/pdfs/${process.env.PDF}` + ".pdf";
  formData.append(process.env.PDF, fs.createReadStream(pdfFilePath));

  const options = {
    headers: {
      "x-api-key": process.env.X_API_KEY,
      ...formData.getHeaders(),
    },
  };
  var res;
  await axios
    .post("https://api.chatpdf.com/v1/sources/add-file", formData, options)
    .then((response) => {
      const info = {
        nombre: process.env.PDF,
        id: response.data.sourceId,
      };
      pdfInfo.saveInfoPDF(info);
      res = response.data.sourceId;
    })
    .catch((error) => {
      res = [error.message, error.response.data];
    });
  return res;
};

module.exports = { postMessageChatPDF, uploadPDF };
