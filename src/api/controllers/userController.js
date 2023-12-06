const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userController = {
    async createUser(req, res) {
        try {
            const { username, lastname, password, location, postcode, city, email, solde } = req.body;
            const newUser = new User({ username, lastname, password, location, postcode, city, email, solde });
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                lastname: newUser.lastname,
                location: newUser.location,
                postcode: newUser.postcode,
                city: newUser.city,
                email: newUser.email,
                solde: newUser.solde
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async getUser(req, res) {
        try {
            const user = await User.findById(req.user.userId);
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
            const { email, password } = req.body;
            console.log("Login attempt for:", email);

            const user = await User.findOne({ email });
            if (!user) {
                console.log("User not found");
                return res.status(401).json({ message: "User not found" });
            }

            if (password != user.password) {
                console.log("Invalid password");
                return res.status(401).json({ message: "Invalid password" });
            }

            const token = jwt.sign(
                { userId: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            console.log("Connection approved");
            res.status(200).json({ message: "User successfully connected", token });
        } catch (error) {
            console.log("Error in loginUser:", error.message);
            res.status(500).json({ message: error.message });
        }
    }


}

module.exports = userController;