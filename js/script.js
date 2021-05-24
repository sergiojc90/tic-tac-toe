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
        squareOption.addEventListener("click",function(event){
            console.log(event.target.dataset.index);
        })
    }

    function playerSelection(event){
        if(event.target.textContent === null){
            event.textContent = player.textContent;
            playerTurn();
        }
    }

    function playerTurn(){
        
    }