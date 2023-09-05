const express = require('express');
const router = express.Router();
const notesController = require('../../controllers/api/notes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST api/notes/new
router.post('/new', notesController.createNote);

module.exports = router;