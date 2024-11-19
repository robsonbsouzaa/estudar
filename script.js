// Espera o DOM ser completamente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Selecionando os elementos
    const message = document.getElementById("message");
    const congratulationsMessage = document.getElementById("congratulations-message");
    const button = document.getElementById("action-button");

    // Verifica se os elementos existem
    if (!message || !congratulationsMessage || !button) {
        console.error("Erro: Um ou mais elementos não foram encontrados.");
        return; // Interrompe o código se algum dos elementos não foi encontrado
    }

    // Função para parar a animação de piscar
    function stopBlinking() {
        message.style.animation = 'none'; // Remove a animação de piscar
    }

    // Função para exibir a mensagem "Você conseguiu"
    function showCongratulations() {
        congratulationsMessage.style.display = 'block'; // Mostra a mensagem "Você conseguiu!"
    }

    // Adiciona o evento de clique para o botão
    button.addEventListener("click", function() {
        stopBlinking(); // Para a animação de piscar
        showCongratulations(); // Exibe a mensagem de sucesso
    });

    // Função para mover o botão para uma posição aleatória
    function moveButtonRandomly() {
        // Obter as dimensões da janela
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;

        // Gerar posições aleatórias dentro dos limites da tela
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Mover o botão para a nova posição
        button.style.left = randomX + "px";
        button.style.top = randomY + "px";
    }

    // Evento para mover o botão quando o mouse passar por cima
    button.addEventListener("mouseover", function() {
        moveButtonRandomly();
    });

    // Para evitar que o botão se mova imediatamente após o clique, adicionamos um pequeno delay.
    button.addEventListener("mousedown", function() {
        setTimeout(() => {
            moveButtonRandomly();
        }, 300); // Delay de 300ms
    });
});
