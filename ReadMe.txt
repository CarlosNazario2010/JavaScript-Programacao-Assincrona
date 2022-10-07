1 - npm (node package manager) install é similar ao pip install do Python
2 - a lib chalk permite colorir o texto do console
3 - a instalacao de modulos ou libs cria a pasta node_modules onde 
    ficam armazenados
4 - na pasta node_modules criamos o arquivo .gitignore, visto que nao 
    precisamos subir esses arquivos no repositorio. Esta pasta tende a 
    ficar gigante a medida que o projeto cresce
5 - no javaScript um codigo assincrono, ou seja, que deve ser processado e
    e dai entao devolvido, é chamado de promises. No nosso caso que é um 
    buscador de links em um texto markdown, dependendo do tamanho, pode 
    demorar um bom tempo para varrer todo o texto
6 - Aqui no nosso caso possui a estrutura promises.readFile.then.catch.
    Tambem existem, para processamento assincrono, as palavras chave:
    palavras-chave async e await. 
7 - Chamamos de programação assíncrona quando nosso código deve aguardar 
    certo processamento que não está em nosso controle acontecer, como 
    uma requisição externa, para aí então continuar com a execução da 
    tarefa seguinte.
8 - Trabalhando com front-end, vemos que uma boa parte do que ocorre no
    âmbito do navegador é event-driven. Ou seja, o código aguarda algum
    evento acontecer (por exemplo, o usuário clicar em um botão) antes de
    executar qualquer código
9 - Quando enviamos uma requisição de dados a uma API, temos uma promessa 
    de que estes dados irão chegar, mas enquanto isso não acontece, o sistema 
    deve continuar rodando. Se, por exemplo, o servidor estiver caído, essa 
    promessa de dados pode não se cumprir, e temos que lidar com isso. 
    As Promises trabalham neste contexto.
10 - Um exemplo de promises utilizando .then():

function getUser(userId) {
    const userData = fetch(`https://api.com/api/user/${userId}`)
        .then(response => response.json())
        .then(data => console.log(data.name))
}

getUser(1); // "Nome Sobrenome"

// O método fetch() recebe como parâmetro o endpoint e retorna uma Promise.

//Promises têm um método chamado .then(), que recebe uma função callback e 
//retorna um "objeto-promessa". Não é um retorno dos dados, é a promessa do retorno destes dados.

11 - A cadeia de funções fetch().then().then() não significa que há múltiplas 
    funções callbacks sendo usadas com o mesmo objeto de resposta, e sim que 
    cada instância de .then() retorna, por sua vez, um new Promise(). Toda a 
    cadeia é lida de forma síncrona na primeira execução, e em seguida 
    executada de forma assíncrona.

12 - No exemplo a seguir uma forma de tratar possiveis erros que podem ocorrer
    em caso de falha no retorno do objeto das promises, muito importante em 
    codigos assincronos:

function getUser(userId) {
    const userData = fetch(`https://api.com/api/user/${userId}`)
        .then(response => response.json())
        .then(data => console.log(data.name))
        .catch(error => console.log(error))
        .finally(() =>  /*{ aviso de fim de carregamento }*/)
}

getUser(1); // "Nome Sobrenome"

// Além do método .then() que recebe o objeto-Promise para ser resolvido, 
// o método .catch() retorna o erro no caso de rejeição da Promise. Além disso, 
// o último método, .finally(), é chamado independente de sucesso ou falha 
// da promessa e a função callback deste método é sempre executada por último 
// e pode ser usada, por exemplo, para fechar uma conexão ou dar algum aviso 
// de fim de carregamento.

13 - No caso de várias promessas que podem ser feitas paralelamente (por 
    exemplo, alguns dados em endpoints REST diferentes), pode-se utilizar 
    Promise.all:

const endpoints = [
    "https://api.com/api/user/1",
    "https://api.com/api/user/2",
    "https://api.com/api/user/3",
    "https://api.com/api/user/4"
]

const promises = endpoints.map(url => fetch(url).then(res => res.json()))

Promise.all(promises)
    .then(body => console.log(body.name))

14 - Exemplo de execucao de uma promise utilizando a funcao async/await

async function getUser(userId) {
    let response = await fetch(`https://api.com/api/user/${userId}`);
    let userData = await response.json();
    return userData.name;     // não é necessário o await no return
}

exibeDadosUser(await getUser(1))

// Para executar a função getUser(), já que ela retorna uma Promise, 
// pode-se usar await

15 - Lembrando que await só funciona se estiver dentro de outra função 
    async. Caso não esteja, você ainda pode usar .then() normalmente:

getUser(1).then(exibeDadosUser).catch(reject)

16 - Um exemplo clássico, para acessar um banco de dados com milhares de 
    registros e de forma sequencial. Para este caso, não queremos que todas 
    as requisições sejam feitas em paralelo, pois o excesso de requisições 
    simultâneas pode causar problemas de performance e até derrubar o serviço:

async function printCustomer(customerId){
 //lógica fictícia da função
}

async function getAndPrintAllCustomers() {
    const sql = 'SELECT id FROM customers'
    const customers = await db.query(sql, [])
    
    for (const customer of customers) {
        await printCustomer(customer.id)
    }
}

17 - Para fazer requisicoes em paralelo (sem aguardar a anterior para fazar
    a proxima), utlizando o async/wait, da mesma forma que o metodo .then()
    trabalha:

 return await Promise.all(customer.orders.map(async (orderId) => {
    const response = await fetch(`https://api.com/api/order/${orderId}`)
    const orderData = await response.json()
    return orderData.amount
 }))
}

18 - Requisicoes em paralelo sao mais rapidas, mas podem depender de mais 
    performance do sistema. Processamento de forma sequencial, da forma que
    o async/await trabalha, sao menos performaticas, mas consomem menos 
    recursos do computador

19 - Além do .then() e do async/await, o JavaScript também tem um método 
    construtor para resolver promessas, o Promise():

function promessa(bool) {
    const x = bool;
    return new Promise((resolve, reject) => {   // cria uma nova promessa a partir 
                                                // do construtor new Promise() e com 
                                                // dois parâmetros: resolve e reject
    
        if (!x) {
            reject(new Error("falha na promessa"));
        }
    
        resolve("sucesso na promessa");
    });
}

function exibeResposta(textoResult) {
    console.log(textoResult);
}

promessa(true)
    .then((texto) => exibeResposta(texto))

20 - Promessas podem ser concluídas de duas formas: 
    fulfilled (realizada, completa) ou rejected (rejeitada),

21 - Promessas que não estão fulfilled nem rejected estão 
    pending (pendentes de processamento). Após a finalização 
    do processamento, a promessa passa para o estado de settled 
    (concluída), independente do resultado. Apos o settled seu 
    resultado não se altera mais.

22 - Para ver mais de expressoes regulares, acessar o site 
    regex101.com. Ou ver os projetos em Python onde o regex foi visto
    com mais profundidade.

23 - Podemos clocar um script no package.json que roda o comando no terminal
    No nosso caso colocamos: "cli" : "node ./cli.js ./Arquivos/texto1.md"
    Dessa forma ao digitar no terminal: npm run cli rodaremos o que esta 
    no valor da chave.

24 - O package.json é uma especie de configurador do nosso projeto onde 
    se pode configurar opcoes


