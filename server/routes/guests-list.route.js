const express = require('express');
const app = express();
const Guests = require('../models/guests-list.model');
const guestListController = require('../controllers/guests-list.controller');

app.get('/getAll', guestListController.guestList_getAll);
app.post('/add', guestListController.guestList_addGuest);

module.exports = app;