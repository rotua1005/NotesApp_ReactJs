import { showFormattedDate } from "../utils";

function Catatan({ notes, setNotes }) {
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="notes-container">
      {/* Catatan Aktif */}
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {activeNotes.length === 0 ? (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        ) : (
          activeNotes.map((note) => (
            <div key={note.id} className="note-item">
              <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__date">
                  {showFormattedDate(note.createdAt)}
                </p>
                <p className="note-item__body">{note.body}</p>
              </div>
              <div className="note-item__action">
                <button
                  className="note-item__delete-button"
                  onClick={() => deleteNote(note.id)}
                >
                  Hapus
                </button>
                <button
                  className="note-item__archive-button"
                  onClick={() => toggleArchive(note.id)}
                >
                  Arsip
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Catatan Arsip */}
      <h2>Arsip</h2>
      <div className="notes-list">
        {archivedNotes.length === 0 ? (
          <p className="notes-list__empty-message">Tidak ada catatan arsip</p>
        ) : (
          archivedNotes.map((note) => (
            <div key={note.id} className="note-item">
              <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__date">
                  {showFormattedDate(note.createdAt)}
                </p>
                <p className="note-item__body">{note.body}</p>
              </div>
              <div className="note-item__action">
                <button
                  className="note-item__delete-button"
                  onClick={() => deleteNote(note.id)}
                >
                  Hapus
                </button>
                <button
                  className="note-item__archive-button"
                  onClick={() => toggleArchive(note.id)}
                >
                  Batal Arsip
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Catatan;
