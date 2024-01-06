const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: { type: String, required: true, minLength: 4 },
    password: { type: String, required: true, minLength: 6 },
});

module.exports = mongoose.model('User', UserSchema);