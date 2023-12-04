const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    mark: { type: Number, required: true },
    date: {type: Date, required:true},
    idCommentator:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    idTarget: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;