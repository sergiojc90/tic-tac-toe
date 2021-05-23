// Board Module
    (function(){
        let gameBoard = {
            board: ["x"],
            init: function() {
                this.cacheDom();
                this.bindEvents();
                this.render();
            },
            cacheDom: function() {
                this.gameBoard = document.getElementById("gameBoard");
                this.startButton = document.getElementById("startButton");
                this.square = document.createElement("div");
            },
            bindEvents: function() {

            },
            render: function() {
                
            },
        }

        gameBoard.init();
    })()

// Factory function for creating an objecto that controls the game flow
    const gameFlow = (() =>{

    })();


// Factory function for creating the players
    function createPlayer(name){
        return {name};
    }
