'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRollEl = document.querySelector('.btn--roll');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let currentScore =0;

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

btnRollEl.addEventListener('click',function(){
    const dice =Math.trunc((Math.random()*6)+1);
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if( dice !==1){
        currentScore += dice;
        current0El.textContent= currentScore;
    }
    else{
        //Switch to next player
    }
})

