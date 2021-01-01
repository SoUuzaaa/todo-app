document.getElementById('btnElement').addEventListener('click', function addTodo() {
    const todoElement = document.getElementById('inputElement').value
    const text = document.createTextNode(todoElement)

    const listElement = document.createElement("li")
    const space = document.createTextNode(" ")
    const paragraph = document.createElement("p")
    const deleteElement = document.createElement("button")

    if(!todoElement) {
        alert("Invalid input!")
    }
    else {
        listElement.appendChild(text)
        listElement.appendChild(space)
        listElement.appendChild(deleteElement)
        deleteElement.innerHTML = `<i class="fas fa-trash-alt"></i>`
        paragraph.appendChild(listElement)

        paragraph.style.marginBottom = "10px"
        deleteElement.style.width = "40px"
        listElement.style.fontSize = "18px"
    
        document.getElementById("writeTODO").appendChild(paragraph)
        document.getElementById('inputElement').value = ""
    }
    

    deleteElement.addEventListener('click', function deleteTodo() {
        document.getElementById("writeTODO").removeChild(paragraph)
    })

    document.getElementById("clearList").addEventListener('click', function clearList() {
        document.getElementById("writeTODO").innerHTML = ""
    })
})