// (1)
const noteListDiv = document.querySelector('.note-list');
let noteID = 1;
function Note(id, title, content){
    this.id = id;
    this.title = title;
    this.content = content;
}


// all eventlisteners (2)
function eventlisteners(){
    document.addEventListener('DOMContentLoaded', displayNotes);
    document.getElementById('add-note-btn').addEventListener
    ('click', addNewNote);
}

eventlisteners();

// get items form storage (6)
function getDataFromStorage(){
    return localStorage.getItem('notes') ? JSON.parse
    (localStorage.getItem('notes')) : [];
}


// add a new note in the list (3)
function addNewNote(){
    const noteTitle = document.getElementById('note-title');
    const noteContent = document.getElementById('note-content');
    if(validateInput(noteTitle, noteContent)){
        let notes = getDataFromStorage();
        let noteItem = new Note(noteID, noteTitle.value, noteContent.value);
        noteID++;
        notes.push(noteItem);
        createNote(noteItem);
        // saving in the local storage
        localStorage.setItem('notes', JSON.stringify(notes));
        noteTitle.value = "";
        noteContent.value = "";
    }
}


// input validation (4)
function validateInput(title, content){
    if(title.value !== "" && content.value !== ""){
        return true;
    } else {
        if(title.value === "") title.classList.add('warning');
        if(content.value === "") content.classList.add('warning');
    }
    setTimeout(() => {
        title.classList.remove('warning');
        content.classList.remove('warning');
    }, 1500)
}


// create a new note div (5)
function createNote(noteItem){
    const div = document.createElement('div');
    div.classList.add('note-item');
    div.setAttribute('data-id', noteItem.id);
    div.innerHTML = `
         <h3>${noteItem.title}</h3>
         <p>${noteItem.content}</p>
         <button type = "button" class = "btn delete-note-btn">
         <span><i class = "fas fa-trash"></i></span>
         Remove
         </button>
    `;
    noteListDiv.appendChild(div);
}

// display all the notes form the local storage (7)
function displayNotes(){
    let notes = getDataFromStorage();
    if(notes.length > 0){
        noteID = notes[notes.length - 1].id;
        noteID++
    } else {
        noteID = 1;
    }
    notes.forEach(item => {
        createNote(item);
    });
}