import { useState } from 'react'; 
import * as notesService from '../../utilities/notes-service';

export default function NewNoteForm({ notes, setNotes }) {
    const [newNote, setNewNote] = useState({
        text: '',
      });

    const [error, setError] = useState(''); 

    function handleChange(evt) { 
        setNewNote({ 
          ...newNote,
          [evt.target.name]: evt.target.value 
        }); 
        setError(''); 
    }

      async function handleSubmit(evt) { 
        evt.preventDefault(); 
        try {
          const note = await notesService.createNote(newNote); 
          setNotes([note, ...notes]); // Add the new note to the state
          setNewNote({ text: '' }); // Clear the form after submission
        } catch (err) { 
          setError('Your not was not created, please try again!');
          console.error(err); 
        } 
    } 

    return (
        <>
        <div className="form-container">
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <label>Add your notes!</label>
                <input type="text"
                    name="text"
                    value={newNote.text}
                    onChange={handleChange}
                    required
                />
                <button type="submit" disabled={!newNote.text}>Create your note!</button>
            </form>
        </div>
        </>
    ); 
}

