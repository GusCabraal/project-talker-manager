const express = require('express');
const { read } = require('../utils/readAndWriteFiles');

const talkerRouter = express.Router();

talkerRouter.get('/', async (request, response) => {
    const talkers = await read();
    response.status(200).json(talkers);
});

module.exports = talkerRouter;