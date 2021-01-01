document.getElementById('btnElement').addEventListener('click', function addTodo() {
    const todoElement = document.getElementById('inputElement').value
    const text = document.createTextNode(todoElement)

    const listElement = document.createElement("li")
    const paragraph = document.createElement("p")
    const deleteElement = document.createElement("button")
    const space = document.createTextNode(" ")

    if(!todoElement) {
        alert("Invalid input!")
    }

    listElement.appendChild(text)
    listElement.appendChild(space)
    listElement.appendChild(deleteElement)
    deleteElement.innerHTML = "X"
    paragraph.appendChild(listElement)
    
    document.getElementById("writeTODO").appendChild(paragraph)
    document.getElementById('inputElement').value = ""

    deleteElement.addEventListener('click', function deleteTodo() {
        document.getElementById("writeTODO").removeChild(paragraph)
    })

    document.getElementById("clearList").addEventListener('click', function clearList() {
        document.getElementById("writeTODO").innerHTML = ""
    })
})