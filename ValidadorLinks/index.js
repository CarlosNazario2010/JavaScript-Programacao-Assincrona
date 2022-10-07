const chalk = require('chalk');
const fs = require('fs');


function extraiLink(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm; 
    const arrayResultados = [];
    let temp;

    while((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]] : temp[2] })  
    }

    return arrayResultados.length === 0 ? 
        chalk.redBright('nao ha links na pagina') : arrayResultados;

    // obs - retorno é uma condicional (chamado ternario) =>> se o array estiver vazio retorna a string
    // se nao retorna o arrayDeResultados
}


function lancaErro() {
    throw new Error(chalk.redBright('arquivo nao encontrado'));
}


async function pegaLinks(caminhoDoArquivo) {    
    const encoding = 'utf-8';
    
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);   
        return extraiLink(texto); 
    }
    catch(erro) {                   
        lancaErro(erro);            
    }
    finally {
        console.log(chalk.yellowBright('Operacao concluida.'));
    }
}


// pegaLinks('./Arquivos/texto1.md');

/*  1 - pegaLinks recebe o caminho do arquivo .md
    2 - pegalinks é uma funcao assincrona que recebe a funcao extraiLink, recebendo o arquivo .md como parametro
    3 - extraiLink recebe uma expressao regular que percorre o arquivo .md identificando o identificador e a url 
    4 - apos identifica-la, o objeto chave:url é adicionado no array de resultados que é o retorno da funcao extraiLink 
    5 - por fim, a funcao pegaLinks exibe o objeto retornado pela funcao extraiLink  */ 

module.exports = pegaLinks;