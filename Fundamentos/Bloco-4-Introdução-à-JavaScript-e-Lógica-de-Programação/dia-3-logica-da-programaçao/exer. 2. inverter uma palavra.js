let word = 'Renata e Douglas';
 
let wordRevs = '';

for (let i = word.length -=1; i >= 0; i -= 1) {
   wordRevs += word[i];
}
console.log(wordRevs);
