const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server on port 3000
app.listen(3000, function() {
    console.log('App listening on port 3000!');
});