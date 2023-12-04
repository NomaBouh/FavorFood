const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Autres champs pertinents pour un utilisateur
});

const User = mongoose.model('User', userSchema);
module.exports = User;