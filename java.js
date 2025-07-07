//alteradores da aplicação
function add () {
    const input = document.querySelector("input")
    const tarefa = input.value
    tarefas.push(tarefa)
    input.value = ""
    render()
}

//detectar enter para funcionar
document.getElementById("input-box").addEventListener("keydown", function(event) {
    console.log(event.key)
    if (event.key === "Enter") {
        add();
    }
});

//mostrar na tela
function render () {
    const ul = document.querySelector("ul")
    ul.innerHTML = null

    tarefas.forEach(function (tarefa) {
        const li = document.createElement("li")
        li.innerText = tarefa
        ul.appendChild(li)
    })

}

//iniciar
render()