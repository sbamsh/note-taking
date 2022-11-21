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
    document.getElementById('add-note-btn').addEventListener
    ('click', addNewNote);
}

eventlisteners();


// add a new note in the list (3)
function addNewNote(){
    const noteTitle = document.getElementById('note-title');
    const noteContent = document.getElementById('note-content');
    if(validateInput(noteTitle, noteContent)){
        let notes = [];
        let noteItem = new Note(noteID, noteTitle.value, noteContent.value);
        noteID++;
        notes.push(noteItem);
    }
}


// input validation (4)
function validateInput(title, content){
    if(title.value !== "" && content.value !== ""){
        return true;
    }else {
        if(title.value === "") title.classList.add('warning');
        if(content.value === "") content.classList.add('warning');
    }
    setTimeout(() => {
        title.classList.remove('warning');
        content.classList.remove('warning');
    }, 1500)
}

