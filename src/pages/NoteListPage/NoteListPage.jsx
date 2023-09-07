import * as notesService from '../../utilities/notes-service';
import NoteDisplay from '../NoteDisplay/NoteDisplay';

export default function NotesList({user, notes, setNotes}) {

  //search all user notes
  async function searchNotes(){
    const userNotes= await notesService.searchNotes();
    setNotes(userNotes);
  }

  return (
    <div>
    {notes.length === 0 ? 
        ( <p>No Notes Yet!</p>) 
        : 
        (
          <>
          <h1>All {user.name} notes</h1>
          <div>
            {notes.map((note, idx) => (
              <NoteDisplay key={idx} note={note.text}/>
            ))}
          </div>
          </>
        )}
        <button onClick={searchNotes}>Your Notes</button>
      </div>
    )
   }
