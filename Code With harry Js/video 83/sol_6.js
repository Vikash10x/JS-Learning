function saveNoteToLocalStorage(note) {
  if (typeof note !== "object" || note === null) {
    console.error("Invalid note object");
    return;
  }

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.push(note);

  localStorage.setItem("notes", JSON.stringify(notes));
}
const newNote = {
  id: Date.now(),
  title: "Meeting Notes",
  content: "Discuss project timeline and deliverables",
  date: new Date().toLocaleString(),
};

saveNoteToLocalStorage(newNote);
