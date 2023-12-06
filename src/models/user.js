const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    lastname: { type: String, required: true },    
    password: { type: String, required: true },
    location: { type: String, required: true },
    postcode: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    solde: { type: Number, require: true },
    // Autres champs pertinents pour un utilisateur
}, { versionKey: false });

const User = mongoose.model('User', userSchema);
module.exports = User;