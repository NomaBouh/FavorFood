const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController'); // Importez votre contrôleur Food ici

// Définir les routes
router.get('/', foodController.getAllFoods);
router.post('/', foodController.createFood);
router.get('/:id', foodController.getFoodById);
router.put('/:id', foodController.updateFood);
router.delete('/:id', foodController.deleteFood);

module.exports = router;