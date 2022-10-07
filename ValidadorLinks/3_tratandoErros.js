const chalk = require("chalk");
const fs = require("fs");

// lanca um objeto erro com a mensagem em vermelho, caso ocorra algum problema em buscar o arquivo
function lancaErro(erro) {
  throw new Error(chalk.red(erro.code, "arquivo nao encontrado"));
}

function pegaArquivo(caminhoDoArquivo) {
  fs.readFile(caminhoDoArquivo, (encoding = "utf-8"), (erro, texto) => {
    if (erro) {
      lancaErro(erro);
    } // primeiro argumento do terceiro parametro lanca o erro em caso de ERRO.

    console.log(chalk.greenBright(texto));
  });
}

pegaArquivo("./Arquivos/texto1.md");
