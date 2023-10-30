const listaLivros = require("./listaLivros");
const trocaLugar = require("./encontraMenores");

function quickSort(arr, esquerda, direita){
    if(arr.length > 1){
        let indiceAtual = particiona(arr, esquerda, direita);
        if(esquerda < indiceAtual - 1){
            quickSort(arr, esquerda, indiceAtual - 1);
        }
        if(indiceAtual < direita){
            quickSort(arr, indiceAtual, direita);
        }
    }

    return arr;
}
function particiona(arr, esquerda, direita){
    let pivo = arr[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda
    let atualDireita = 

    while(atualEsquerda <= atualDireita){
        while(arr[atualEsquerda].preco < pivo.preco){
            atualEsquerda++;
        }
        while(arr[atualDireita].preco > pivo.preco){
            atualDireita--;
        }
    }
    if(atualEsquerda <= atualDireita){
        trocaLugar(arr, atualEsquerda, atualDireita);
        atualEsquerda++;
        atualDireita--;
    }
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));
