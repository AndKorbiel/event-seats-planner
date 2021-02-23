const express = require('express');
const app = express();
const { APP_PORT, MONGODB_URI } = require('./server/config');
const guestsList = require('./server/routes/guests-list.route');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = mongoose.connection;
app.use(bodyParser.json());

// db
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Db is connected!')
});

// routes
app.get('/api', (req, res) => {
    res.json('New value from api')
})

app.use('/guests-list', guestsList);

app.listen(APP_PORT, () => {
    console.log('App listening on port: ' + APP_PORT)
})