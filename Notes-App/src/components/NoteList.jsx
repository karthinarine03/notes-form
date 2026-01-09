import React from "react";

const NoteList = ({ notes, deletenotes }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div className="note-card" key={note.id}>
          <h3>{note.val}</h3>
          <p>{note.description}</p>
          <button onClick={() => deletenotes(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
