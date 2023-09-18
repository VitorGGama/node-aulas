import express from 'express';

//armazenando o express em uma  variavel. Ao invés de chamaer express().get, usaremos aa.get; 
const app = express();

//Configurar as rotas de acesso 

//Raiz
//index
app.get('/', (req, res)=> {
    //res.send('Bem vindo ao servidor ExpressJs. Se não fosse o NPX...')
    const bandas = ['Ira', 'Legião Urbana', 'Pato Fu','Kid Abelha', 'Titãs', 'Engenheiros do Hawai'];    
    res.render('paginas/index', {bandas});    
});

//sobre
app.get('/sobre', (req, res)=> {
    //re
    res.render('paginas/sobre')
    
});

//contato
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


