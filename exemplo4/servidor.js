import http from 'http';  //estamos inportando o modulo nativo "http".

//costante que monitora requisiçoes e recebe dois parâmetros req(requisição) e res(resposta)
const monitorRequisicao = (req, res) =>{  // arrow function = >

    //Configurando o cabeçalho de resposta para trabalhar com arquivos HTML charset-8 
    res.writeHead(200, {"Content-type": "text/html; charset=utf8"});

    //Avaliando cada requisição (a partir do link)
    switch(req.url){
        case '/':
            res.end('servidor Node rodando no navegador.')
            //exibir index.html
        break;
        
        case '/sobre':
            //exibir sobre.html

        break;
        
        default:
            //exibir 404.html

        break;
    }
};

//criando o servidor http e indicando a função de requisições 
const servidor = http.createServer(monitorRequisicao);

//iniciando a escuta do servidor local na posta 8080
//servidor.listen(8080); //só esse trecho ja seria o suficiente, mas é importante rodar a mensagem para ter certeza que tudo deu certo.

servidor.listen(8080, () => {
    console.log("Servidor node rodando normalmente.");
})



