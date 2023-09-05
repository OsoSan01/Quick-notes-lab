const Note = require('../../models/note');
const jwt = require('jsonwebtoken');

module.exports = {
    createNote
}

async function createNote(req, res) {
    try {
        console.log('req.body', req.body.text, req.body.user, req.user._id);
        req.body.user = req.user._id;
        console.log(req.body.user);
        const note = await Note.create({
            text: req.body.text,
            user: req.body.user
        });
        res.json(note);
    } catch (err){
        res.status(400).json(err);
    }
}