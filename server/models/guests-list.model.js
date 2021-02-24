const mongoose = require('mongoose');

const guestsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String
    }
})

module.exports = mongoose.model('Guests', guestsSchema);