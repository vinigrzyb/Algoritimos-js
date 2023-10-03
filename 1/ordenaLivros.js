const livros = require('./1/lista-livros');

function maisBarato(lista){
    for(let i = 0; i < lista.length; i++){
        let atual = i;
        while(atual > 0 && lista[atual].preco < lista[atual - 1].preco){
            let itemAtual = lista[atual];
            let itemAnterior = lista[atual - 1];
            lista[atual] = itemAnterior;
            lista[atual - 1] = itemAtual;
            atual--;
        }
    }
    console.log(lista);
}
maisBarato(livros);

function maisCaro(lista){
    for(let i = 0; i < lista.length; i++){
        let atual = i;
        while(atual > 0 && lista[atual].preco > lista[atual - 1].preco){
            let itemAtual = lista[atual];
            let itemAnterior = lista[atual - 1];
            lista[atual] = itemAnterior;
            lista[atual - 1] = itemAtual;
            atual--;
        }
    }
    console.log(lista);
}
maisCaro(livros);

function maisVendido(lista){
    for(let i = 0; i < lista.length; i++){
        let atual = i;
        while(atual > 0 && lista[atual].vendas > lista[atual - 1].vendas){
            let itemAtual = lista[atual];
            let itemAnterior = lista[atual - 1];
            lista[atual] = itemAnterior;
            lista[atual - 1] = itemAtual;
            atual--;
        }
    }
    console.log(lista);
}
maisVendido(livros);
