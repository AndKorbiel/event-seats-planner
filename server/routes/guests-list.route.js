const express = require('express');
const app = express();
const Guests = require('../models/guests-list.model');

app.get('/getAll', (req, res) => {
    Guests.find((err, guest) => {
        if (err) {
            res.send("Error while getting data from database")
        } else {
            res.send(guest)
        }
    })
})

module.exports = app;