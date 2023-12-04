const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController'); // Importez votre contrôleur Comment ici

// Définir les routes
router.get('/comments', commentController.getAllComments);
router.post('/comments', commentController.createComment);
router.get('/comments/:id', commentController.getCommentById);
router.put('/comments/:id', commentController.updateComment);
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;