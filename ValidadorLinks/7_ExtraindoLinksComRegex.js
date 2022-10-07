const chalk = require("chalk");
const fs = require("fs");

const texto =
  "São geralmente recuperados a partir de um objeto \
[FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) \
que é retornado como resultado da seleção, pelo usuário, de arquivos \
através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), \
a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) \
utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` \
em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). \
Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local \
sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) \
para mais informações.)";

function extraiLink(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm; // expressao regular (deve ser colocada entre barres)
  // o gm no final (global, multi-linha) pega todos os padroes do texto
  // const linksExtraidos = texto.match(regex); // metodo de string match devolve um array de strings

  const arrayResultados = [];
  let temp;

  // enquanto (a variavel tem que recebe o regex) for diferente de nulo
  // adiciona, no array, o indice 1 (chave) e o indice 2 (url) do regex
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] }); // obs - para montar o dicionario, a chave do mesmo deve ser envolvida por colchetes
  }

  // const linksExtraidos = regex.exec(texto);  // retorna um array com informacoes, entre elas a descricao e a url

  console.log(arrayResultados);
}

function lancaErro(erro) {
  throw new Error(chalk.red(erro.code, "arquivo nao encontrado"));
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";

  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.greenBright(texto));
  } catch (erro) {
    lancaErro(erro);
  } finally {
    console.log(chalk.yellowBright("Operacao concluida."));
  }
}

pegaArquivo("./Arquivos/texto1.md");
extraiLink(texto);
