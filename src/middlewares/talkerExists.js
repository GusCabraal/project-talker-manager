const { getTalker } = require('../utils/readAndWriteFiles');

const talkerExists = async (req, res, next) => {
    const { id } = req.params;
    const talker = await getTalker(id);
    req.talker = talker;
    if (talker) {
        return next();
    }
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
};

module.exports = talkerExists;