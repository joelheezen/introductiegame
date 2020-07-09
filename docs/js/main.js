"use strict";
var Act1 = (function () {
    function Act1() {
        var game = document.getElementsByTagName("game")[0];
        var background = document.createElement("backgroundact1");
        game.appendChild(background);
        var button = document.createElement("button");
        game.appendChild(button);
        var input1 = document.createElement("input");
        game.appendChild(input1);
        input1.style.width = "13.8vw";
        input1.style.height = "5.7vh";
        input1.style.transform = "translate(41.2vw, 38.4vh)";
        input1.style.borderRadius = "25px";
        input1.style.border = "none";
        input1.style.fontSize = "20px";
        input1.style.paddingLeft = "20px";
        input1.style.fontFamily = "Arial Black";
        input1.style.textTransform = "uppercase";
    }
    return Act1;
}());
var EnterBuilding = (function () {
    function EnterBuilding() {
    }
    EnterBuilding.prototype.setBackground = function () {
        var bge = document.createElement("backgroundenter");
        bge.style.backgroundImage = 'url(ass';
    };
    return EnterBuilding;
}());
var Game = (function () {
    function Game() {
        new Act1();
    }
    return Game;
}());
window.addEventListener("load", function () { return new Act1(); });
//# sourceMappingURL=main.js.map