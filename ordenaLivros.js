const livros = require("./lista-livros");

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;
    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}
for(let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}
console.log(livros);

function maiorValor(arrProdutos, posicaoInicial){
    let maisCaro = posicaoInicial;
    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco > arrProdutos[maisCaro].preco){
            maisCaro = atual;
        }
    }
    return maisCaro;
}
for(let atual = 0; atual < livros.length; atual++){
    let maior = maiorValor(livros, atual);

    let livroAtual = livros[atual];
    let livroMaiorPreco = livros[maior];

    livros[atual] = livroMaiorPreco;
    livros[maior] = livroAtual;
}
console.log(livros);