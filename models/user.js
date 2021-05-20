const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    fcolor: String,
    weight: Number,
    fshow: String,
});

const user = mongoose.model('user', UserSchema);

module.exports = user;
