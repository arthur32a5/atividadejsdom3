// Função para obter a data atual
function obterDataAtual() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1; // Os meses começam em 0 (janeiro) e vão até 11 (dezembro)
    const ano = dataAtual.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

// Função para atualizar a mensagem com base no horário
function atualizarMensagem() {
    const mensagem = document.getElementById("mensagem-inicial");
    const dataAtual = new Date();
    const hora = dataAtual.getHours();

    if (hora >= 6 && hora < 11) {
        mensagem.textContent = "Bom dia!";
    } else if (hora === 12) {
        mensagem.textContent = "Hora do Almoço!";
    } else if (hora >= 13 && hora <= 17) {
        mensagem.textContent = "Boa tarde!";
    } else if (hora >= 18 && hora <= 23) {
        mensagem.textContent = "Boa noite!";
    } else if (hora === 0) {
        mensagem.textContent = "Não disse que ia dormir mais cedo hoje?";
    } else if (hora >= 1 && hora <= 5) {
        mensagem.textContent = "Não está na Netflix, está?";
    }
}

// Chame a função para atualizar a mensagem com base no horário
atualizarMensagem();

// Adicione a data atual após a mensagem
const mensagem = document.getElementById("mensagem-inicial");
const dataAtual = obterDataAtual();
const dataElement = document.createElement("p");
dataElement.textContent = `Hoje é dia ${dataAtual}`;
mensagem.appendChild(dataElement);
