const express = require('express');
const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.use(passwordValidation, emailValidation);

router.post('/', async (_request, response) => {
    const token = generateToken();
    response.status(200).json({ token });
});

module.exports = router;