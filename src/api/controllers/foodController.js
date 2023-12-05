const Food = require('../models/food');


// Contrôleur pour les opérations sur le modèle de nourriture (food)

// Récupérer tous les aliments
exports.getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Créer un nouvel aliment
exports.createFood = async (req, res) => {
    const food = new Food({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        allergen: req.body.allergen,
        expiryDate: req.body.expiryDate,
        idDonator: req.body.idClient, // ID de l'utilisateur associé à cet aliment
        idClient: req.body.idClient, // ID de l'utilisateur associé à cet aliment
    });

    try {
        const newFood = await food.save();
        res.status(201).json(newFood);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Récupérer un aliment par son ID
exports.getFoodById = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Aliment non trouvé' });
        }
        res.json(food);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mettre à jour un aliment
exports.updateFood = async (req, res) => {
    try {
        const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedFood);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer un aliment
exports.deleteFood = async (req, res) => {
    try {
        await Food.findByIdAndDelete(req.params.id);
        res.json({ message: 'Aliment supprimé' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};