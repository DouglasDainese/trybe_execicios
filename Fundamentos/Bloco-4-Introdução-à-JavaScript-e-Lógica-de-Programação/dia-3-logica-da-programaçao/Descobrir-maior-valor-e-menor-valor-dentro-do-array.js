let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = "";
let menorPalavra = "";

let for1 = 0;
let for2 = 0;

for (i1 = 0; i1 < array.length; i1 += 1) {
   for1=array[i1].length;
      for (i2 = 0; i2 < array.length; i2 += 1) {
            for2=array[i2].length
            if (for1 > for2 && for1 > maiorPalavra.length) {
               maiorPalavra = array[i1];
            }
            if (for1 < for2 && for1 < menorPalavra.length && menorPalavra != 0 || menorPalavra == 0 ){
               menorPalavra = array [i1];
            }
      }
}
console.log ("A menor palavra é:" + menorPalavra );
console.log ("A maior palavra é: " + maiorPalavra);