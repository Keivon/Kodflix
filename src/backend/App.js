const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const getShows = require('./rest/shows');
const path = require('path');

app.get('/rest/shows', (req, res) => res.send(getShows()));

app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));