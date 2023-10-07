// ************MÉTODO SIMPLES****************
let titulo = document.createElement("h1");

titulo.id ='titulo';
titulo.innerText = 'Bem-vindo ao Meu Site (Método Simples)';
document.body.appendChild(titulo);

let produto = document.createElement('div');

let nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Nome do Fruta: Maçã';
document.body.appendChild(nomeProduto);

let descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Cor do Produto: Vermelha';
document.body.appendChild(descricaoProduto);

let precoProduto = document.createElement('p');
precoProduto.innerText = 'R$ 3,00';
document.body.appendChild(precoProduto);

let imagemProduto = document.createElement('img');
imagemProduto.src = 'img/apple.jpg'
document.body.appendChild(imagemProduto);

const linhaSeparadora = document.createElement('hr');
document.body.appendChild(linhaSeparadora);

// **************MÉTODO COMPLEXO**************
const arrayProdutos = [
    {
        produto: "Maçã",
        cor: "Fruta Vermelha",
        preco: 'R$ 3,00',
        imagemUrl: 'img/apple.jpg'
    },
    {
        produto: "Pera",
        cor: "Fruta Verde",
        preco: 'R$ 2,00',
        imagemUrl:'img/Pera.jpg'
    },
    {
        produto: "Melancia",
        cor: "Fruta Vermelha por dentro e verde por fora",
        preco: 'R$ 15,00',
        imagemUrl: 'img/melancia.jpg'
    }
];

let titulo1 = document.createElement("h1");
titulo1.innerText = 'Bem-Vindo ao Meu Site (Método Complexo)'
document.body.appendChild(titulo1);

for(let i = 0; i < arrayProdutos.length; i++) {

    const article = document.createElement('article')
    
    
    article.innerHTML = `<h2>Fruta: ${arrayProdutos[i].produto}</h2>
                              <p class = "cor">Cor: ${arrayProdutos[i].cor}</p>
                              <p class = "preco">Preço: ${arrayProdutos[i].preco}</p>
                              <img src = '${arrayProdutos[i].imagemUrl}'>`
    
    
    const main = document.querySelector('body') 
    main.appendChild(article)
    };
    