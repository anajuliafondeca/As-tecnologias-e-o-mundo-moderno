// Guarda o estado atual (true = Antes, false = Hoje)
let estaMostrandoAntes = true;

// Guarda os URLs das imagens para facilitar
const imagemAntes = "httpsa://cdn.pixabay.com/photo/2017/07/31/11/21/map-2557169_1280.jpg";
const imagemDepois = "httpsa://cdn.pixabay.com/photo/2016/02/19/11/29/navigation-1209797_1280.jpg";

// A função que o botão chama
function mudarVisualizacao() {
    
    // Pega os elementos do HTML pelo ID
    const titulo = document.getElementById("comparacao-titulo");
    const imagem = document.getElementById("comparacao-imagem");
    const botao = document.querySelector(".btn-futurista");

    // Verifica o estado atual
    if (estaMostrandoAntes) {
        // Se estava mostrando "Antes", muda para "Hoje"
        titulo.textContent = "Hoje";
        imagem.src = imagemDepois; // Troca a imagem
        imagem.alt = "Tela de GPS";
        botao.textContent = "Voltar ao Passado";
    } else {
        // Se estava mostrando "Hoje", muda de volta para "Antes"
        titulo.textContent = "Antigamente";
        imagem.src = imagemAntes; // Troca a imagem de volta
        imagem.alt = "Mapa de papel antigo";
        botao.textContent = "Ver a Evolução";
    }

    // Inverte o estado para o próximo clique
    estaMostrandoAntes = !estaMostrandoAntes;
}