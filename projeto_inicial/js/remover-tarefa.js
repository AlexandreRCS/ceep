function remover(){
    const botao = document.createElement('button');
    botao.classList.add('delete-button')
    botao.innerText = 'Remover'
    botao.addEventListener('click',(event)=>{
        const excluir = event.target.parentNode
        excluir.remove()
    })

    return botao

}