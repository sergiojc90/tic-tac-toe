// Function for displaying the gameboard on the page
    const displayGameboard = ((board) => {

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
    })();;

// Factory function for creating an objecto that controls the game flow
    const gameFlow = (() =>{

    })();


// Factory function for creating the players
    function createPlayer(name){
        return {name};
    }
