const express = require('express')

const router = express.Router();

router.get('/tasks',  (request, response) => response.status(200).send('Bem vindo'))

module.exports = router;