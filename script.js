const campoDeQuestao = document.getElementById("question");
const campoResposta1 = document.getElementById("resposta1");
const campoResposta2 = document.getElementById("resposta2");
const campoResposta3 = document.getElementById("resposta3");
const campoResposta4 = document.getElementById("resposta4");

const perguntas = [
{
    question: "Qual o maior mamífero do mundo?",
    respostas: ["Vaca", "Elefante", "Baleia", "Cobra"],
    correta: 2
},
{
    question: "Qual o maior osso do corpo humano?",
    respostas: ["Rádio", "Crânio", "Tíbia", "Fêmur"],
    correta: 3
},
{
    question: "Qual a capital da Rússia?",
    respostas: ["Moscou", "Washington", "Ottawa", "Krasnoyarsk"],
    correta: 0
},
{
    question: "Qual o Maior planeta do Sistema Solar?",
    respostas: ["Saturno", "Urâno", "Júpiter", "Plutão"],
    correta: 2
},
{
    question: "Qual o valor de Pi?",
    respostas: ["22,2...", "13,9...", "3,14...", "1,15..."],
    correta: 2
}
]

let indiceAtual = 0;
let acertos = 0;

function mostrarQuestao(index) {
    const questao = perguntas[index];

    campoDeQuestao.innerText = questao.question;
    campoResposta1.innerText = questao.respostas[0];
    campoResposta2.innerText = questao.respostas[1];
    campoResposta3.innerText = questao.respostas[2];
    campoResposta4.innerText = questao.respostas[3];

    [campoResposta1, campoResposta2, campoResposta3, campoResposta4].forEach(btn => {
        btn.style.backgroundColor = "";
        btn.disable = false;
    });
}

campoResposta1.addEventListener("click", () => verificarResposta(0, campoResposta1));
campoResposta2.addEventListener("click", () => verificarResposta(1, campoResposta2));
campoResposta3.addEventListener("click", () => verificarResposta(2, campoResposta3));
campoResposta4.addEventListener("click", () => verificarResposta(3, campoResposta4));

function verificarResposta(respostaEscolhida, botaoClicado) {
    const questao = perguntas[indiceAtual];
    const botaoCorreto = [campoResposta1, campoResposta2, campoResposta3, campoResposta4][questao.correta];

    if (respostaEscolhida === questao.correta) {
        botaoClicado.style.backgroundColor = "green";
        acertos++;
    } else {
        botaoClicado.style.backgroundColor = "red";
        botaoCorreto.style.backgroundColor = "green";
    }

    [campoResposta1, campoResposta2, campoResposta3, campoResposta4].forEach(btn => btn.disabled = false)
    
    setTimeout(() => {
        indiceAtual++;

        if (indiceAtual < perguntas.length) {
            mostrarQuestao(indiceAtual);
        } else {
            campoDeQuestao.innerText = `quiz Finalizado! acertos: ${acertos}/${perguntas.length}`;
            [campoResposta1, campoResposta2, campoResposta3, campoResposta4].forEach(btn => btn.style.display = "none");
        }
    }, 1000);
}

mostrarQuestao(0);



