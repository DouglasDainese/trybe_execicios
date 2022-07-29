 // COLOQUE SEU CÓDIGO AQUI
//  1  Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
       
let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';

document.body.appendChild (titulo);

// 2 🚀 Adicione a tag main com a classe main-content como filho da tag body

function criarTags (para1, para2) {
 let element = document.createElement(para1);
 let local = para2;
 para2.appendChild (element);
}
criarTags ('main', document.body);
let newElement = document.getElementsByTagName('main')[0];
newElement.classList.add('main-content');

// 3 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
criarTags ('section', document.querySelector('main'));
let classeSection = document.querySelector('section');
classeSection.classList.add('center-content');

// 4 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
criarTags ('p', document.querySelector('section'));
document.querySelector('p').innerText = 'Está dificil mais está fluindo!!!'

// 5 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
criarTags ('section', document.querySelector('main'));
const classSection2 = document.querySelector("main").children[1];
classSection2.classList.add('left-content');
// console.log (classSection2);

// 6 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
criarTags ('section', document.querySelector('main'));
const classSection3 = document.querySelector("main").children[2];
classSection3.classList.add('right-content');

// 7 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
function display_image(src) {
    var a = document.createElement("img");
    a.src = src;
    classSection2.appendChild(a);
}
display_image('https://picsum.photos/200');
document.querySelector('img').classList.add('small-image');
// resolução de exercicio com auxilio do site: https://www.delftstack.com/pt/howto/javascript/display-image-with-javascript/#:~:text=Usando%20JavaScript%2C%20podemos%20tornar%20nossa,imagem%20que%20demos%20a%20exibir. 

// 8 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// 9 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let i = 1; i <= 3; i +=1){
    criarTags ('h3', document.querySelector('main'));
};
//  Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// 10 🚀 Adicione a classe title na tag h1 criada;
    titulo.classList.add('title');

// 11 🚀 Adicione a classe description nas 3 tags h3 criadas;
for (let i = 0; i < document.querySelectorAll('h3').length ; i +=1) {
let classH3 = document.querySelectorAll('h3')[i];
classH3.classList.add('description');
}

// 12 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
// 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
// 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
// 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.