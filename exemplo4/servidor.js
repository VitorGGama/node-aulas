import http from 'http';  //importando o módulo nativo http, mesmo sendo um módulo nativo, ainda assim precisamos do package.json

//criando uma função que vai monitorar as requisições e respostas do servidor, recebe dois parametros requisição e resposta.

const monitorRequisicao = (req, res) => {

    //configurando o cabeçalho da resposta para trabalhar com arquivos html e charset-utf-8
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf8"});

    //Avaliando cada requisição (a partir do link)
    switch (req.url){
        case '/':
            //o carregamento e leitura do index.html
        break;

        case '/':
            //o carrega
    }


}
                          