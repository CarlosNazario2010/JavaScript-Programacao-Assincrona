function geraArraysDeURLs(arrayLinks) {

    for (let i = 0; i < arrayLinks.length; i++) {
        return arrayLinks.map(objetoLink => Object.values(objetoLink).join());   // pega os values (as URLS) do objeto link (similar aos values dos dicts do python)
        //  { FileList : 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList' }
        // map mapeia cada um dos objetos no arrayDeLinks e join devolve o link em forma de strring e nao de array          
    }
}


function validaURLs(arrayLinks) {
    return geraArraysDeURLs(arrayLinks);
}

module.exports = validaURLs;