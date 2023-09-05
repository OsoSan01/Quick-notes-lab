import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

// export async function findNotes( ) { //need payload parameter//
//     return sendRequest(BASE_URL, 'GET', );
//    }

export async function createNote(newNote) { //different payload parameter//
    return sendRequest(`${BASE_URL}/new`, 'POST', newNote);
   }

// export async function deleteNote() { //different payload parameter//
//     return sendRequest(`${BASE_URL}/delete`, 'DELETE', );
//    }

// export async function updateNote() { //different payload parameter//
//     return sendRequest(`${BASE_URL}/edit`, 'GET', );
//    }