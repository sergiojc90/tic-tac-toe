// Function for creating the gameboard
    function createGameboard(){
        let board = [
            "X","O","X",
            "X","O","X",
            "X","O","X"
        ];

        gameBoard = document.getElementById("gameBoard");

        board.forEach(element => {
            square = document.createElement("div");
            square.classList.add("square");
            square.textContent = element;


            gameBoard.appendChild(square);
        })
        
        
        return board;
    };

    createGameboard();

// Factory function for creating an objecto that controls the game flow
    function gameFlow(){

    };

// Factory function for creating the players
    function createPlayer(name){
        return {name};
    }
