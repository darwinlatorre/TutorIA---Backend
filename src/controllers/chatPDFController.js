const chatPDFService = require("../services/chatPDFService");

const postMessageChatPDF = async (req, res) => {
  const { body } = req;

  if (!body.message || !body.widget) {
    return res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in the request body: 'message', 'widget'",
      },
    });
  }

  const newConsult = {
    message: body.message,
    widget: body.widget,
  };

  try {
    const chatPDFResult = await chatPDFService.postMessageChatPDF(newConsult);
    return res.status(201).send({ status: "OK", data: chatPDFResult });
  } catch (error) {
    return res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const uploadPDF = async (req, res) => {
  try {
    const chatPDFResult = await chatPDFService.uploadPDF();
    return res.status(201).send({ status: "OK", data: chatPDFResult });
  } catch (error) {
    return res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = { postMessageChatPDF, uploadPDF };
