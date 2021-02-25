const GuestsList = require('../models/guests-list.model');

exports.guestList_getAll = (req, res) => {
    GuestsList.find((err, guestslist) => {
        if (err) {
            res.send("Error while getting data from database")
        } else {
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

exports.guestList_removeGuest = (req, res) => {
    const id = req.query.id;
    console.log(id)
    console.log('adsad')

    GuestsList.findByIdAndDelete(id)
        .then(() => res.json(id))
        .catch(err => res.status(400).json('Error: ' + err))
}