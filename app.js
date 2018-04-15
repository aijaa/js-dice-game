/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,dice;

scores=[0,0]
roundScore=0;
activePlayer=0;

// console.log(dice)
document.querySelector('.dice').style.display='none';
document.querySelector('#current-'+0).textContent=roundScore
document.querySelector('#current-'+1).textContent=roundScore
document.querySelector('#score-'+0).textContent=roundScore
document.querySelector('#score-'+1).textContent=roundScore


function resetRound(){
    roundScore=0;
    console.log("RESET!!!")
    document.querySelector('#current-'+activePlayer).textContent=roundScore
    // activePlayer=((activePlayer+1)%2)
    playerSwitch()
}
function playerSwitch(){
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    activePlayer=((activePlayer+1)%2)
    // console.log(document.querySelector('.player-'+activePlayer+'-panel').classList.add('active')
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active')
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    dice=Math.floor(Math.random()*6+1)
    if(dice===1)
        resetRound();
    else{
        // document.querySelector('#current-'+activePlayer).textContent=dice
        document.querySelector('.dice').style.display='block'
        document.querySelector('.dice').src='dice-'+dice+'.png'
        roundScore+=dice
        document.querySelector('#current-'+activePlayer).textContent=roundScore

    }
    
})

function playerWon(){
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
    playerSwitch()
    document.getElementById('name-'+activePlayer).textContent+=" wins!"
}

document.querySelector('.btn-hold').addEventListener('click',function(){
    scores[activePlayer]+=roundScore
    roundScore=0
    if(scores[activePlayer]>=100)
        playerWon()
    document.querySelector('#current-'+activePlayer).textContent=roundScore
    playerSwitch()
    
})


