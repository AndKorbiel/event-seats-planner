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
        .then(res.status(200).send(newGuest))
        .catch(err => res.status(500).json('Error: ' + err))
}

exports.guestList_addGuestsList = (req, res) => {
    const guestsList = req.body
    console.log(req.body)

    GuestsList.insertMany(guestsList)
        .then(result => {
            console.log(result)
            res.status(200).send(result)
        })
        .catch(err => res.status(500).json('Error: ' + err))
}

exports.guestList_removeGuest = (req, res) => {
    const id = req.body.data;
    GuestsList.findByIdAndDelete(id)
        .then(() => {
            res.status(200).send(id)
        })
        .catch(err => res.status(500).json('Error: ' + err))
}

exports.guestList_editGuest = (req, res) => {
    const id = req.body.data.id;

    const updatedGuest = {
        name: req.body.data.name,
        category: req.body.data.category
    }

    GuestsList.findOneAndUpdate({_id: id}, updatedGuest, {new: true}, (err, result) =>{
        if (err) {
            res.status(500).json('Error: ' + err)
        } else {
            res.status(200).send(result)
        }
    })
}