var toggle = 0
function toggleTools(){
    var element = document.getElementById("tools");
    if(toggle == 0){
        toggle = 1
        element.classList.add("d-none");
    } else{
        toggle = 0
        element.classList.remove("d-none");
    }
}

function toggleNotesSize(){
    notes = document.getElementById("notes-table");
    toggleIcon = document.getElementById("minimize-notes");
    if(notes.style.height == '45%'){
        notes.style.removeProperty('height');
        toggleIcon.style.removeProperty('color');
    } else {
       notes.style.height = "45%"; 
        toggleIcon.style.color = "var(--bs-blue)";
    }
}
function hideNotes(){
    notes = document.getElementById("notes-table");
    hideIcon = document.getElementById("hide-notes-icon");

    if(notes.style.display == 'none'){
        notes.style.removeProperty('display');
        hideIcon.style.color = "var(--bs-blue)";

        hideIcon.classList.remove('fa-angle-down');
        hideIcon.classList.add('fa-angle-up');
    } else {

        hideIcon.classList.add('fa-angle-down');
        hideIcon.classList.remove('fa-angle-up');

        hideIcon.style.removeProperty('color');
       notes.style.display = "none"; 
       
    }
}
var selectedNote = 0
function toggleNoteLines(idNum){
    
    note = document.getElementById("note-" + idNum);
    notesCell = document.getElementById("notes-cell-" + idNum);
    
    if(selectedNote == idNum){
        notesCell.style.removeProperty('background');
        note.style.lineHeight = "1.5em"
        note.style.height = "3em"
        note.style.overflow = "hidden"
        selectedNote = 0
    } else {
        notesCell.style.background = "rgba(0, 130, 251, 0.14902)";
        note.style.removeProperty('line-height');
        note.style.removeProperty('height');
        note.style.removeProperty('overflow');
        selectedNote = idNum
    }
    
}

function toggleSizeChat(){
    chats = document.getElementById("notes-table");
    toggleIcon = document.getElementById("minimize-notes");
    if(notes.style.height == '45%'){
        notes.style.removeProperty('height');
        toggleIcon.style.removeProperty('color');
    } else {
       notes.style.height = "45%"; 
        toggleIcon.style.color = "var(--bs-blue)";
    }
}
function hideChats(){
    chats = document.getElementById("chats-area");
    chatsForm = document.getElementById("sendchats");
    chatsTextArea = document.getElementById("chatsTextArea");
    chatsSend = document.getElementById("chatsSend");
    hideIcon = document.getElementById("hide-chats-icon");
    if(chats.style.display == 'none'){
        chats.style.removeProperty('display');
        chats.style.height = "75%";
        chatsForm.style.removeProperty('display'); 
        chatsTextArea.style.removeProperty('display');
        chatsSend.style.removeProperty('display');
        hideIcon.classList.remove('fa-angle-down');
        hideIcon.classList.add('fa-angle-up');
    } else {
        hideIcon.classList.add('fa-angle-down');
         hideIcon.classList.remove('fa-angle-up');
       chats.style.display = "none"; 
        chats.style.removeProperty('height');
        chatsForm.style.display = "none"; 
       chatsTextArea.style.display = "none";
        chatsSend.style.display = "none";
    }
}


function hideStrongs(){
    strongs = document.getElementById("strongs-books");
    chapter = document.getElementById("strongs-chapters");
    verse = document.getElementById("strongs-verses");
    verseExtra = document.getElementById("strongs-verses");
    youSelected = document.getElementById("you-selected");
    hideIcon = document.getElementById("hide-strongs-icon");
    if(strongs.style.display == 'none' && chapter.style.display == 'none' && verse.style.display == 'none'){
        strongs.style.removeProperty('display');
        hideIcon.classList.remove('fa-angle-down');
        hideIcon.classList.add('fa-angle-up');
        youSelected.style.removeProperty('display');
    } else {
        youSelected.style.display = "none"; 
       strongs.style.display = "none"; 
        hideIcon.classList.remove('fa-angle-up');
        hideIcon.classList.add('fa-angle-down');
    }
}

function showStrongsChapter(x){
    chapterNumber = x
    books = document.getElementById("strongs-books");
    chatpter = document.getElementById("strongs-chapters");
    books.style.display = "none";
    chatpter.style.removeProperty('display');
    
}
function showStrongsVerse(x){
    chapterNumber = x
    books = document.getElementById("strongs-books");
    chapter = document.getElementById("strongs-chapters");
    verse = document.getElementById("strongs-verses");
    chapter.style.display = "none";
    verse.style.removeProperty('display');
    
}
function backStrongsVerse(){
    books = document.getElementById("strongs-books");
    chapter = document.getElementById("strongs-chapters");
    verse = document.getElementById("strongs-verses");
    verse.style.display = "none";
    chapter.style.removeProperty('display');
    
}
function backStrongsChapter(){
    books = document.getElementById("strongs-books");
    chapter = document.getElementById("strongs-chapters");
    verse = document.getElementById("strongs-verses");
    chapter.style.display = "none";
    books.style.removeProperty('display');
    
}

function hideStrongsBottom(){
    strongs = document.getElementById("strongs-tool");
    if(strongs.style.display == 'none' && chapter.style.display == 'none' && verse.style.display == 'none'){
        strongs.style.removeProperty('display');
    } else {
       strongs.style.display = "none"; 
    }
}
function hideChatsBottom(){
    chats = document.getElementById("chat-tool");
    if(chats.style.display == 'none'){
        chats.style.removeProperty('display');
    } else {
       chats.style.display = "none"; 
    }
}
function hideNotesBottom(){
    notes = document.getElementById("notes-tool");
    if(notes.style.display == 'none'){
        notes.style.removeProperty('display');
    } else {
       notes.style.display = "none"; 
    }
}
function notesFullScreen(){
    notes = document.getElementById("notes-tool");
    if(notes.style.height == '100%'){
        notes.style.height = '45%';
        hideIcon.classList.remove('bi-arrows-collapse');
        hideIcon.classList.add('bi-arrows-expand');
    } else {
       notes.style.height = '100%'; 
        hideIcon.classList.remove('bi-arrows-expand');
        hideIcon.classList.add('bi-arrows-collapse');
    }
}
function chatsFullScreen(){
    chats = document.getElementById("chat-tool");
    if(chats.style.height == '100%'){
        chats.style.height = '45%';
        hideIcon.classList.remove('bi-arrows-collapse');
        hideIcon.classList.add('bi-arrows-expand');
    } else {
       chats.style.height = '100%'; 
        hideIcon.classList.remove('bi-arrows-expand');
        hideIcon.classList.add('bi-arrows-collapse');
    }
}
function strongsFullScreen(){
    strongs = document.getElementById("strongs-tool");
    if(strongs.style.height == '100%'){
        strongs.style.height = '45%';
        hideIcon.classList.remove('bi-arrows-collapse');
        hideIcon.classList.add('bi-arrows-expand');
    } else {
       strongs.style.height = '100%'; 
        hideIcon.classList.remove('bi-arrows-expand');
        hideIcon.classList.add('bi-arrows-collapse');
    }
}
function ShowNotes(){
    hideAllBottomNotes();
    notes = document.getElementById("notes-tool");
    if(notes.style.display == 'none'){
        notes.style.removeProperty('display');
    } else {
       notes.style.display = "none"; 
    }
}
function ShowChats(){
    hideAllBottomNotes();
    chats = document.getElementById("chat-tool");
    if(chats.style.display == 'none'){
        chats.style.removeProperty('display');
    } else {
       chats.style.display = "none"; 
    }
}
function ShowStrongs(){
    hideAllBottomNotes();
    strongs = document.getElementById("strongs-tool");
    if(strongs.style.display == 'none'){
        strongs.style.removeProperty('display');
    } else {
       strongs.style.display = "none"; 
    }
}

function hideAllBottomNotes() {
    notes = document.getElementById('notes-tool').style.display = "none";
    chats = document.getElementById("chat-tool").style.display = "none";
    strongs = document.getElementById("strongs-tool").style.display = "none";
}