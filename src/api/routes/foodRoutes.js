const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController'); // Importez votre contrôleur Food ici

// Définir les routes
router.get('/foods', foodController.getAllFoods);
router.post('/foods', foodController.createFood);
router.get('/foods/:id', foodController.getFoodById);
router.put('/foods/:id', foodController.updateFood);
router.delete('/foods/:id', foodController.deleteFood);

module.exports = router;