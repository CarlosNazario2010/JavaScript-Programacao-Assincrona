//  O nome index.test.js é proposital como nome do arquivo (deve ser trocado
//      caso se queira usar esse modulo fora dos exercicios) e faz parte da
//      biblioteca dos jest.
//  No nosso caos informa que serao testados funcoes do arquivo index.js

const pegaLinks = require("../LibVarredoraDeLinks/index.js");

const arrayTeste = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  }, // objeto para teste
];

describe("pegaLinks::", () => {
  it("deve ser uma funcao", () => {
    expect(typeof pegaLinks).toBe("function"); // verifica se pegaLinks é uma funcao
  });
  // verifica se pegaLinkes retorna um array de links
  it("deve retornar um array de resultados", async () => {
    const resultado = await pegaLinks(
      "C:/Users/elaine/Desktop/NodeJS_Projects - Copia/testes/arquivos/textoComLinks.md"
    );
    expect(resultado).toEqual(arrayTeste);
  });
  // verifica quando nao ha links para o arquivo passado
  it("deve retornar que nao ha links no arquivo", async () => {
    const resultado = await pegaLinks(
      "C:/Users/elaine/Desktop/NodeJS_Projects - Copia/testes/arquivos/textoSemLinks.md"
    );
    const match = chalk.redBright("nao ha links na pagina");
    expect(resultado).toBe(match);
  });
});

//  obs - os metodos > test, expect, describe, it, toBe e toEqual <
//  sao proprios do jest

/*   Resposta do Terminal >>>

> nodejs_projects@1.0.0 test
> jest ./test

  console.log
    Operacao concluida.

      at pegaLinks (index.js:38:17)

  console.log
    Operacao concluida.

      at pegaLinks (index.js:38:17)

 PASS  testes/index.test.js
  pegaLinks::
    √ deve ser uma funcao (3 ms)
    √ deve retornar um array de resultados (52 ms)
    √ deve retornar que nao ha links no arquivo (5 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.478 s, estimated 2 s
Ran all test suites matching /.\\test/i     */
