// ordena duas listas ao mesmo tempo
const { edGalho, edFolha } = require("./2/arrays.js");

function JuntaListas(lista1, lista2){
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;
    
    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let ProdutoAtualLista2 = lista2[posicaoAtualLista2];
        console.log(`comparando ${produtoAtualLista1.titulo} com ${ProdutoAtualLista2.titulo}`);

        if(produtoAtualLista1.preco < ProdutoAtualLista2.preco){
            listaFinal[atual] = produtoAtualLista1;
            posicaoAtualLista1++
        }else{
            listaFinal[atual] = ProdutoAtualLista2;
            posicaoAtualLista2++;
        }
        atual++;
    }
    while(posicaoAtualLista1 < lista1.length){
        listaFinal[atual] = lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        atual++;
    }
    while(posicaoAtualLista2 < lista2.length){
        listaFinal[atual] = lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        atual++;
    }
    return listaFinal;
}
console.log(JuntaListas(edGalho, edFolha));
