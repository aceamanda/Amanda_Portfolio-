const inicioContainer = document.querySelector('.Inicio');
const botaoParaContato = document.querySelector('.contatoBnt');
const botaoParaVoltar = document.querySelector('.voltarBnt');

botaoParaContato.addEventListener('click', () => {
    inicioContainer.classList.add('active');
});

botaoParaVoltar.addEventListener('click', () => {
    inicioContainer.classList.remove('active');
});
