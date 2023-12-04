const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Use process.env.PORT for Azure's port configuration
const PORT = process.env.PORT || 3000;

// Start the server on the provided port
app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}!`);
});
