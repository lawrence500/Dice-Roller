
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');

const diceRow1 = document.getElementById('diceRow1');
const diceRow2 = document.getElementById('diceRow2');
const diceRow3 = document.getElementById('diceRow3');

const dicebox = document.getElementById('dicebox');

const rollDice2 = document.getElementById('rollDice2');

const rolled = document.getElementById('rolled')

const min = 1;
const max = 6;
let diceNumber = Math.floor(Math.random() * 6);

rollDice2.onclick = function () {
  diceNumber = Math.floor(Math.random() * max) + min;
  if (diceNumber == 6) {
    diceRow1.style.justifyContent = 'space-between'
    diceRow2.style.justifyContent = 'space-between'
    diceRow3.style.justifyContent = 'space-between'
    number1.style.display = 'block'
    number2.style.display = 'block'
    number3.style.display = 'block'
    number4.style.display = 'block'
    number5.style.display = 'block'
    number6.style.display = 'block'
  }
  else {
    number1.style.display = 'none'
    number2.style.display = 'none'
    number3.style.display = 'none'
    number4.style.display = 'none'
    number5.style.display = 'none'
    number6.style.display = 'none'
  }
  if (diceNumber == 5) {
    diceRow1.style.justifyContent = 'space-between'
    diceRow2.style.justifyContent = 'center'
    diceRow3.style.justifyContent = 'space-between'
    number1.style.display = 'block'
    number2.style.display = 'block'
    number3.style.display = 'block'
    number5.style.display = 'block'
    number6.style.display = 'block'
  }
  if (diceNumber == 4) {
    diceRow1.style.justifyContent = 'space-between'
    diceRow3.style.justifyContent = 'space-between'
    number1.style.display = 'block'
    number2.style.display = 'block'
    number5.style.display = 'block'
    number6.style.display = 'block'
  }
  if (diceNumber == 3) {
    diceRow1.style.justifyContent = 'end'
    diceRow2.style.justifyContent = 'center'
    diceRow3.style.justifyContent = 'start'
    number2.style.display = 'block'
    number3.style.display = 'block'
    number5.style.display = 'block'
  }
  if (diceNumber == 2) {
    diceRow1.style.justifyContent = 'start'
    diceRow3.style.justifyContent = 'end'
    number1.style.display = 'block'
    number6.style.display = 'block'
  }
  if (diceNumber == 1) {
    diceRow2.style.justifyContent = 'center'
    number3.style.display = 'block'
  }

  rolled.innerText = 'you rolled:' + diceNumber;
}