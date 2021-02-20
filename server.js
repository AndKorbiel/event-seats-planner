const express = require('express');
const app = express();
const { APP_PORT } = require('./server/config');

app.get('/api', (req, res) => {
    res.json('New value from api')
})

app.listen(APP_PORT, () => {
    console.log('App listening on port: ' + APP_PORT)
})