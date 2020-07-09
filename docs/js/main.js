"use strict";
var EnterBuilding = (function () {
    function EnterBuilding() {
        this.bg1 = document.createElement("backgroundenter1");
        this.bg2 = document.createElement("backgroundenter2");
        this.bg3 = document.createElement("backgroundenter3");
    }
    EnterBuilding.prototype.setBackground = function () {
    };
    return EnterBuilding;
}());
var test = document.createElement("test");
var game = document.getElementsByTagName("game")[0];
game.appendChild(test);
//# sourceMappingURL=main.js.map