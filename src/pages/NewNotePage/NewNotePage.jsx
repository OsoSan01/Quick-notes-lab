import { useState } from 'react';
import * as notesService from '../../utilities/notes-service'


export default function NewNoteForm({notes, setNotes}) {
  const [newNote, setNewNote] = useState([
    {text:""}
  ]);
  
  const [error, setError] = useState("");

  function handleChange(evt) {
    setNewNote({[evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      const note= await notesService.createNote(newNote);
      setNotes([...notes, {text: note.text}])
    }catch {
      setError('Unable to create note - please try again!')
    }
  };

  return (
    <>
    <p>Create a New Note!</p>
    <form onSubmit={handleSubmit}>
    <input type="text" name="text" value={newNote.text} onChange={handleChange} required />
      <button type="submit" disabled={!newNote.text}>Post Your Note!</button>
    </form>
    </>
  );
}