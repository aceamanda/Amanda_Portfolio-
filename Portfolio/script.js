const inicio = document.querySelector('.Inicio');
const contatopag = document.querySelector('.contatoBnt');
const voltar = document.querySelector('.voltarBnt');

contatopag.addEventListener('click', ()=> {
    inicio.classList.add('active');
});

voltar.addEventListener('click', ()=> {
    inicio.classList.remove('active');
});
