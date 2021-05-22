// Function for creating the gameboard
    function createGameboard(){
        let board = [
            " ","O","X",
            "X","O","X",
            "X","O","X"
        ];

        gameBoard = document.getElementById("gameBoard");

        let index = 0;
        board.forEach(element => {

            square = document.createElement("div");
            square.dataset.index = `${index}`;
            index += 1;
            square.classList.add("square");
            square.textContent = element;
            square.addEventListener("click", (e) => gameFlow(e))

            gameBoard.appendChild(square);
        })
        return board;
    };

    createGameboard();

// Factory function for creating an objecto that controls the game flow
    function gameFlow(e){
        if((e.target.textContent === "X") || (e.target.textContent === "O")){
            console.log(e.target.dataset.index);
        }else{
            console.log("This is empty");
        }
    };


// Factory function for creating the players
    function createPlayer(name){
        return {name};
    }
