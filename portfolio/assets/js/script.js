// Liga/Desliga class opened do elemento header nav
document.querySelector('.menu-opener').addEventListener('click', () => {
    let nav = document.querySelector('header nav');
    nav.classList.toggle('opened');
});

// Função responsavel por rodar o slide
const toggleSlide = () => {
    // Seleciona todos os inputs com name=slide, se não achar nenhum para a execução
    const slides = document.querySelectorAll('input[name=slide]');
    if (slides.length === 0) return;

    // Pega o slide marcado, se nao tiver nenhum, marca o primeiro
    let current = document.querySelector('input[name=slide]:checked');
    if (!current) {
        current = document.querySelector('input[name=slide]');
        current.setAttribute('checked', true)
    }

    // Pega numero do slide
    let id = parseInt(current.getAttribute('id').split('-')[1]);
    if (id + 1 <= slides.length) {
        id++
    } else {
        id = 1;
    }

    // Dermarca todos e depois marca o certo
    for (let slide of slides) slide.removeAttribute('checked');
    document.querySelector(`#slide-${id}`).setAttribute('checked', true);
}

setInterval(toggleSlide, 5000);