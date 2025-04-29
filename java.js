// Função para abrir o lightbox com a imagem clicada
function abrirLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const imagemExpandida = document.getElementById("imagem-expandida");
    imagemExpandida.src = img.src; // Copia a imagem clicada para o lightbox
    lightbox.style.display = "flex"; // Mostra o lightbox
   }
   // Função para fechar o lightbox ao clicar fora da imagem
   function fecharLightbox() {
    document.getElementById("lightbox").style.display = "none";
   }