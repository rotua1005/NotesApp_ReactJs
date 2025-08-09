import { useState } from "react";

function Navbar({ onAddNote, onSearch }) {
  const [charCount, setCharCount] = useState(50);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const updateCharCount = (value) => {
    const max = 50;
    setTitle(value);
    setCharCount(max - value.length);
  };

  const handleSubmit = () => {
    if (title.trim() && body.trim()) {
      onAddNote(title, body);
      setTitle("");
      setBody("");
      setCharCount(50);
    }
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <>
      <header className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari catatan..."
            value={searchTerm}
            onInput={(e) => handleSearch(e.target.value)}
          />
        </div>
      </header>

      <div className="note-input">
        <div className="note-input__title-wrapper">
          <div className="note-input__title__char-limit">
            Sisa karakter: {charCount}
          </div>
          <input
            type="text"
            className="note-input__title"
            placeholder="Judul Catatan"
            maxLength={50}
            value={title}
            onInput={(e) => updateCharCount(e.target.value)}
          />
        </div>

        <textarea
          className="note-input__body"
          placeholder="Tulis isi catatan..."
          value={body}
          onInput={(e) => setBody(e.target.value)}
        ></textarea>

        <button type="button" onClick={handleSubmit}>
          Buat
        </button>
      </div>
    </>
  );
}

export default Navbar;
