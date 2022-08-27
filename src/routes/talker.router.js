const express = require('express');
const { read, getTalker, addTalker, updateTalker } = require('../utils/readAndWriteFiles');
const talkerExists = require('../middlewares/talkerExists');
const validateToken = require('../middlewares/validateToken');
const nameValidation = require('../middlewares/nameValidation');
const talkValidation = require('../middlewares/talkValidation');
const watchedAtValidation = require('../middlewares/watchedAtValidation');
const ageValidation = require('../middlewares/ageValidation');
const rateValidation = require('../middlewares/rateValidation');

const talkerRouter = express.Router();

talkerRouter.get('/', async (request, response) => {
    const talkers = await read();
    response.status(200).json(talkers);
});

talkerRouter.get('/:id', talkerExists, async (request, response) => {
    const { id } = request.params;
    const talker = await getTalker(id);
    response.status(200).json(talker);
});

talkerRouter.use(
    validateToken,
    nameValidation,
    ageValidation,
    talkValidation,
    watchedAtValidation,
    rateValidation,
);

talkerRouter.post('/', async (request, response) => {
    const { body } = request;
    const talker = await addTalker(body);
    response.status(201).json(talker);
});

talkerRouter.put('/:id', async (request, response) => {
    const { id } = request.params;
    const talker = await updateTalker(id, request.body);
    response.status(200).json(talker);
});

module.exports = talkerRouter;