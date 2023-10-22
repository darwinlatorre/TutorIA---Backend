const DB = require("./db.json");
const { saveToDB } = require("./util");

const saveInfoPDF = (pdfInfo) => {
  saveToDB(DB.chatPDFs.push(pdfInfo));
};

const findByName = (fileName) => {
  const matchingItem = DB.chatPDFs.find(
    (chatPDFs) => chatPDFs.nombre === fileName
  );
  return matchingItem.id || null;
};

module.exports = { saveInfoPDF, findByName };
