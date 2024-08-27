alert('Boas vindas ao Jogo do Número Secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

// Enquanto chute não for igual ao número secreto --> escolher um número
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break; //para o loop
    } else {
        if (chute > numeroSecreto) { // Se o chute for maior que o número secreto
            alert(`O número secreto é menor que ${chute}`);
        } else { // Se o chute for menor
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

// A quantidade de tentativas é maior que 1? Se sim, escrever "tentativas", se não, escrever "tentativa"
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
