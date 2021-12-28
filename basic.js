// // var x = 5
// // for (let i = x; i >= 1; i--) {
// //     console.log(i)
// // }
// class desert{
//     constructor(calories=100){
//         this.calories=calories;
//     }
// }
// const vanila=new desert(275)
// console.log("vanila",vanila.calories)
// const straberries=new desert(175)
// console.log("straberries",straberries.calories)
count = 0;

function createNote(noteTitle, noteBody) {
    count += 1;
    document.getElementById("no-notes").classList.add("hidden");


    let li = document.createElement("li")
    let a = document.createElement("a")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")
    let xButton = document.createElement("Button")

    xButton.classList.add("delete")
    let xText = document.createTextNode("X")
    let h2TN = document.createTextNode(noteTitle)
    let pTN = document.createTextNode(noteBody)

    h2.appendChild(h2TN)
    p.appendChild(pTN)
    xButton.appendChild(xText)
    a.appendChild(h2);
    a.appendChild(xButton);
    a.appendChild(p);
    a.setAttribute("href", "#");

    li.appendChild(a)
    document.getElementById("notes").appendChild(li);

}




function createNotesFromInput(e) {
    e.preventDefault();
    let noteTitle = document.getElementById("new-note-title-body").value;
    let noteBody = document.getElementById("new-note-body-input").value;
    document.getElementById("new-note-title-body").value = "";
    document.getElementById("new-note-body-input").value = "";

    createNote(noteTitle, noteBody);
}

function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        //   confirm("are you sure?")
        let li = e.target.parentElement.parentElement;
        let ul = document.getElementById("notes")
        ul.removeChild(li);
    }
    count -= 1
    if (count < 1) {
        document.getElementById("no-notes").className = "";
    }
}



document.getElementById('inputform').addEventListener("submit", createNotesFromInput, false);
document.getElementById("notes").addEventListener("click", removeItem)