const mongoose = require('mongoose');

const marvelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    src: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        default: null
    }
})

const Users = mongoose.model('users', userSchema);

module.exports = Users;