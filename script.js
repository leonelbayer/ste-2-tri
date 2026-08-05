// Conteúdo dinâmico em blocos de texto para o check-in emocional
const feedbackEmocional = {
    sobrecarregado: {
        titulo: "Pausa necessária",
        texto: "Quando a lista de tarefas parece infinita, reduza seu foco para o próximo passo mais simples. Escolha apenas UMA tarefa para os próximos 30 minutos e ignore temporariamente o restante. O excesso de demandas é um sinal para desacelerar, não para acelerar."
    },
    inquieto: {
        titulo: "Voltando ao corpo",
        texto: "A inquietação costuma ser energia mental acumulada. Tente fazer uma pausa física: levante-se, tome um copo de água devagar ou faça 5 respirações profundas inspirando pelo nariz e soltando o ar suavemente pela boca."
    },
    cansado: {
        titulo: "Respeite seu ritmo",
        texto: "O cansaço físico e mental não é uma falha, é um indicador biológico de limite. Permita-se ter momentos de descanso genuíno sem a obrigação de ser produtivo. Desligar-se também faz parte da jornada."
    },
    tranquilo: {
        titulo: "Cultive a estabilidade",
        texto: "Momentos de tranquilidade são ótimos para fortalecer a mente. Aproveite este estado para ler, praticar uma atividade manual ou simplesmente saborear a paz do momento presente sem pressa."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.mood-btn');
    const responseContainer = document.getElementById('mood-response');
    const responseContent = document.getElementById('response-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const mood = button.getAttribute('data-mood');
            const data = feedbackEmocional[mood];

            if (data) {
                responseContent.innerHTML = `
                    <h4>${data.titulo}</h4>
                    <p>${data.texto}</p>
                `;
                responseContainer.classList.remove('hidden');
            }
        });
    });
});