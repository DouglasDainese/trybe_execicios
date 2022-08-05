const buttonenviar = document.getElementById('btnsend');
buttonenviar.addEventListener('click', exibirNome);
const boxName = document.getElementById('name');


function exibirNome(event) {
    event.preventDefault();
alert(boxName.value);
}