"use strict";
var Act1 = (function () {
    function Act1() {
        var game = document.getElementsByTagName("game")[0];
        var background = document.createElement("backgroundact1");
        game.appendChild(background);
        var button1 = document.createElement("button");
        game.appendChild(button1);
        button1.style.width = "15vw";
        button1.style.height = "7.5vh";
        button1.style.transform = "translate(42vw, 47vh)";
        button1.style.opacity = "80%";
        button1.onclick = this.shapeCheck;
        var button2 = document.createElement("button");
        game.appendChild(button2);
        button2.style.width = "18vw";
        button2.style.height = "3vh";
        button2.style.transform = "translate(25vw, 60vh)";
        button2.style.opacity = "80%";
        button2.onclick = this.searchOnline;
    }
    Act1.prototype.shapeCheck = function () {
        console.log("button 1 is pressed");
    };
    Act1.prototype.searchOnline = function () {
        console.log("button 2 is pressed");
    };
    return Act1;
}());
var EnterBuilding = (function () {
    function EnterBuilding() {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.i = 0;
        this.setBackground();
        document.addEventListener("mousedown", function () { return _this.setBackground(); });
    }
    EnterBuilding.prototype.setBackground = function () {
        var bge = document.createElement("backgroundenter");
        if (this.i == 0) {
            bge.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123510.jpg)';
        }
        else if (this.i == 1) {
            bge.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123018.jpg)';
        }
        else {
            new Act1();
        }
        this.game.appendChild(bge);
        this.i++;
    };
    return EnterBuilding;
}());
var Game = (function () {
    function Game() {
        new EnterBuilding();
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map