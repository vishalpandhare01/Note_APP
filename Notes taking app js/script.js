console.log('Welcome to notes app')
showNotes();
//if user adds notes added to local storage
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function(e) {
    
  let name = document.getElementById("name");
  let title = document.getElementById("title");
  
  let addTxt = document.getElementById("addtext");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  }
  else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push([name.value,title.value,addTxt.value]);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addTxt.value = "";
//   console.log(notesobj);
  showNotes();
});

// function to show local sorage element
function showNotes(){
    let notes = localStorage.getItem('notes')
    if(notes == null ){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
       
    }
    let html ="";
    notesobj.forEach(function(element,index){
        html += ` <div class=" noteCard mx-2 my-2 card" style="width: 18rem;" >
        <div class="card-body" style="background-color: bisque;>
          <h5 class="card-title">${element[1]} ${index + 1}</h5>
          <p class="card-text">${element[2]}</p>
          <p class="card-text"> <b>written by - ${element[0]} </b></p>
          <button onclick='deleteNotes(this.id)' class="btn btn-secondary">Delete notes</button>
        </div>
      </div>`;
    });
    
    let notesElm = document.getElementById('notes')
    if(notesobj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML =`Nothing to show use "Add a notes section about to add notes " `;
    }
}
// function to delete notes
function deleteNotes(index){
    // console.log('i will delete')
    let notes = localStorage.getItem('notes')
    if(notes == null ){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesobj));
    showNotes();
}

let search = document.getElementById('searchtxt');
search.addEventListener('input',function(){

    let inputval = search.value.toLowerCase()
    console.log('input event fired' ,inputval)
    let notecard = document.getElementsByClassName('noteCard')
    console.log(notecard)

    Array.from(notecard).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        console.log(cardTxt);

        if(cardTxt.includes(inputval)){
            element.style.display = "block";
            // console.log('is is workokn')
        }
        else{
            element.style.display = "none";
        }        
    });
});

// dark mode and white mode 
const btn = document.getElementById('mode');
btn.addEventListener('click', function onClick(event) {
    if(document.body.style.backgroundColor  == 'white')
    {
        document.body.style.backgroundColor  = 'black';
        document.body.style.color = 'white';

        let nav = document.getElementById('nav')
        nav.setAttribute('class',"navbar navbar-expand-lg navbar-dark bg-dark")

        let innote = document.getElementById("innote")
        innote.style.borderColor = 'black'

        bw = document.getElementById('mode')
        bw.style.backgroundColor = 'white'
        bw.style.color = 'black'
        bw.innerHTML='white mode'

    }
    else if(document.body.style.backgroundColor  = 'black')
    {
        let nav = document.getElementById('nav')
        nav.setAttribute('class',"navbar navbar-expand-lg navbar-light bg-light")
        document.body.style.backgroundColor  = 'white';
        document.body.style.color = 'black';
        wb = document.getElementById('mode')
        wb.style.backgroundColor = 'black'
        wb.style.color = 'white'
        wb.innerHTML='dark mode'
    }
});