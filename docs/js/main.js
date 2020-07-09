"use strict";
var Act1 = (function () {
    function Act1() {
        var game = document.getElementsByTagName("game")[0];
        var background = document.createElement("backgroundact1");
        game.appendChild(background);
        var button = document.createElement("button");
        game.appendChild(button);
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