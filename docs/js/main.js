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
        var game = document.getElementsByTagName("game")[0];
        var button1 = document.createElement("button");
        game.appendChild(button1);
        button1.style.width = "10vw";
        button1.style.height = "10vh";
        button1.style.transform = "translate(25vw, 25vh)";
        button1.innerHTML = "joel";
        button1.onclick = this.buttonPress1;
        var button2 = document.createElement("button");
        game.appendChild(button2);
        button2.style.width = "10vw";
        button2.style.height = "10vh";
        button2.style.transform = "translate(50vw, 25vh)";
        button2.innerHTML = "gert";
        button2.onclick = this.buttonPress2;
        var button3 = document.createElement("button");
        game.appendChild(button3);
        button3.style.width = "10vw";
        button3.style.height = "10vh";
        button3.style.transform = "translate(25vw, 50vh)";
        button3.innerHTML = "tom";
        button3.onclick = this.buttonPress3;
        var button4 = document.createElement("button");
        game.appendChild(button4);
        button4.style.width = "10vw";
        button4.style.height = "10vh";
        button4.style.transform = "translate(50vw, 50vh)";
        button4.innerHTML = "luuk";
        button4.onclick = this.buttonPress4;
    }
    Game.prototype.buttonPress1 = function () {
        var buttons = document.getElementsByTagName("button");
        if (buttons) {
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].remove();
            }
        }
        new Act1();
    };
    Game.prototype.buttonPress2 = function () {
    };
    Game.prototype.buttonPress3 = function () {
    };
    Game.prototype.buttonPress4 = function () {
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map