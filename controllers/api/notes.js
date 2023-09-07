const Note = require('../../models/note');
const jwt = require('jsonwebtoken');

module.exports = {
    createNote,
    findNote,
}

async function createNote(req, res) {
    try {
        //creates a note following the parameters from Note module and attaching that note for 
        //the user who created it.
        const note = await Note.create({
            text: req.body.text,
            user: req.user._id
        });
        //sending the content of note variable as a response frm the server
        res.json(note);
        //catch the error.
    } catch (err){
        res.status(400).json(err);
    }
}

async function findNote(req, res) {
    try{
        //create note variable when fiding the the id a created note.
        const notes = await Note.find(req.body._id).sort('-createdAt');
        //create a usernotes variable when fiding the id of the user
        const userNotes = await Note.find({user:req.user._id}).sort(-'createdAt');
        //sending back response from the server
        res.jason(notes);
        res.jason(userNotes);
    } catch (err) {
        res.status(400).json('Error');
    }
}