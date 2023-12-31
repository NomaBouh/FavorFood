const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../../middlewares/auth');

router.post('/', userController.createUser);
router.get('/:id', userController.getUser);
router.get('/', userController.getAllUsers);

router.get('/city/:city', userController.getUserByCity);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/login', userController.loginUser);


module.exports = router;