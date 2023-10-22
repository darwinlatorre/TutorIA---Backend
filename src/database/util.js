const fs = require("fs");

const saveToDB = (pdfInfo) => {
  fs.writeFileSync("src/database/db.json", JSON.stringify(pdfInfo, null, 2), {
    encoding: "utf8",
  });
};

module.exports = { saveToDB };
