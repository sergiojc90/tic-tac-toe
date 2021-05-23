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
                this.startButton.addEventListener("click",this.render.bind(this));
            },
            render: function() {
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
            }
        }

        gameBoard.init();
    })()

