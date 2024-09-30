const express = require('express');
const app = express();
const port = 3000;

// GET /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// GET /user
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Jay';
    const lastname = req.query.lastname || 'Amdavadi';
    res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname
app.post('/user/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.json({ firstname, lastname });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});