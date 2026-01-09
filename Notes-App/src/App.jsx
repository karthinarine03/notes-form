import { useState, useEffect } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setnotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setnotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const deletenotes = (id) => {
    setnotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <NoteForm setnotes={setnotes} />
      <NoteList notes={notes} deletenotes={deletenotes} />
    </>
  );
}

export default App;
