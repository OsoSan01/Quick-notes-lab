import * as notesAPI from './notes-api';

// export async function findNotes() {
//     // Delegate the AJAX request to the notes-api.js
//     // module.
//     const userNotes = await notesAPI.findNotes(userNotes);
//     localStorage.setItem('userNotes', userNotes);
//     return getUser();
//   }

export async function createNote(newNote) {
    return notesAPI.createNote(newNote)  
};

// export async function deleteNote() {
//     // Delegate the AJAX request to the notes-api.js
//     // module.
//   }

// export async function updateNote() {
//     // Delegate the AJAX request to the notes-api.js
//     // module.
    
//   }