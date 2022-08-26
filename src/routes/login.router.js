const express = require('express');
// const { read, getTalker } = require('../utils/readAndWriteFiles');
const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');
const generateToken = require('../utils/generateToken');

const loginRouter = express.Router();
loginRouter.use(passwordValidation, emailValidation);

loginRouter.post('/', async (request, response) => {
    const token = generateToken();
    response.status(200).json({ token });
});

// talkerRouter.get('/:id', talkerExists, async (request, response) => {
//     const { id } = request.params;
//     const talker = await getTalker(id);
//     response.status(200).json(talker);
// });

module.exports = loginRouter;