const noteForm = document.getElementById("noteForm");
const notesContainer = document.querySelector(".notesContainer");



function saveNotesInLocalStorage(note) {
    // save notes in the local storage in an array , if nothing in it then it will be an empty array
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    // add the note to the array or an empty array
    notes.push(note);

    // save the array in the local storage as a string
    localStorage.setItem("notes", JSON.stringify(notes));

}


function deleteNote(index) {
    // get the notes from local storage
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    // remove the note from the array
    notes.splice(index, 1);

    // save the array in the local storage
    localStorage.setItem("notes", JSON.stringify(notes));

    // display the notes
    displayNotes();
}

function editNote(index) {
    // get the notes from local storage
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    // get the note to be edited
    const note = notes[index];

    // display the note in the form
    document.getElementById("noteTitle").value = note.title;
    document.getElementById("noteContent").value = note.content;

    // remove the note from the array
    notes.splice(index, 1);
    
    
    // save the array in the local storage
    localStorage.setItem("notes", JSON.stringify(notes));
}


function displayNotes() {
    // get the notes from local storage
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    // clear the notes container
    notesContainer.innerHTML = "";

    // loop through the notes and create a note card for each note
    notes.forEach((note,index)=> {
        // create a note card
        const noteCard = document.createElement("div");
        noteCard.classList.add("note");

        // add the note title and content to the note card
        noteCard.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.content}</p>
        `;


        //create a buttons container
        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("buttonsContainer");
        buttonsContainer.style.display="flex";
        buttonsContainer.style.gap="10px";


        // add a delete button to the buttons container
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.style.background="transparent";
        // add a click event listener to the delete button
        deleteButton.addEventListener("click", function () {
            deleteNote(index);
        });

        //create a edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️";
        editBtn.style.background="transparent";

        // add a click event listener to the edit button
        editBtn.addEventListener("click", function () {
            editNote(index);
        });



        // append the edit button to the buttons container
        buttonsContainer.appendChild(editBtn);

        // append the delete button to the buttons container
        buttonsContainer.appendChild(deleteButton);



        // adding buttons container to notecard
        noteCard.appendChild(buttonsContainer);
        // append the note card to the notes container
        notesContainer.appendChild(noteCard);
    })

}

noteForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // get the note title and content
    const noteTitle = document.getElementById("noteTitle").value.trim();
    const noteContent = document.getElementById("noteContent").value.trim();

    // check if the note title and content are not empty
    if (noteTitle === "" && noteContent === "") {
        alert("Please enter a note title and content");
        return;
    }

    // create a object for the note
    const note = {
        title: noteTitle,
        content: noteContent
    }

    // save notes in the local storage to show it even after the page is reloaded
    saveNotesInLocalStorage(note);

    // display the notes
    displayNotes();

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";




});
displayNotes();