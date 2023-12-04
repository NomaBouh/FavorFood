const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String, require: true },
    postcode: { type: String, require: true },
    city: { type: String, require: true },
    Solde: { type: Number, default: 0 },
    // Autres champs pertinents pour un utilisateur
});

const User = mongoose.model('User', userSchema);
module.exports = User;