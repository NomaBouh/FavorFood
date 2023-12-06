const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../../middlewares/auth');

router.post('/', userController.createUser);
//router.get('/:id', userController.getUser);
router.get('/:id',authenticateToken, userController.getUser);
router.get('/', userController.getAllUsers);
router.put('/:id', authenticateToken, userController.updateUser);
router.delete('/:id', authenticateToken, userController.deleteUser);
router.post('/login', userController.loginUser); 

module.exports = router;