const produtos = [
  { id: 1, nome: "VILLA", preco: 400, imagem: "imagens/perfume1.jpg" },
  { id: 2, nome: "INUKA", preco: 1200, imagem: "imagens/perfume2.jpg" },
  { id: 3, nome: "BLACK", preco: 700, imagem: "imagens/perfume3.jpg" },
  { id: 4, nome: "DIOR", preco: 1500, imagem: "imagens/perfume4.jpg" },
  { id: 5, nome: "DIOR", preco: 800, imagem: "imagens/perfume5.jpg" },
  {id: 6, nome: "LORENA", preco: 500, imagem: "imagens/perfume6.jpg"},
  { id: 7, nome: "BRAND", preco: 750, imagem: "imagens/perfume7.jpg" },
  { id: 8, nome: "BRAND", preco: 1300, imagem: "imagens/perfume8.jpg" },
  { id: 9, nome: "DIOR", preco: 600, imagem: "imagens/perfume9.jpg" },
  {id: 10, nome: "CAROLINA", preco: 550, imagem: "imagens/perfume10.jpg"}


];

const listaProdutos = document.getElementById("listaProdutos");
const quantidadeSpan = document.getElementById("quantidade");
const totalSpan = document.getElementById("total");
const btnPagar = document.getElementById("btnPagar");
const metodoPagamento = document.getElementById("metodoPagamento");
const mensagemPagamento = document.getElementById("mensagemPagamento");
const formFeedback = document.getElementById("formFeedback");
const mensagemFeedback = document.getElementById("mensagemFeedback");

let carrinho = [];

function renderProdutos() {
  produtos.forEach(produto => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.preco} MT</p>
      <button onclick="adicionarCarrinho(${produto.id})">
        Adicionar ao Carrinho
      </button>
    `;

    listaProdutos.appendChild(div);
  });
}

function adicionarCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  console.log("Produto adicionado:", produto.nome);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  let total = 0;
  carrinho.forEach(item => total += item.preco);

  quantidadeSpan.textContent = carrinho.length;
  totalSpan.textContent = total;
}

btnPagar.addEventListener("click", () => {
  if (carrinho.length === 0) {
    mensagemPagamento.textContent = "Carrinho vazio.";
    return;
  }

  mensagemPagamento.textContent =
    "Pagamento confirmado via " + metodoPagamento.value;

  carrinho = [];
  atualizarCarrinho();
});

formFeedback.addEventListener("submit", (e) => {
  e.preventDefault();
  mensagemFeedback.textContent = "Mensagem enviada com sucesso!";
  formFeedback.reset();
});

renderProdutos();