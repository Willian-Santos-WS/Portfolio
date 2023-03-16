const header = document.querySelector('header');
const openButton = document.querySelector('#open-header');

const sections = {
    sobre: document.getElementById('sobre').offsetTop,

    habilidades: document.getElementById('habilidades').offsetTop,

    projetos: document.getElementById('projetos').offsetTop
}

const openHeader = () => {
    header.style.display = 'flex';
    openButton.style.display = 'none';
}

addEventListener('scroll', () => {

})