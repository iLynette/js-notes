//read existing notes from storage
const getSavedNotes = function() {
  var notesJSON = localStorage.getItem("notes");

  if (notesJSON != null) {
    return JSON.parse(notesJSON);
  }else{
    return[];
  }
};

//save notes to local storage
const saveNotes = function(notes) {
  localStorage.setItem("notes", JSON.stringify(notes))
};

//remove an item from the list
const removeNote = function(id) {
  const notesIndex = notes.findIndex(function(note){
    return note.id === id
  })
  if(notesIndex > -1) {
    notes.splice(notesIndex, 1)
  }
}

//render the DOm structure for a note
const generateNoteDOM = function(note) {
  var noteEl = document.createElement("div");
  var textEl = document.createElement("span")
  const button = document.createElement("button")

  //set up content for delte button
  button.textContent = "delete"
  noteEl.appendChild(button);

  button.addEventListener("click", function() {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })


  if (note.title.length > 0) {
    noteEl.textContent = note.title;
  }else{
    textEl.textContent = "Lynette";
  }
  noteEl.appendChild(textEl);
  return noteEl
}

var renderNotes = function(notesData, filtersData){
  var filteredNotes = notesData.filter(function (note) {
    return note.title.toLowerCase().includes(filtersData.searchText.toLowerCase())
  })
    document.querySelector("#notes").innerHTML = ""

    filteredNotes.forEach(function(note){
      const noteEl = generateNoteDOM(note)
      //DOM structure
    //   var noteEl = document.createElement("p")

    //   if (note.title.length > 0) {
    //     noteEl.textContent = note.title;
    // }else{
    //     noteEl.textContent = "unnamed note";
    // }
      document.querySelector("#notes").appendChild(noteEl)
  })
};
//renderNotes(notes, filters)
  
