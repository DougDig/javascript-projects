const whoWon = require('../RPS.js');

describe ('Rock Paper Scissors', function(){
   
    test ('should return invalid on invalid input', function() {
        let output = whoWon('butthole','rock');
        expect(output).toEqual('Player 1 choice invalid');
    })

    test ('should return tie when input matches', function(){
        let output = whoWon('rock','rock');
        expect(output).toEqual('TIE!');
    })

    test ('should return "Player 2 wins!" when paper beats rock', function(){
        let output = whoWon('rock','paper');
        expect(output).toEqual('Player 2 wins!');
    })

    test ('should return "Player 2 wins!" when scissors beats paper', function(){
        let output = whoWon('paper','scissors');
        expect(output).toEqual('Player 2 wins!');
    })

    test ('should return "Player 2 wins!" when rock beats scissors', function(){
        let output = whoWon('scissors','rock');
        expect(output).toEqual('Player 2 wins!');
    })
})
