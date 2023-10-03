const livros = require("./lista-livros");

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato;
}
module.exports = menorValor;

//faz entre n e 2n operações
//Crescimento linear 