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

var renderNotes = function(notesData, filtersData){
  var filteredNotes = notesData.filter(function (note) {
    return note.title.toLowerCase().includes(filtersData.searchText.toLowerCase())
  })
    document.querySelector("#notes").innerHTML = ""

    filteredNotes.forEach(function(note){
      var noteEl = document.createElement("p")

      if (note.title.length > 0) {
        noteEl.textContent = note.title;
    }else{
        noteEl.textContent = "unnamed note";
    }
      document.querySelector("#notes").appendChild(noteEl)
  })
};
//renderNotes(notes, filters)
  
