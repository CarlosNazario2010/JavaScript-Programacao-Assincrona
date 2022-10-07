const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

function manejaErros(erro) {
  throw new Error(erro.message);
}

async function checaStatus(arrayDeURLs) {
  try {
    const arrayDeStatus = await Promise.all(
      arrayDeURLs.map(async (url) => {
        const res = await fetch(url);
        return `${res.status} - ${res.statusText}`;
        // percorre o arrayDeURLs > roda uma promise para todos os arrayDeURLs >
        // com o map, substitui o item desse array pelo status do link (metodo status do objeto response criado com a funcao fetch)
      })
    );
    return arrayDeStatus; // por fim, retorna o arrayDeStatus dos links
  } catch (erro) {
    manejaErros(erro);
  }
}

function geraArraysDeURLs(arrayLinks) {
  for (let i = 0; i < arrayLinks.length; i++) {
    return arrayLinks.map((objetoLink) => Object.values(objetoLink).join()); // pega os values (as URLS) do objeto link (similar aos values dos dicts do python)
    //  { FileList : 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList' }
    // map substutui o objetoLink pelos values do objetoLink (no caso pega somente a url)
    // e join devolve o link em forma de string e nao de array
  }
}

async function validaURLs(arrayLinks) {
  const links = geraArraysDeURLs(arrayLinks);
  const statusLinks = await checaStatus(links);

  const resultados = arrayLinks.map((objeto, indice) => ({
    ...objeto,
    status: statusLinks[indice],
    // o metodo map permite receber mais de um argumento no primeiro parametro, mas deve ser envolvido por parenteses
    // as reticencias (...) detro do objeto sao o spread operator, que permite incluir novos conjuntos de chave/valor no arrayDeLinks
    // atentar que as chaves {} apos a arrow function criam o objeto e nao sao uma funcao. Por isso elas estao envolvidas por parenteses
    // dessa forma o outro conjunto chave/valor criado retorna o status e o valor do status do link
  }));

  return resultados;
}

module.exports = validaURLs;
