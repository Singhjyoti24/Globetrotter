const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    score: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', UserSchema);
