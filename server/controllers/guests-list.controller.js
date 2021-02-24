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

exports.guestList_addGuest = (req, res) => {
    const newGuest = new GuestsList({
        name: req.body.name,
        category: req.body.category
    })

    newGuest.save()
        .then(() => res.status(200).send(newGuest))
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
}