    const gamePlay = (function(){

        // Board creation
        let board = new Array(9).fill(null);

        // DOM manipulation
        let gameboard = document.getElementById("gameBoard");
        let resetButton = document.getElementById("reset");
        let player = document.getElementById("player");
        
        // Render the empty Tic Tac Toe board
        render();
        bindEvents();

        // Binding Events
        function bindEvents(){
            let squareOptions = document.querySelectorAll(".square");
            squareOptions.forEach(addPlayerSelection);
            resetButton.addEventListener("click",reset);
            return {squareOptions};
        }

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

        function addPlayerSelection(squareOption){
            squareOption.addEventListener("click",playerSelection)
        }

        function removePlayerSelection(squareOption){
            squareOption.removeEventListener("click",playerSelection)
        }
    
        function playerSelection(event){
            
            if(event.target.textContent === ""){
                event.target.textContent = player.textContent;
                board[event.target.dataset.index] = event.target.textContent;
                if(!board.includes(null)) return player.textContent = "It is a tie";
                findWinningCombination();
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
                [2,4,6]
            ];
    
            for(const combination of winningCombinations){
                const [a,b,c] = combination;
                
                if(board[a] && (board[a] === board[b] && board[a] === board[c])){   
                    return gameWinner(combination);
                }
            }

            return playerTurn();
        }

        function gameWinner(combination){
            bindEvents().squareOptions.forEach(removePlayerSelection);
            player.textContent = "The winner is " + player.textContent;
            combination.forEach(element =>{
                let winner = document.querySelector(`.square[data-index="${element}"]`);
                winner.classList.add("winner");
            })
        }

        function playerTurn(){
            if (player.textContent === "X"){
                player.textContent = "O";
            }else{
                player.textContent = "X";
            }
        }

        function reset(){
            board = new Array(9).fill(null);
            while(gameboard.hasChildNodes()){
                gameboard.removeChild(gameboard.firstChild);
            }
            player.textContent = "X";
            render();
            bindEvents();
        }
    })();
