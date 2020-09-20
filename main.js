//console.log(Javascript_notes)
//target just one paragraph
//var ps = document.querySelector('p')
//ps.textContent = 'pina collada';

//////////////////////////////

//target all paragraphs
var ps = document.querySelectorAll ('p')
ps.forEach(function(p) {
  p.textContent = 'phewks';
})

var notes = [
  {
    title: "javascript is such a pain",
    body: "maybe i will try another language, just maybe",
  },
  {
    title: "but i can hack this",
    body: "or can i?",
  },
  {
    title: "lets just wait and see",
    body: "like i have a choice",
  },
];

//create a filter object whichwill be an empty string at the beggining
var filters = {
  searchText: ""
}
//add a new Element
// var newParagraph = document.createElement("p")
// newParagraph.textContent = "whoa whoa"
// document.querySelector("body").appendChild(newParagraph);

var renderNotes = function(notesData, filtersData){
  var filteredNotes = notesData.filter(function (note) {
    return note.title.toLowerCase().includes(filtersData.searchText.toLowerCase())
  })

  //the browser puts new elements on theDOM but you want it to use only new information.
  document.querySelector("#notes").innerHTML = ""

  filteredNotes.forEach(function(note){
    var noteEl = document.createElement("p")
    //for it to display both the title and body
    //noteEl.textContent = `${note.title} - ${note.body}`;
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl)
  })
}
renderNotes(notes, filters)


//target the create note button id
document.querySelector('#create-note').addEventListener('click', function(evt){
  // console.log(evt)
  evt.target.textContent = "notes data";
})


//target the remove all button
//for some reason this isnt working

document.querySelector("#remove-all").addEventListener("click", function(){
  document.querySelectorAll(".note").forEach(function (note) {
    note.remove();
  });
});

// the inputfield
document.querySelector("#search-text").addEventListener("input", function(evt){
  console.log(evt.target.value)
})

document.querySelector("#search-text").addEventListener("input", function(evt) {
  filters.searchText = evt.target.value;
  renderNotes(notes, filters);
})