const buttonPort = document.getElementById('button-port') //seleciona o botão da section main através da manipulação do DOM
const buttonContato = document.getElementById("button-contato") //seleciona o botão da section main através da manipulação do DOM


buttonPort.addEventListener('click', () => { // dispara um evento ao clicar, fazendo com que a pagina vá para o elemento do DOM com o Id portifolio.
    window.location.href = "#portifolio"
});
