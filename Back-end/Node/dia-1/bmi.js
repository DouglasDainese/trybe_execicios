const calculadoraImc = (weight, height) => {
 const imc =  (weight / (height * height)).toFixed(2);
 result = '';
 if (imc < 18.5) {
    result =  `Abaixo do peso (magreza)`
  } else if (imc >= 18.5 && imc <= 24.9) {
    result =  `Peso normal`
  } else if (imc >= 25 && imc <= 29.9) {
    result =  'Acima do peso (sobrepeso)'
  } else if (imc >= 30 && imc <= 34.9){
    result =  'Obesidade grau I'
  } else if (imc >= 35 && imc <= 39.9) {
    result =  'Obesidade grau II'
  } else {
    result =  'Obesidade grau IV e V'
  };
  return `Seu IMC é de ${imc} e você está com ${result}`
};


module.exports = {
  calculadoraImc
};