const listaLivros = require("./listaLivros");
function encontraMenores(pivo, arr){
    let menores = 0;
    for(let atual = 0; atual < arr.length; atual++){
        let produtoAtual = arr[atual];
        if(produtoAtual.preco < pivo.preco){
            menores++;
        }
    }
    trocaLugar(arr, arr.indexOf(pivo), menores);
    return arr;
}
function trocaLugar(arr, de, para){
    let elem1 = arr[de];
    let elem2 = arr[para];

    arr[para] = elem1;
    arr[de] = elem2;
}

function divide(arr){
    let pivo = arr[Math.floor(arr.length / 2)];
    console.log(pivo);
    encontraMenores(pivo, arr);
    let valoresMenores = 0;

    for(let analisando = 0; analisando < arr.length; analisando++){
        let atual = arr[analisando];
        if(atual.preco <= pivo.preco && atual !== pivo){
            trocaLugar(arr, analisando, valoresMenores);
            valoresMenores++
        }
    }
    return arr;
}
console.log(divide(listaLivros));
module.exports = trocaLugar;
// console.log(encontraMenores(listaLivros[2], listaLivros));