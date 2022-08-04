const buttonenviar = document.getElementById('btnsend');
buttonenviar.addEventListener('click', exibirNome);
const boxName = document.getElementById('name');
console.log(boxName.value);

function exibirNome(event) {
    event.preventDefault();
alert(boxName.value);
}