// Board Module
    (function(){
        let gameBoard = {
            board: [
                "","","",
                "","","",
                "","","",
            ],
            init: function() {
                this.cacheDom();
                this.bindEvents();
            },
            cacheDom: function() {
                this.gameBoard = document.getElementById("gameBoard");
                this.startButton = document.getElementById("startButton");
            },
            bindEvents: function() {
                this.startButton.addEventListener("click",this.startGame.bind(this));
            },
            render: function() {
                this.clearGrid();
                this.board.forEach(this.addSquare)
            },
            addSquare: function(item){
                square = document.createElement("div");
                square.classList.add("square");
                square.textContent = item;
                gameBoard.gameBoard.appendChild(square);
            },
            addSelection:function(e){
                console.log(e.target.dataset.index);
            },
            startGame:function(){
                this.startButton.classList.add("btn--disable");
                this.render();
            },
            clearGrid: function(){
                while(this.gameBoard.hasChildNodes()){
                    this.gameBoard.removeChild(this.gameBoard.lastChild);
                }
            }
        }

        gameBoard.init();
    })()

