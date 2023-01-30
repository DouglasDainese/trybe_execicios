const { calculadoraImc } = require('./bmi');
const readline = require('readline-sync');

const peso = readline.questionInt(`What’s your weight?`);
const altura = readline.questionFloat(`What’s your height?`);

console.log(calculadoraImc(peso, altura));