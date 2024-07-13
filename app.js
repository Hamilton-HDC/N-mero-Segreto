alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 4;
let chute = prompt('Escolha um número entre 1 à 30')
console.log(numeroSecreto)


// Verificar se o chute é igual ao numeroSecreto
if (numeroSecreto == chute) {
   alert('Isso ai! Você descobriu o número secreto que era: ' + numeroSecreto)

} else {

   alert('Você errou! tente novamente :(')
}
