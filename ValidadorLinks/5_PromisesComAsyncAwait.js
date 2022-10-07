const chalk = require("chalk");
const fs = require("fs");

function lancaErro(erro) {
  throw new Error(chalk.red(erro.code, "arquivo nao encontrado"));
}

async function pegaArquivo(caminhoDoArquivo) {
  // async determina que a funcao é assincrona
  const encoding = "utf-8";

  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding); // await determina que parte da funcao é assincrona
    console.log(chalk.greenBright(texto));
  } catch (erro) {
    // tenta excutar o codigo, senao captura o erro
    lancaErro(erro); // o try deve sempre ser acompanhado do catch ,ou do finally, ou de ambos
  } finally {
    console.log(chalk.yellowBright("Operacao concluida."));
  }
}

pegaArquivo("./Arquivos/texto1.md");
