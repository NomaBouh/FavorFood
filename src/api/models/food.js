const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    quantity: { type: Number, required: true },
    allergen: {type: [String], required:true},
    expiryDate: {type: Date, required:true},
    idDonator:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    idClient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }
}, { versionKey: false });

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;