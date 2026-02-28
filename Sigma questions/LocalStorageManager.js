const btn = document.querySelector("#saveNoteBtn");
const div = document.querySelector("#notesContainer");

function saveNoteToLocalStorage(note) {
  localStorage.setItem("name", note);
}
const storedNote = localStorage.getItem("name");

if (storedNote) {
  div.textContent = storedNote;
}

btn.addEventListener("click", () => {
  let note = prompt("Enter the note:");
  if (!note || !note.trim()) return;
  saveNoteToLocalStorage(note);
  div.textContent = note;
});
