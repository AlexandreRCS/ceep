const novaTarefa = document.querySelector('[data-form-button]');
const criaTarefa = (event)=> {
    event.preventDefault();
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = ` <p class="content">${valor}</p> <br>`;
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(botaoConcluir())
    lista.appendChild(tarefa);

    input.value = '';

}

novaTarefa.addEventListener('click', criaTarefa)