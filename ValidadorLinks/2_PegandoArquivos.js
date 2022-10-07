const chalk = require("chalk");
const fs = require("fs");

// obs: terceiro parametro do metodo readFile recebe dois argumentos(um para tratar o erro e outro para a execucao)
function pegaArquivo(caminhoDoArquivo) {
  // para ignorar o primeiro argumento se passa o '_'
  fs.readFile(caminhoDoArquivo, (encoding = "utf-8"), (_, texto) => {
    console.log(chalk.greenBright(texto));
  }); // a callback function do terceiro parametro do metodo readFile é uma arrow functiom
}

pegaArquivo("./Arquivos/texto1.md");
