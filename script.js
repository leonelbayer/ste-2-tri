// Mensagens de acolhimento para a interatividade do check-in
const messages = {
    calmo: "Que excelente momento para cultivar a clareza. Aproveite esse estado para refletir, ler ou apenas desfrutar do presente.",
    ansioso: "Respire fundo. Inspire contando até 4, segure por 4 e solte devagar. O momento presente é o único que você precisa gerenciar agora.",
    cansado: "Lembre-se de que descansar também é produtivo. Permita-se fazer uma pausa curta sem culpa.",
    grato: "A gratidão amplia nosso bem-estar. Que tal refletir ou anotar três coisas simples pelas quais você se sente grato hoje?"
};

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.mood-btn');
    const responseContainer = document.getElementById('mood-response');
    const responseText = document.getElementById('response-text');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const mood = button.getAttribute('data-mood');
            
            if (messages[mood]) {
                responseText.textContent = messages[mood];
                responseContainer.classList.remove('hidden');
            }
        });
    });
});