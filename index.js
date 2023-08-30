const livros = require("./lista-livros");
let maisBarato = 0

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual] < livros[maisBarato]) {
        maisBarato = atual
    }
}
console.log(`O livro masi barato custa ${livros[maisBarato]}`);