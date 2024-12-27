const dadoGiocatore = Math.floor(Math.random() * 6) + 1;
console.log(`Il tuo lancio del dado: ${dadoGiocatore}`);

const dadoComputer = Math.floor(Math.random() * 6) + 1;
console.log(`Lancio del dado del computer: ${dadoComputer}`);

if (dadoGiocatore > dadoComputer) {
  console.log("Complimenti! Hai vinto!");
} else if (dadoGiocatore < dadoComputer) {
  console.log("Peccato, ha vinto il computer.");
} else {
  console.log("È un pareggio!");
}