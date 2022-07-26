const express = require('express');
const router = express.Router();
const fs = require('fs');

// GET Route for retrieving notes
// GET = giving info to database
router.get('/',(req,res) => {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        } else {
            const notes = JSON.parse(data);
            res.json(notes);
        }
    });
});

// POST Route for posting notes
// POST = receiving info from user
router.post('/', (req,res) => {
    console.log(req.body);
    const newNote = {

    }
fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if(err) {
        throw err;
    } else {
        const notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFile(
            './db/db.json',
            JSON.stringify(notes, null, 4),
            (err, data) => {
                if(err) {
                    throw err;
                }
                res.json({data: req.body, message: "success!"});
            }
        );
    }
});
});

// DELETE Route for deleting notes
// DELETE = deleting info


module.exports = router;