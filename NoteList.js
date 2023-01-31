import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

export default function NoteList({notes, noteText, addNote, handleNoteText, handleDeleteNote}) {

  return (
    <div className='notes-container'>
        <AddNote noteText={noteText} 
        handleNoteText={handleNoteText} 
        addNote={addNote}/>

        {notes.map(note => {
          return(
            <Note handleDeleteNote={handleDeleteNote} 
            key={note.id} note={note}/>
            );
          })}
    </div>
  );
}
