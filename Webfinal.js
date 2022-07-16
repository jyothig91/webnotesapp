let addBtn = document.getElementById("add-btn");
let notes=document.getElementById("notes")
let dates=new Date();

  addBtn.onclick= () => {
  let addTitle = document.getElementById("note-title");
  let addTxt = document.getElementById("note-text");
  
    if (addTitle.value == "" ) {
        return alert("Please add Note Title ")
    }
 let notes = localStorage.getItem("notes");
if (notes == null) {
    notesObj = [];
} else {
notesObj = JSON.parse(notes);
}
 let myObj = {
    title: addTitle.value,
    text: addTxt.value,
    date:dates.getDate()+'/'+(dates.getMonth()+1)+'/'+dates.getFullYear()+''+"at"+dates.getHours()+':'+dates.getMinutes()
   };
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
   display();
 }

function display() {

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
        <div class="item">
          
            <h3> <span>Title:${element.title} </span></h3>
            <p class="notescontent"> <span> Content:${element.text}</span></p>
            <button class=" btnn delete" onclick="deleteNote(${index})" >Delete Note</button>
            <button class=" btnn edit" onclick="editNote(${index})" >Edit Note</button>
            <div class="time">${element.date}</div>
        </div>
            `;
  });
  let notesElm = document.getElementById("notes");
    notesElm.innerHTML = html;
   
}

function deleteNote(index) {

        let notes = localStorage.getItem("notes");
        notesObj = JSON.parse(notes);
        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        display();
  }

  function editNote(index) {
    let notes = localStorage.getItem("notes");
    let addTitle = document.getElementById("note-title");
    let addTxt = document.getElementById("note-text");

    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
  
      notesObj.findIndex((element, index) => {
      addTitle.value = element.title;
      addTxt.value = element.text;
    })
    notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        display();
}




  
