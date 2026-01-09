import { useState } from "react";

const NoteForm = ({ setnotes }) => {
  const [val, setval] = useState("");
  const [description, setdescription] = useState("");

  function submit(e) {
    e.preventDefault();
    setnotes((prev) => [...prev, { id: Date.now(), val, description }]);
    setval("");
    setdescription("");
  }

  return (
    <div className="note-form">
      <form onSubmit={submit}>
        <h2>Add Note</h2>

        <label>Title</label>
        <input
          type="text"
          value={val}
          onChange={(e) => setval(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NoteForm;
