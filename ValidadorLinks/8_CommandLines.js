const pegaLinks = require("./index.js"); // importa a funcao pegalinks exportada pelo index.js

// cli - command line interface   ==>> passa para a linha de comando a responsabilidade de passar o caminho do arquivo .md

//   0      1             2              3 ou mais
const caminho = process.argv; // devolve um array do path. No nosso caso ->> node .\cli.js .\Arquivos\texto1.md xxxxxxxxxxxxxxx
// indice 0 = indice do node,
// indice 1 =  indice do arquivo atual. No nosso caso ->> cli.js
// indice 2 = o que for digitado no terminal (no caso o caminho do arquivo .md)
// indice 3... = o que for mais for passado na linha de comando do terminal. No nosso caso, nao foi passado mais nada

console.log(pegaLinks(caminho[2])); // no terminal: node .\cli.js .\Arquivos\texto1.md
