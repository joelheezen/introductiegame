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
        this.background = document.createElement('backgroundLocation');
        this.game = document.getElementsByTagName('game')[0];
        this.educations = new Array();
        this.background.style.backgroundImage = "url(/docs/assets/rotterdam_50.png";
        this.game.appendChild(this.background);
        this.educationSetter();
    }
    LocatieSelectie.prototype.educationSetter = function () {
        var _this = this;
        this.educationSet = document.createElement('educationsetter');
        this.game.appendChild(this.educationSet);
        this.educationSet.innerHTML = "Om van start te gaan moeten we weten aan welke opleiding jij deel neemt. Kies uit deze lijst jouw opleiding.";
        var educationSelect = document.createElement('select');
        this.educations = ['CMGT', 'Informatica'];
        for (var index = 0; index < this.educations.length; index++) {
            var addToDrop = document.createElement('option');
            addToDrop.value = this.educations[index];
            addToDrop.innerHTML = this.educations[index];
            educationSelect.appendChild(addToDrop);
        }
        this.educationSet.appendChild(educationSelect);
        var thisLocation = document.createElement('button');
        thisLocation.innerHTML = 'Kies opleiding';
        thisLocation.addEventListener('click', function () { return _this.saveEducation(); });
        this.educationSet.appendChild(thisLocation);
    };
    LocatieSelectie.prototype.saveEducation = function () {
        var education = document.getElementsByTagName('select')[0].value;
        localStorage.setItem('education', education);
        this.locationPicker();
    };
    LocatieSelectie.prototype.locationPicker = function () {
        console.log('you didnt fuck up');
        this.background.style.backgroundImage = "url(/docs/assets/akte_1_map@0.75x.jpg)";
        this.background.style.backgroundSize = "100% 100%";
        this.educationSet.remove();
        for (var index = 0; index < this.educations.length; index++) {
            this.locationMarker();
        }
    };
    LocatieSelectie.prototype.locationMarker = function () {
        var marker = document.createElement('locationMarker');
        this.game.appendChild(marker);
    };
    return LocatieSelectie;
}());
window.addEventListener('load', function () { return new LocatieSelectie; });
//# sourceMappingURL=main.js.map