// Abrir e fechar menu

let menuOpener = document.querySelector('.menu-opener');
let nav = document.querySelector('header nav');

menuOpener.addEventListener('click', () => {
    if (nav.classList.contains('opened')) {
        nav.classList.remove('opened');
        menuOpener.querySelector('.close-icon').style.display = 'none';
        menuOpener.querySelector('.hamburger-icon').style.display = 'flex';
    } else {
        nav.classList.add('opened');
        menuOpener.querySelector('.close-icon').style.display = 'flex';
        menuOpener.querySelector('.hamburger-icon').style.display = 'none';
    }
});

// Depoimentos/Testimonials

//Lista de objetos
let testimonials = [
    { quote: '"Mais do que nunca, os animais de estimação são tratados como membros da família."', origin: 'cbs.svg' },
    { quote: '"DogDev é um serviço de entrega direto ao consumidor, preparado na hora com ingredientes 100% reais. Ingredientes que os humanos reconheceriam."', origin: 'forbes.svg' },
    { quote: '"DogDev usa ingredientes simples e limpos em seus pratos."', origin: 'fox.svg' },
    { quote: '"Vejo você como um verdadeiro herói"', origin: 'sharktank.svg' }
];
//Pegando as areas das frases e icones
let testimonialQuote = document.querySelector('.testimonials .quote');
let testimonialIcons = document.querySelector('.testimonials .icons');

//Loop para monstar icones
for (let tindex in testimonials) {
    let img = document.createElement('img'); //Cria elemento IMG
    img.setAttribute('src', './assets/images/' + testimonials[parseInt(tindex)].origin); //Define a imagem no SRC do IMG
    img.style.cursor = 'pointer'; //Ativer pointer no IMG
    img.addEventListener('click', () => {
        filler(parseInt(tindex));
    });
    testimonialIcons.appendChild(img); //Coloca essa IMG dentro do testimonialIcons (linha 29)
}

//Selecionar Imagem/Frase 
let currentTestimonial = 0;
let timer;

const filler = (index) => {
    clearTimeout(timer); //Para contagem
    currentTestimonial = index;
    testimonialQuote.innerHTML = testimonials[currentTestimonial].quote; //Preenche a frase
    let imgs = testimonialIcons.querySelectorAll('img'); //Pega todas as imagens
    //Deixa as imagens nao selecionadas opacas
    for (let img of imgs) {
        img.style.opacity = 0.2
    }
    imgs[currentTestimonial].style.opacity = 1; //Deixa imagem selecionada
    timer = setTimeout(nextTestimonial, 3000) //Inicia o timer novamente
}

//Carrossel
const nextTestimonial = () => {
    if (testimonials[currentTestimonial + 1]) {
        filler(currentTestimonial + 1);
    } else {
        filler(0);
    }
}

nextTestimonial();

// FAQ
let currentFaq = 0; //Faq aberto
let faqItems = document.querySelectorAll('.faq .accordion .item'); //Lista de Faqs

//Loop para adicionar evento de clique em todos os Faqs
faqItems.forEach((el, index) => {
    el.querySelector('.title').addEventListener('click', () => setFaq(index));
});

//Função responsavel por fechar todos os Faqs e abrir somente o que foi clicado
const setFaq = (index) => {
    currentFaq = index; //Recebe o index que foi clicado

    //Loop para fechar Faq aberto
    if (faqItems[currentFaq].classList.contains('opened')) {
        faqItems[currentFaq].classList.remove('opened');
        return;
    }

    for (let item of faqItems) {
        item.classList.remove('opened');
    }

    //Adicionando opened para abrir o Faq
    faqItems[currentFaq].classList.add('opened');
}