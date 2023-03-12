/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log(`Boas vindas ao BlackJack`)
    if(confirm("Quer iniciar uma nova rodada?")) { 
      confirm === "ok"  
      console.log(`Iniciar Jogo`) 
    } else { 
      confirm === "cancel"
      console.log(`O jogo acabou`)
    } 

const cartaUsuario = comprarCarta();
// Método que sorteia uma carta. Por exemplo, o rei de ouros 
const cartaComputador = comprarCarta();

console.log(cartaUsuario.texto) 
// imprime o texto da carta. Nesse caso: "K♦️" 
console.log(cartaComputador.texto)

console.log(cartaUsuario.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)
console.log(cartaComputador.valor) 

console.log(`Usuário - Cartas ${cartaUsuario.texto} - Pontuação ${cartaUsuario.valor}`)
console.log(`Computador - Cartas ${cartaComputador.texto} - Pontuação ${cartaComputador.valor}`)

if(cartaUsuario.valor > cartaComputador.valor)
    console.log(`O usuário ganhou`)
    else if(cartaUsuario.valor < cartaComputador.valor)
      console.log(`O computador ganhou`)
       else {
         console.log(`Empate!`)
      }


