const novaTarefa = document.querySelector('[data-form-button]');
const criaTarefa = (event)=> {
    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value)
}

novaTarefa.addEventListener('click', criaTarefa)