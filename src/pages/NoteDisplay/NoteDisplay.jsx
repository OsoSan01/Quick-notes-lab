export default function NoteDisplay({note}) {
    return (
      <>
          <div className="card">
            <div className="card-content">
              <h2>Your note</h2>
              <p>{note}</p>
            </div>
          </div>
      </>   
    )
   }
   
