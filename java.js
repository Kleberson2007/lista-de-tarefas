function add() {
    const ul = document.querySelector("ul")
    const input = document.querySelector("imput")
    const tarefa = input.value
    
    const li = document.createElement("li")
    li.innerText = tarefa
    ul.appendChild(li)
    
    input.value = "a"
}
