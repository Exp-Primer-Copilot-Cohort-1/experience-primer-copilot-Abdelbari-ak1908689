// Create web server
const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/comments', (req, res) => {
    db.query('SELECT * FROM comments', (err, results) => {
        if (err) {
            res.send('Error');
        } else {
            res.json(results);
        }
    });
});

router.post('/comments', (req, res) => {
    const { content } = req.body;
    db.query('INSERT INTO comments (content) VALUES (?)', [content], (err, results) => {
        if (err) {
            res.send('Error');
        } else {
            res.send('Success');
        }
    });
});

router.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM comments WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.send('Error');
        } else {
            res.send('Success');
        }
    });
});

module.exports = router;