import http from 'http';  //estamos inportando o modulo nativo "http".
import fs from 'fs/promises'; //file system : permite ao servidor acesso ao sistema de arquivos(módulo nativo)

//costante que monitora requisiçoes e recebe dois parâmetros req(requisição) e res(resposta)
const monitorRequisicao = (req, res) =>{  // arrow function = >

    //Configurando o cabeçalho de resposta para trabalhar com arquivos HTML charset-8 
    res.writeHead(200, {"Content-type": "text/html; charset=utf8"});

    //Avaliando cada requisição (a partir do link)
    switch(req.url){
        case '/':
            //fs faz o carregamento e leitura do arquivo
            fs.readFile('paginas/index.html')
            //depois de pronto, envia o conteudo como resposta
            .then(conteudo => res.end(conteudo));
            //exibir index.html
        break;
        
        case '/sobre':
            fs.readFile('paginas/sobre.html')
            .then(conteudo => res.end(conteudo));
            //exibir sobre.html

        break;
        
        default:
            res.writeHead(404);
            fs.readFile( 'paginas/404.html')
            .then(conteudo => res.end(conteudo));
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



