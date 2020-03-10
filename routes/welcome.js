const express = require('express');
const welcomeController = require('../controller/welcome');
const router = express.Router();

router.get('/welcome' , welcomeController.getWelcome);

module.exports = router;