import express from "express";

const app = express();

// Configurando suporte ejs
app.set('view engine', 'ejs');

// Rotas

// Raiz da aplicação 
app.get('/', (req, res) => {
    res.render('paginas/index');
});

// Middleware para capturar 404
app.use((req, res, next) => {
    res.status(404).render('paginas/404');
});

app.listen(3000, () => {
    console.log('servidor rodando normalmente');
});