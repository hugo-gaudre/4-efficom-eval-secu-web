const express = require('express');
const router = express.Router();
const userController = require('./../controller/user.controller.js');
const auth = require('../middleware/auth.middleware.js');

router.get('/', auth("Admin"), userController.getAll); 
router.get('/:id', auth("Admin"), userController.getById);

router.post('/', auth("Admin"), userController.create);

router.put('/:id', auth("Admin"), userController.update);
router.delete('/:id', auth("Admin"), userController.remove);

router.put('/role/:userId/:roleId', auth("Admin"), userController.addRole);
router.delete('/role/:userId/:roleId', auth("Admin"),userController.removeRole);

module.exports = router;