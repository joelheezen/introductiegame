"use strict";
var Act1 = (function () {
    function Act1() {
        this.input1 = document.createElement("input");
        this.input2 = document.createElement("input");
        this.input3 = document.createElement("input");
        var game = document.getElementsByTagName("game")[0];
        var background = document.createElement("backgroundact1");
        game.appendChild(background);
        game.appendChild(this.input1);
        this.input1.style.width = "13.7vw";
        this.input1.style.height = "5.7vh";
        this.input1.style.transform = "translate(26vw, 39.2vh)";
        this.input1.style.borderRadius = "25px";
        this.input1.style.border = "none";
        this.input1.style.fontSize = "20px";
        this.input1.style.paddingLeft = "1vw";
        this.input1.style.fontFamily = "Arial Black";
        this.input1.style.textTransform = "uppercase";
        this.input1.id = "input1";
        game.appendChild(this.input2);
        this.input2.style.width = "13.7vw";
        this.input2.style.height = "5.7vh";
        this.input2.style.transform = "translate(42.7vw, 39.2vh)";
        this.input2.style.borderRadius = "25px";
        this.input2.style.border = "none";
        this.input2.style.fontSize = "20px";
        this.input2.style.paddingLeft = "1vw";
        this.input2.style.fontFamily = "Arial Black";
        this.input2.style.textTransform = "uppercase";
        this.input2.id = "input2";
        game.appendChild(this.input3);
        this.input3.style.width = "13.7vw";
        this.input3.style.height = "5.7vh";
        this.input3.style.transform = "translate(59.2vw, 39.2vh)";
        this.input3.style.borderRadius = "25px";
        this.input3.style.border = "none";
        this.input3.style.fontSize = "20px";
        this.input3.style.paddingLeft = "1vw";
        this.input3.style.fontFamily = "Arial Black";
        this.input3.style.textTransform = "uppercase";
        this.input3.id = "input3";
        var button1 = document.createElement("button");
        game.appendChild(button1);
        button1.style.width = "15.1vw";
        button1.style.height = "7.5vh";
        button1.style.transform = "translate(42.4vw, 47.9vh)";
        button1.style.opacity = "0%";
        button1.onclick = this.shapeCheck;
        var button2 = document.createElement("button");
        game.appendChild(button2);
        button2.style.width = "18.5vw";
        button2.style.height = "3vh";
        button2.style.transform = "translate(25.25vw, 61vh)";
        button2.style.opacity = "0%";
        button2.onclick = this.searchOnline;
    }
    Act1.prototype.shapeCheck = function () {
        console.log("button 1 is pressed");
        var shape1 = document.getElementById("input1").value;
        var shape2 = document.getElementById("input2").value;
        var shape3 = document.getElementById("input3").value;
        if (shape1 == "vierkant" && shape2 == "driehoek" && shape3 == "rondje") {
            if (confirm("dit is het goede antwoord, wil je verder? klik op cancel voor een pauze.")) {
                new EnterBuilding();
                var inputs = document.getElementsByTagName("input");
                var buttons = document.getElementsByTagName("button");
                if (buttons) {
                    for (var i = (buttons.length - 1); i >= 0; i--) {
                        buttons[i].remove();
                    }
                }
                if (inputs) {
                    for (var i = (inputs.length - 1); i >= 0; i--) {
                        inputs[i].remove();
                    }
                }
            }
            else {
                console.log("je neemt een pauze");
            }
        }
        else {
            alert("helaas dit antwoord is fout.");
        }
    };
    Act1.prototype.searchOnline = function () {
        var inputs = document.getElementsByTagName("input");
        var buttons = document.getElementsByTagName("button");
        var background = document.getElementsByTagName("backgroundact1")[0];
        if (buttons) {
            for (var i = (buttons.length - 1); i >= 0; i--) {
                buttons[i].remove();
            }
        }
        if (inputs) {
            for (var i = (inputs.length - 1); i >= 0; i--) {
                inputs[i].remove();
            }
        }
        background.style.backgroundImage = "url(/docs/assets/plattegrond.png)";
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var button3 = document.createElement("button");
        var button4 = document.createElement("button");
        var button5 = document.createElement("button");
        var button6 = document.createElement("button");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(button1);
        game.appendChild(button2);
        game.appendChild(button3);
        game.appendChild(button4);
        game.appendChild(button5);
        game.appendChild(button6);
        button1.style.width = "13.9vw";
        button1.style.height = "20.1vh";
        button1.style.transform = "translate(16.5vw, 41.4vh)";
        button1.style.opacity = "80%";
        button1.onclick = this.webmail;
        button2.style.width = "6.5vw";
        button2.style.height = "24.8vh";
        button2.style.transform = "translate(31.5vw, 31.7vh)";
        button2.style.opacity = "80%";
        button2.onclick = this.osiris;
        button3.style.width = "9.6vw";
        button3.style.height = "9.3vh";
        button3.style.transform = "translate(35.5vw, 63vh)";
        button3.style.opacity = "80%";
        button3.onclick = this.rooster;
        button4.style.width = "10.9vw";
        button4.style.height = "14vh";
        button4.style.transform = "translate(56.8vw, 42.5vh)";
        button4.style.opacity = "80%";
        button4.onclick = this.studentenServiceCenter;
        button5.style.width = "11.1vw";
        button5.style.height = "13.6vh";
        button5.style.transform = "translate(53.2vw, 65.8vh)";
        button5.style.opacity = "80%";
        button5.onclick = this.studentenpas;
        button6.style.width = "10.8vw";
        button6.style.height = "24.8vh";
        button6.style.transform = "translate(72.2vw, 42.5vh)";
        button6.style.opacity = "80%";
        button6.onclick = this.lms;
    };
    Act1.prototype.webmail = function () {
        console.log("webmail is aangeklikt");
    };
    Act1.prototype.osiris = function () {
        console.log("osiris is aangeklikt");
    };
    Act1.prototype.rooster = function () {
        console.log("rooster is aangeklikt");
    };
    Act1.prototype.studentenServiceCenter = function () {
        console.log("ssc is aangeklikt");
    };
    Act1.prototype.studentenpas = function () {
        console.log("studentenpas is aangeklikt");
    };
    Act1.prototype.lms = function () {
        console.log("lms is aangeklikt");
    };
    return Act1;
}());
var Act2 = (function () {
    function Act2() {
        this.game = document.getElementsByTagName("game")[0];
        var background = document.createElement("backgroundact2");
        this.game.appendChild(background);
        this.levelSelect();
    }
    Act2.prototype.makeLevelIcon = function (posX, posY, width, height) {
        this.classroomIcon = document.createElement('classroom');
        this.game.appendChild(this.classroomIcon);
        this.classroomIcon.style.transform = "translate(" + posX + "vw," + posY + "vh)";
        this.classroomIcon.style.width = width + "vw";
        this.classroomIcon.style.height = height + "vh";
    };
    Act2.prototype.levelSelect = function () {
        this.makeLevelIcon(8.8, 15.5, 9.5, 32);
        this.classroomIcon.addEventListener("click", function () {
            console.log("room1");
            new Act2Room1;
        });
        this.makeLevelIcon(28.5, 15.5, 9.5, 32);
        this.classroomIcon.addEventListener("click", function () {
            console.log("room2");
            new Act2Room2;
        });
        this.makeLevelIcon(47, 15.5, 9.5, 32);
        this.classroomIcon.addEventListener("click", function () {
            console.log("room3");
            new Act2Room3;
        });
        this.makeLevelIcon(65.2, 15.5, 9.5, 32);
        this.classroomIcon.addEventListener("click", function () {
            console.log("room4");
            new Act2Room4;
        });
        this.makeLevelIcon(84, 15.5, 9.5, 32);
        this.classroomIcon.addEventListener("click", function () {
            console.log("room5");
            new Act2Room5;
        });
        this.makeLevelIcon(28, 75, 5, 4);
        this.classroomIcon.addEventListener("click", function () {
            console.log("folder1");
        });
        this.makeLevelIcon(25, 82, 7, 12);
        this.classroomIcon.addEventListener("click", function () {
            console.log("folder2");
        });
        this.makeLevelIcon(35, 93, 5, 5);
        this.classroomIcon.addEventListener("click", function () {
            console.log("folder3");
        });
        this.makeLevelIcon(33.5, 86, 5, 5);
        this.classroomIcon.addEventListener("click", function () {
            console.log("folder4");
        });
        this.makeLevelIcon(86.5, 25.3, 5, 15);
        this.classroomIcon.addEventListener("click", function () {
            console.log("folder4");
        });
    };
    return Act2;
}());
var Act2Room1 = (function () {
    function Act2Room1() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.game.appendChild(this.bg);
        this.bg.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123510.jpg)';
    }
    return Act2Room1;
}());
var Act2Room2 = (function () {
    function Act2Room2() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.game.appendChild(this.bg);
        this.bg.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123510.jpg)';
    }
    return Act2Room2;
}());
var Act2Room3 = (function () {
    function Act2Room3() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.game.appendChild(this.bg);
        this.bg.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123510.jpg)';
    }
    return Act2Room3;
}());
var Act2Room4 = (function () {
    function Act2Room4() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.video = document.createElement("videoDecaan");
        console.log("act2 room 4 open");
        this.game.appendChild(this.bg);
        this.bg.style.backgroundImage = 'url(/docs/assets/Akte2/filmpjedecaanhorizontaal.mp4)';
    }
    return Act2Room4;
}());
var Act2Room5 = (function () {
    function Act2Room5() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.game.appendChild(this.bg);
        this.bg.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123510.jpg)';
    }
    return Act2Room5;
}());
var EnterBuilding = (function () {
    function EnterBuilding() {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.bge = document.createElement("backgroundenter");
        this.i = 0;
        this.setBackground();
        this.game.appendChild(this.bge);
        this.bge.addEventListener("mousedown", function () { return _this.setBackground(); });
        this.game.appendChild(this.bge);
    }
    EnterBuilding.prototype.setBackground = function () {
        if (this.i == 0) {
            this.bge.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123510.jpg)';
        }
        else if (this.i == 1) {
            this.bge.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123018.jpg)';
        }
        else if (this.i == 2) {
            this.bge.remove();
            console.log('help');
            new Act2();
        }
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
            for (var i = (buttons.length - 1); i >= 0; i--) {
                buttons[i].remove();
            }
        }
        new Act1();
    };
    Game.prototype.buttonPress2 = function () {
        var buttons = document.getElementsByTagName("button");
        if (buttons) {
            for (var i = (buttons.length - 1); i >= 0; i--) {
                buttons[i].remove();
            }
        }
        new Act1();
    };
    Game.prototype.buttonPress3 = function () {
        var buttons = document.getElementsByTagName("button");
        if (buttons) {
            for (var i = (buttons.length - 1); i >= 0; i--) {
                buttons[i].remove();
            }
        }
        new LocatieSelectie();
    };
    Game.prototype.buttonPress4 = function () {
        var buttons = document.getElementsByTagName("button");
        if (buttons) {
            for (var i = (buttons.length - 1); i >= 0; i--) {
                buttons[i].remove();
            }
        }
        new EnterBuilding();
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
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
        this.educations = ['CMGT', 'Informatica', 'Communicatie', 'Crossmediale Communicatie', 'ICT Internet of Things', 'ICT Service Management'];
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
        this.background.style.backgroundImage = "url(/docs/assets/akte_1_map@0.75x.jpg)";
        this.background.style.backgroundSize = "100% 100%";
        this.educationSet.remove();
        this.locationMarker(5, 5, 'CMGT');
        this.locationMarker(5, 5, 'Informatica');
    };
    LocatieSelectie.prototype.locationMarker = function (x, y, location) {
        var _this = this;
        var marker = document.createElement('locationMarker');
        this.game.appendChild(marker);
        marker.style.transform = "translate(" + x + "vw," + y + "vh)";
        marker.addEventListener('click', function () {
            var education = localStorage.getItem('education');
            if (location == education) {
                _this.popupLoc('correct');
            }
            else {
                _this.popupLoc('incorrect');
            }
        });
    };
    LocatieSelectie.prototype.popupLoc = function (awnser) {
        if (document.getElementsByTagName('popupLocation')[0]) {
            document.getElementsByTagName('popupLocation')[0].remove();
        }
        var popupLocation = document.createElement('popupLocation');
        var locationImage = document.createElement('locationImage');
        this.game.appendChild(popupLocation);
        popupLocation.appendChild(locationImage);
        locationImage.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123456.jpg)';
        if (awnser == 'correct') {
            popupLocation.innerHTML += 'dummy text';
            var goto = document.createElement('button');
        }
        else {
            popupLocation.innerHTML += 'syke you thought';
        }
        popupLocation.addEventListener('click', function () {
            document.getElementsByTagName('popupLocation')[0].remove();
        });
    };
    return LocatieSelectie;
}());
//# sourceMappingURL=main.js.map