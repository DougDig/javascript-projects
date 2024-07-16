function whoWon(player1,player2){
let choices = ['rock','paper','scissors'];
  if (!choices.includes(player1)){
    return 'Player 1 choice invalid';
  }
  
  if (!choices.includes(player2)){
    return 'Player 2 choice invalid';
  }

   if (player1 === player2){
     return 'TIE!';
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
   }
 
   return 'Player 1 wins!';
 }

 module.exports = whoWon;