let userToDo = []
let formElement = document.querySelector("form")
formElement.addEventListener("submit", (event) => {
    let userValue = event.target.userText.value.trim();
    if (userValue == "") {
        alert("Please enter a todo item!");
        event.preventDefault();
        return;
    }
    userToDo.push(userValue)
    event.target.reset()
    ShowAllTODO()
    event.preventDefault();
})

let UlElement = document.querySelector(".InputBar ul")

let ShowAllTODO = () => {
    let liItem = ''
    userToDo.forEach((Value, Index) => {
        liItem += `<li>${Value} <span onclick="RemoveItem(${Index})">&times;</span></li>`
    })
    UlElement.innerHTML = liItem
}

function RemoveItem(CurrentIndex) {
    userToDo.splice(CurrentIndex, 1)
    ShowAllTODO()
}