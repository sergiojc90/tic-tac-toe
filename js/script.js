// Board Module
    (function(){
        let gameBoard = {
            board: [
                "X","O","X",
                "O","X","O",
                "X","O","X",
            ],
            init: function() {
                this.cacheDom();
                this.render();
            },
            cacheDom: function() {
                this.gameBoard = document.getElementById("gameBoard");
                this.startButton = document.getElementById("startButton");
            },
            render: function() {
                this.board.forEach(this.addSquare)
            },
            addSquare: function(item,index){
                square = document.createElement("div");
                square.classList.add("square");
                square.dataset.index = `${index}`;
                square.textContent = item;
                index += 1;
                gameBoard.gameBoard.appendChild(square);
            }
        }

        gameBoard.init();
    })()

