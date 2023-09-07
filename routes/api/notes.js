const express = require('express');
const router = express.Router();
const notesController = require('../../controllers/api/notes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST api/notes/new (create a new note)
router.post('/new', notesController.createNote);

//GET api/notes (display all created notes)
router.get('/', notesController.findNote)

//mount routes on server.js, same as with users
module.exports = router;