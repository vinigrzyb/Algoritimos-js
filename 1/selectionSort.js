const livros = require("./1/lista-livros");
const menorValor = require("./1/menorValor");

for(let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
} 
console.log(livros); 

// não recomendado, faz execuções demais, não é otimizado
// crescimento quadrático (n^2 execuções)