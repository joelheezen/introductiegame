"use strict";
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