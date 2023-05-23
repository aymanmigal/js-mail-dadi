const giocatore = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;

console.log(`Giocatore: ${giocatore}, Computer: ${computer}`);

if(giocatore > computer) {
    console.log('GIOCATORE VINCE')
}
else if(giocatore < computer) {
    console.log('COMPUTER VINCE')
}
else {
    console.log('PARI')
}