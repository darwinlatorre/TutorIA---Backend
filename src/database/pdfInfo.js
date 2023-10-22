const DB = require("./db.json");
const { saveToDB } = require("./util");

const saveInfoPDF = (pdfInfo) => {
  const isAlreadySaved = DB.chatPDFs.find(
    (chatPDFs) => chatPDFs.nombre === pdfInfo.nombre
  );

  if (isAlreadySaved) {
    return false;
  }

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
