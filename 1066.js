/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift();};
*/

var par = 0; var impar = 0; var pos = 0; var neg = 0;
for (i = 0; i < 5; i++) {
    var N = parseInt(prompt("Diga o valor."));
    if (N % 2 === 0) {
        par++;
    } else {
        impar++;
    }
    if (N > 0) {
        pos++;
    } else if (N < 0) {
        neg++;
    }
}
console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${pos} valor(es) positivo(s)`);
console.log(`${neg} valor(es) negativo(s)`);