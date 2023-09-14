

let url = "https://jsonplaceholder.typicode.com/posts/10"

//1- Conectando o endpoint da API (url)
fetch(url)
//2- Retornando a resposta com json
.then(response => response.json())
//3- Exibindo no console os dados obtidos na APi
.then(dados => console.log(dados));

