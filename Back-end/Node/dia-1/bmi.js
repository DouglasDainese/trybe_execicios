const calculadoraImc = (weight, height) => {
 const result =  (weight / (height * height)).toFixed(2);
 return result;
};


module.exports = {
  calculadoraImc
};