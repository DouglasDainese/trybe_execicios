const sum = require('./sum.js');

describe (`Teste se a função realiza as somas corretamente`, () =>{
    it(`Somar dois valores`, () =>{
        expect(sum(4, 5)).toBe(9);
    })
})