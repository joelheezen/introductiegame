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
var LocatieSelectie = (function () {
    function LocatieSelectie() {
        this.background = document.createElement('background');
        this.game = document.getElementsByTagName('game')[0];
        this.background.style.backgroundImage = "";
        this.locationSetter();
    }
    LocatieSelectie.prototype.locationSetter = function () {
        var locationSet = document.createElement('locationsetter');
        this.game.appendChild(locationSet);
        var locationSelect = document.createElement('select');
        var locations = ['CMGT', 'Informatica'];
        for (var index = 0; index < locations.length; index++) {
            var addToDrop = document.createElement('option');
            addToDrop.value = locations[index];
            addToDrop.innerHTML = locations[index];
            locationSelect.appendChild(addToDrop);
        }
        locationSet.appendChild(locationSelect);
        var thisLocation = document.createElement('button');
        thisLocation.id = 'buttonLocation';
        thisLocation.innerHTML = 'Kies opleiding';
        locationSet.appendChild(thisLocation);
    };
    LocatieSelectie.prototype.locationPicker = function () {
    };
    LocatieSelectie.prototype.locationMarker = function () {
    };
    return LocatieSelectie;
}());
window.addEventListener('load', function () { return new LocatieSelectie; });
//# sourceMappingURL=main.js.map