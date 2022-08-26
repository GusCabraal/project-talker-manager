const express = require('express');
const { read, getTalker } = require('../utils/readAndWriteFiles');
const talkerExists = require('../middlewares/talkerExists');

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

module.exports = talkerRouter;