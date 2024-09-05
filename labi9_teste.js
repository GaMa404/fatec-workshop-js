/*const x, y = 5
x + 10

function somar () {
  r = x + y
}

console.log(somar())*/

let x = 5; // definindo x como let pois o valor será modificado 
const y = 5; // y continua sendo const pois o valor não será modificado
x += 10; // adicionando +10 ao próprio x (x = x + 10)

function somar() 
{
    r = x + y;
    return r; // retornando o resultado da operação para que apareça no console
}

console.log(somar());

// Leonardo Fernando Luzetti - 2° DSM