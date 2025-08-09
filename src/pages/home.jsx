import { useState } from "react";
import Navbar from "../pages/navbar";
import Catatan from "../pages/catatan";
import { getInitialData } from "../utils";

function Home() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchTerm, setSearchTerm] = useState("");

  const addNote = (title, body) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setNotes([...notes, newNote]);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar onAddNote={addNote} onSearch={setSearchTerm} />
      <Catatan notes={filteredNotes} setNotes={setNotes} />
    </>
  );
}

export default Home;
