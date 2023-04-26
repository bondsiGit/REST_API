const express = require('express');

const router = express.Router();

const userController = require('../controller/user.js');

//CREATE - POST
router.post('/', userController.createUsers);

//READ - GET
router.get('/', userController.getAllUser);

//UPDATE - PATCH
router.patch('/:idUser', userController.updateUsers);

//DELETE - DELETE
router.delete('/:id', userController.deleteUser)

module.exports = router;