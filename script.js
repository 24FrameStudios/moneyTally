const userPennies = document.getElementById('pennies');
const userNickels = document.getElementById('nickels');
const userDimes = document.getElementById('dimes');
const userQuarters = document.getElementById('quarters');
const userHalfDollars = document.getElementById('half-dollars');

const userOnes = document.getElementById('ones');
const userFives = document.getElementById('fives');
const userTens = document.getElementById('tens');
const userTwenties = document.getElementById('twenties');
const userFifties = document.getElementById('fifties');
const userHundreds = document.getElementById('hundreds');

const submitButton = document.getElementById('calc-button');
const resetButton = document.getElementById('reset-button');
const resultContainer = document.querySelector('.result');


submitButton.addEventListener('click', () => {
    let totalPennies = userPennies.value * 0.01;
    let totalNickels = userNickels.value * 0.05;
    let totalDimes = userDimes.value * 0.10;
    let totalQuarters = userQuarters.value * 0.25;
    let totalHalfDollars = userHalfDollars.value * 0.50;

    let totalOnes = userOnes.value * 1;
    let totalFives = userFives.value * 5;
    let totalTens = userTens.value * 10;
    let totalTwenties = userTwenties.value * 20;
    let totalFifties = userFifties.value * 50;
    let totalHundreds = userHundreds.value * 100;


    console.log(totalOnes);
    
    let userTotals = [totalPennies, totalNickels, totalDimes, totalQuarters, totalHalfDollars, totalOnes, totalFives, totalTens, totalTwenties, totalFifties, totalHundreds];
    
    let grandTotal = 0.00;

    for (let i = 0; i < userTotals.length; i++) {
        grandTotal += userTotals[i];
    }

    grandTotal = Number(grandTotal).toFixed(2);

    resultContainer.innerText = grandTotal;
})

resetButton.addEventListener('click', () => {
    location.reload();
})