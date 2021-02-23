const mongoose = require('mongoose');

const guestsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Guests', guestsSchema);