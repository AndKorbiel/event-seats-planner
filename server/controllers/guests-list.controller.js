const GuestsList = require('../models/guests-list.model');

exports.guestList_getAll = (req, res) => {
    GuestsList.find((err, guestslist) => {
        if (err) {
            res.send("Error while getting data from database")
        } else {
            console.log(guestslist)
            res.send(guestslist)
        }
    })
}