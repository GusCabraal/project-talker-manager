// middlewares/validateDescription.js
const validateTalk = (talkValue, res, value) => {
    if (!talkValue) {
      return res.status(400).json(
        { message: `O campo "${value}" é obrigatório` },
      );
    }
  };
  
  const talkValidation = (req, res, next) => {
    const { talk } = req.body;
  
    return validateTalk(talk, res, 'talk')
      || validateTalk(talk.watchedAt, res, 'watchedAt')
      || validateTalk(talk.rate, res, 'rate')
      || next();
  };

  module.exports = talkValidation;