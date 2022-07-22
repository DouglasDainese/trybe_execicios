let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let num of numbers) {
    sum = sum + num;
}

let media =  sum / numbers.length;

let bigNumber = 0;
let primeiroFor=0;
let segundoFor=0;

for (let index2 = 0; index2 < numbers.length; index2 += 1) {

   primeiroFor = numbers[index2];

   for (let index = 0; index < numbers.length; index += 1) {
        
        segundoFor = numbers[index];

        if ( primeiroFor > segundoFor && primeiroFor > bigNumber) {
            bigNumber=primeiroFor;
           }
    }

}

console.log (bigNumber);