const DB = require("./db.json");
const { saveToDB } = require("./util");

const saveInfoPDF = (pdfInfo) => {
  DB.chatPDFs.push(pdfInfo);
  saveToDB(DB);
};

const findByName = (fileName) => {
  const matchingItem = DB.chatPDFs.find(
    (chatPDFs) => chatPDFs.nombre === fileName
  );
  return matchingItem.id || null;
};

module.exports = { saveInfoPDF, findByName };
