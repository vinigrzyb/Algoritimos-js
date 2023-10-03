
const lista = require("./2/listaLivros");

function mergeSort(arr){
    if(arr.length > 1){
        const meio = Math.floor(arr.length / 2);
        const pt1 = mergeSort(arr.slice(0, meio));
        const pt2 = mergeSort(arr.slice(meio, arr.length));
        arr = ordena(pt1, pt2);
    }
    return arr;
}
function ordena(pt1, pt2){
    let posicaoAtualPt1 = 0;
    let posicaoAtualPt2 = 0;
    const resultado = [];

    while(posicaoAtualPt1 < pt1.length && posicaoAtualPt2 < pt2.length){
        let produtoAtualPt1 = pt1[posicaoAtualPt1];
        let produtoAtualPt2 = pt2[posicaoAtualPt2];
    }
    if(produtoAtualPt1.preco < produtoAtualPt2.preco){
        resultado.push(produtoAtualPt1);
        posicaoAtualPt1++
    }else{
        resultado.push(produtoAtualPt2);
        posicaoAtualPt2++;
    }
    return resultado.concat(posicaoAtualPt1 < pt1.length
       ? pt1.slice(posicaoAtualPt1)
       : pt2.slice(posicaoAtualPt2));
}
console.log(mergeSort(lista));