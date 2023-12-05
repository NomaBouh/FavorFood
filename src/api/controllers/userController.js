const User = require('../../models/user');
const bcrypt = require('bcrypt');

const userController = {
    async createUser(req, res) {
        try {
            const { username, lastname, password, location, postcode, city, email, solde } = req.body;
            const newUser = new User({ username, lastname, password, location, postcode, city, email, solde });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }        
    },

    async getUser(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getAllUsers(req, res) {
        try {
            const users = await User.find({});

            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;

            const user = await User.findByIdAndUpdate(id, updateData, { new: true });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async deleteUser(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findByIdAndDelete(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async loginUser(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(401).json({ message: "Wrong password or username" });
            }

            if (bcrypt.compare(req.params.password, user.password)) {
                return res.status(200).json({ message: "User successfully connected" });
            } else {
                return res.status(404).json({ message: "Wrong password or username" });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = userController;