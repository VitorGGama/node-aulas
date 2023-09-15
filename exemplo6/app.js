import express from 'express';

//armazenando o express em uma  variavel. Ao invés de chamaer express().get, usaremos aa.get; 
const app = express();

//Configurar as rotas de acesso 

//Raiz
app.get('/', (req, res)=> {
    //re
    res.render('paginas/index')
    
});

app.get('/sobre', (req, res)=> {
    //re
    res.render('paginas/sobre')
    
});

app.get('/contato', (req, res)=> {
    //re
    res.render('paginas/contato')
    
});




//Iniciar o servidor e escolher a porta 
app.listen(3000, ()=>{
    console.log('Servidor ExpressJs rodando normalmente.')
});

//configurar a view com EJS
app.set('view engine', 'ejs');


