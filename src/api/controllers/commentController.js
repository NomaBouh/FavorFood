const Comment = require('../models/comment'); // Importez votre modèle Comment ici

// Récupérer tous les commentaires
exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Créer un nouveau commentaire
exports.createComment = async (req, res) => {
    const comment = new Comment({
        title: req.body.title,
        description: req.body.description,
        mark: req.body.mark,
        date: req.body.date,
        idCommentator: req.body.idCommentator,
        idTarget: req.body.idTarget
    });

    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Récupérer un commentaire par son ID
exports.getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: 'Commentaire non trouvé' });
        }
        res.json(comment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mettre à jour un commentaire
exports.updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer un commentaire
exports.deleteComment = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Commentaire supprimé' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};