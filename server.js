const express = require('express');
const path = require('path');

const app = express();
// Serve static files from the 'portfolio' directory
app.use(express.static(path.join(__dirname)));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/particlesjs-config.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/node_modules/particles.js/particlesjs-config.json'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));