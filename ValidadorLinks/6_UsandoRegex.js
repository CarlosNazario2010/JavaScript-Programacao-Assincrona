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
  const regex = /\[([^\]]*)\]\(https?:\/\/[^$#\s].[^\s]*\)/gm; // expressao regular (deve ser colocada entre barres)
  // o gm no final (global, multi-linha) pega todos os padroes do texto
  const linksExtraidos = texto.match(regex);

  console.log(linksExtraidos);
}

extraiLink(texto);
