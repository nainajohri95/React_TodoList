import React, { useState } from "react";
import NoteList from "./Components/NoteList";
import {nanoid} from 'nanoid'
import Search from "./Components/Search";

function App() {

  const[noteText, setNoteText] = useState('')
  const [searchText, setSearchText] = useState('')
  const[notes, setNotes] = useState([
    {
      text: 'samsung s20',
      date: '28/12/2023',
      id:nanoid()
    },
    {
      text: 'Realme 7',
      date: '28/12/2023',
      id:nanoid()
    },
    {
      text: 'OLT Exam',
      date: '28/12/2023',
      id:nanoid()
    },
    {
      text: 'iphone 13 ',
      date: '28/12/2023',
      id:nanoid()
    },
    {
      text: 'Assignment ',
      date: '28/12/2023',
      id:nanoid()
    }
  ])

  function addNote(){
    const date = new Date().toLocaleDateString()
    console.log(noteText)
    setNoteText('')

    const newNote ={
      text:noteText,
      date:date,
      id:nanoid()
    }
    const updatedNotes = [...notes,newNote]
    setNotes(updatedNotes)
  }

  function handleNoteText(text){
    setNoteText(text)
  }

  function handleDeleteNote(id){
    console.log(id)
    const updateNotes = notes.filter(note => note.id !== id)
    setNotes(updateNotes)
  }

  function handleSearchText(text){
    setSearchText(text)
  }
  
  return ( 
    <>
    <Search searchText={searchText} handleSearchText={handleSearchText}/>
    <NoteList handleDeleteNote={handleDeleteNote} addNote={addNote} handleNoteText={handleNoteText} noteText={noteText}notes={notes.filter(notes => notes.text.includes(searchText))}/>
    </>
  );
}   

export default App;
