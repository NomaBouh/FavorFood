const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../../middlewares/auth');

router.post('/web/', userController.createUser);
router.get('/web/:id', authenticateToken, userController.getUser);
router.get('/web/', userController.getAllUsers);
router.put('/web/:id', authenticateToken, userController.updateUser);
router.delete('/web/:id', authenticateToken, userController.deleteUser);
router.post('/web/login', userController.loginUser);

module.exports = router;