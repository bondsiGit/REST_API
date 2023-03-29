const express = require('express');

const router = express.Router();

const userController = require('../controller/user.js');

router.get('/', userController.getAllUser);

router.post('/', userController.createUsers);

module.exports = router;