function addnewtask() {
let list = document.getElementById("list");
let text = document.getElementById("task-name").value;

let listIten = document.createElement("Li")

const textElement = document.createTextNode(text)
listIten.appendChild(textElement)
list.appendChild(listIten)


}
