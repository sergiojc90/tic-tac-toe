// Board Module
    let board = new Array(9).fill(null);

    // DOM manipulation
    let gameboard = document.getElementById("gameBoard");
    let startButton = document.getElementById("startButton");
    let reset = document.getElementById("reset");
    let player = document.getElementById("player");
    
    render();

    function render(){
        board.forEach(addSquares);
    };

    function addSquares(element,index){
        let square = document.createElement("div");
        square.classList.add("square");
        square.dataset.index = index;
        square.textContent = element;
        gameboard.appendChild(square);
    };

    let squareOptions = document.querySelectorAll(".square");
    squareOptions.forEach(addPlayerSelection);

    function addPlayerSelection(squareOption){
        squareOption.addEventListener("click",playerSelection)
    }

    function playerSelection(event){
        if(event.target.textContent === ""){
            event.target.textContent = player.textContent;
            board[event.target.dataset.index] = event.target.textContent;
            playerTurn();
        }
    }

    function playerTurn(){
        if (player.textContent === "X"){
            player.textContent="O";
        }else{
            player.textContent="X";
        }
    }

    function findWinningCombination(){
        const winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]

        for(const combination of winningCombinations){
            const[a,b,c] = combination;

            if(board[a] && (board[a] === board[b] && board[a] === board[c])){
                return combination;
            }

            return null;
        }
    }