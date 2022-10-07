const chalk = require('chalk');
const pegaLinks = require('./index.js');
const validaURLs = require('./ValidadorHTTP');   

const caminho = process.argv;   

async function processaTexto(caminhoDoArquivo) {
    
    const resultado = await pegaLinks(caminhoDoArquivo[2]);   // indice 2 do process.argv (./Arquivos/texto1.md)

    if(caminho[3] === 'validar') {   // indice 3 do process.argv (digitacao de 'validar' no terminal)

        console.log(chalk.yellowBright('Links Validados'), validaURLs(resultado));
    }
    else {
        console.log(chalk.yellowBright('Lista de Links'), resultado); 
    }

}
    // obs como a funcao pegaLinks retorna uma promise, a funcao processaTexto deve ser assincrona

processaTexto(caminho);   // No console  (node ./cli.js ./Arquivos/texto1.md "validar")