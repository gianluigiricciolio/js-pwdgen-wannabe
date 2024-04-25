
const firstName = prompt('Inserisci il tuo nome');

const lastName = prompt('Inserisci il tuo cognome');

const favColour = prompt('Inserisci il tuo colore preferito');


// Lotteria RNG
const myNumber = Math.round(100*Math.random());

const myPassword = firstName + lastName + favColour + myNumber;

const htmlPw = document.getElementById('password');
htmlPw.innerHTML = myPassword;






console.log('main.js correttamente incluso');