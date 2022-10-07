const chalk = require("chalk");
const fs = require("fs");

function lancaErro(erro) {
  throw new Error(chalk.red(erro.code, "arquivo nao encontrado"));
}

// funcao assincrona
function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  fs.promises // promise chama assincronicamente o arquivo
    .readFile(caminhoDoArquivo, encoding) // busca o caminho do arquivo
    .then((texto) => console.log(chalk.greenBright(texto))) // entao exibe o conteudo do arquivo (callback)
    .catch((erro) => lancaErro(erro)); // ou lanca o erro
}

pegaArquivo("./Arquivos/texto1.md");
