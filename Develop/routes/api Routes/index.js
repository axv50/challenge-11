const router = require('express').Router();
const { findById, createNewNote } = require('../../lib/notes')
const { notes } = require('../../data/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.get('/note/:id', (req, res) => {
    let result = findById(req.params.id, notes);
    res.json(result);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;