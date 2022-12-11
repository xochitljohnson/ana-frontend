let url = "http://localhost:5000/api/v1/notes";

// Get posts on DOM load
document.addEventListener("DOMContentLoaded", getNotes);

async function getNotes() {
  try {
    const notes = await fetch(url);
    const notesData = await notes.json();
    showNotes(notesData);
  } catch (error) {
    console.log(error);
  }
}

const noteContainer = document.getElementById("notesContainer");

async function showNotes(notes) {
  let notePayload = notes.data;

  let output = "";

  notePayload.forEach((note) => {
    output += `
  <div class="card mb-3">
  <div class="card-body">
  <h4 class="card-title">
  ${note.title}
  </h4>
  <p class="card-text">
  ${note.noteBody}
 </p>
 <a href="#" class="edit card-link" data-id="${note.id}">Edit</a>
 <a href="#" class="delete card-link" data-id="${note.id}">Delete</a>
  </div>
  </div>
  `;

    noteContainer.innerHTML = output;
  });
}

// add post
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", submitNote);

async function submitNote() {
  const title = document.getElementById("noteTitle").value;
  const body = document.getElementById("noteBody").value;

  const noteData = {
    title,
    body,
  };

  try {
    const postNote = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    });
  } catch (error) {
    console.log(error);
  }
}
