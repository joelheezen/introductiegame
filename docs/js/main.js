"use strict";
var Act1 = (function () {
    function Act1() {
        this.input1 = document.createElement("input");
        this.input2 = document.createElement("input");
        this.input3 = document.createElement("input");
        this.input1Save = "";
        this.input2Save = "";
        this.input3Save = "";
        this.popupSave = false;
        this.createAnswerScreen();
    }
    Act1.prototype.createAnswerScreen = function () {
        var _this = this;
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
        this.input1.value = this.input1Save;
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
        this.input2.value = this.input2Save;
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
        this.input3.value = this.input3Save;
        this.input3.id = "input3";
        var button1 = document.createElement("button");
        game.appendChild(button1);
        button1.style.width = "15.1vw";
        button1.style.height = "7.5vh";
        button1.style.transform = "translate(42.4vw, 47.9vh)";
        button1.style.opacity = "0%";
        button1.addEventListener("click", function () { return _this.shapeCheck(); });
        var button2 = document.createElement("button");
        game.appendChild(button2);
        button2.style.width = "18.5vw";
        button2.style.height = "3vh";
        button2.style.transform = "translate(25.25vw, 61vh)";
        button2.style.opacity = "0%";
        button2.addEventListener("click", function () { return _this.searchOnline(); });
        var button3 = document.createElement("button");
        game.appendChild(button3);
        button3.style.width = "9vw";
        button3.style.height = "7.6vh";
        button3.style.transform = "translate(91vw, 0vh)";
        button3.style.opacity = "0%";
        button3.addEventListener("click", function () { return _this.searchOnline(); });
    };
    Act1.prototype.shapeCheck = function () {
        console.log("button 1 is pressed");
        var shape1 = document.getElementById("input1").value;
        var shape2 = document.getElementById("input2").value;
        var shape3 = document.getElementById("input3").value;
        if (shape1 == "vierkant" && shape2 == "driehoek" && shape3 == "rondje") {
            if (confirm("dit is het goede antwoord, wil je verder? klik op cancel voor een pauze.")) {
                document.getElementsByTagName("game")[0].innerHTML = "";
                new EnterBuilding();
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
        var _this = this;
        this.input1Save = document.getElementById("input1").value;
        this.input2Save = document.getElementById("input2").value;
        this.input3Save = document.getElementById("input3").value;
        document.getElementsByTagName("game")[0].innerHTML = "";
        var background = document.createElement("backgroundact1");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(background);
        var button_next = document.createElement("button");
        game.appendChild(button_next);
        if (this.popupSave == false) {
            background.style.backgroundImage = "url(assets/plattegrond_popup.png)";
            this.popupSave = true;
            background.style.zIndex = "9";
        }
        else {
            background.style.backgroundImage = "url(assets/plattegrond.jpg)";
            game.removeChild(button_next);
            background.style.zIndex = "-1";
        }
        button_next.style.width = "9.2vw";
        button_next.style.height = "5vh";
        button_next.style.transform = "translate(59.8vw, 64vh)";
        button_next.style.opacity = "0%";
        button_next.style.zIndex = "999";
        button_next.addEventListener("click", function () {
            background.style.backgroundImage = "url(assets/plattegrond.jpg)";
            game.removeChild(button_next);
            background.style.zIndex = "-1";
        });
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var button3 = document.createElement("button");
        var button4 = document.createElement("button");
        var button5 = document.createElement("button");
        var button6 = document.createElement("button");
        game.appendChild(button1);
        game.appendChild(button2);
        game.appendChild(button3);
        game.appendChild(button4);
        game.appendChild(button5);
        game.appendChild(button6);
        button1.style.width = "19.6vw";
        button1.style.height = "60.9vh";
        button1.style.transform = "translate(5.7vw, 20.8vh)";
        button1.style.opacity = "0%";
        button1.addEventListener("click", function () { return _this.webmail(); });
        button2.style.width = "27.5vw";
        button2.style.height = "12.3vh";
        button2.style.transform = "translate(27.2vw, 69.8vh)";
        button2.style.opacity = "0%";
        button2.addEventListener("click", function () { return _this.rooster(); });
        button3.style.width = "13.2vw";
        button3.style.height = "27.3vh";
        button3.style.transform = "translate(56.3vw, 20.7vh)";
        button3.style.opacity = "0%";
        button3.addEventListener("click", function () { return _this.studentenServiceCenter(); });
        button4.style.width = "20.3vw";
        button4.style.height = "18vh";
        button4.style.transform = "translate(61.2vw, 63.8vh)";
        button4.style.opacity = "0%";
        button4.addEventListener("click", function () { return _this.studentenpas(); });
        button5.style.width = "12.8vw";
        button5.style.height = "61.3vh";
        button5.style.transform = "translate(83.7vw, 20.8vh)";
        button5.style.opacity = "0%";
        button5.addEventListener("click", function () { return _this.lms(); });
        button6.style.width = "9vw";
        button6.style.height = "7.6vh";
        button6.style.transform = "translate(91vw, 0vh)";
        button6.style.opacity = "0%";
        button6.addEventListener("click", function () { return _this.goBack(); });
    };
    Act1.prototype.webmail = function () {
        console.log("webmail is aangeklikt");
    };
    Act1.prototype.osiris = function () {
        console.log("osiris is aangeklikt");
    };
    Act1.prototype.rooster = function () {
        console.log("rooster is aangeklikt");
        var background = document.createElement("backgroundact1");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(background);
        var button_next = document.createElement("button");
        game.appendChild(button_next);
        var button_previous = document.createElement("button");
        game.appendChild(button_previous);
        background.style.backgroundImage = "url(assets/rooster_popup.png)";
        background.style.zIndex = "9";
        button_next.style.width = "9.2vw";
        button_next.style.height = "5vh";
        button_next.style.transform = "translate(59.8vw, 64vh)";
        button_next.style.opacity = "0%";
        button_next.style.zIndex = "999";
        button_next.addEventListener("click", function () {
            background.style.backgroundImage = "url(assets/plattegrond.png)";
            button_next.remove();
            background.style.zIndex = "-1";
        });
        button_previous.style.width = "6.2vw";
        button_previous.style.height = "5vh";
        button_previous.style.transform = "translate(52.6vw, 64vh)";
        button_previous.style.opacity = "0%";
        button_previous.style.zIndex = "999";
        button_previous.addEventListener("click", function () {
            background.style.backgroundImage = "url(assets/plattegrond.png)";
            game.removeChild(button_previous);
            background.style.zIndex = "-1";
        });
    };
    Act1.prototype.studentenServiceCenter = function () {
        console.log("ssc is aangeklikt");
    };
    Act1.prototype.studentenpas = function () {
        console.log("studentenpas is aangeklikt");
        var game = document.getElementsByTagName("game")[0];
        var myloc = new Image();
        myloc.useMap = "/docs/assets/studentenpas.png";
        var img = document.createElement('img');
        img.setAttribute('src', myloc.useMap);
        img.setAttribute('style', "height:25vh;width:25vw;transform:translate(28.3vw, 26.5vh);cursor:pointer;");
        game.appendChild(img);
        img.addEventListener("click", function () {
            button.style.display = "none";
            game.removeChild(img);
        });
        var button = document.createElement("button");
        game.appendChild(button);
        button.style.width = "20.3vw";
        button.style.height = "18vh";
        button.style.transform = "translate(61.2vw, 39vh)";
        button.style.opacity = "0%";
        button.addEventListener("click", function () {
            button.style.display = "none";
            game.removeChild(img);
        });
    };
    Act1.prototype.lms = function () {
        console.log("lms is aangeklikt");
    };
    Act1.prototype.goBack = function () {
        console.log("terug naar invulscherm");
        document.getElementsByTagName("game")[0].innerHTML = "";
        this.createAnswerScreen();
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
        this.bg.style.backgroundImage = 'url(assets/IMG_20200708_123510.jpg)';
    }
    return Act2Room1;
}());
var Act2Room2 = (function () {
    function Act2Room2() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.game.appendChild(this.bg);
        this.bg.style.backgroundImage = 'url(assets/IMG_20200708_123510.jpg)';
    }
    return Act2Room2;
}());
var Act2Room3 = (function () {
    function Act2Room3() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.game.appendChild(this.bg);
        this.bg.style.backgroundImage = 'url(assets/IMG_20200708_123510.jpg)';
    }
    return Act2Room3;
}());
var Act2Room4 = (function () {
    function Act2Room4() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("videoBackground");
        this.video = document.createElement("video");
        this.bg.style.backgroundColor = "black";
        this.game.appendChild(this.bg);
        this.game.appendChild(this.video);
        this.video.src = 'assets/Akte2/filmpjedecaanhorizontaal.mp4';
        this.video.autoplay = true;
        this.video.controls = true;
        this.video.onended = function () {
            var vid = document.getElementsByTagName("video")[0];
            vid.remove();
        };
    }
    return Act2Room4;
}());
var Act2Room5 = (function () {
    function Act2Room5() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.game.appendChild(this.bg);
        this.bg.style.backgroundImage = 'url(assets/IMG_20200708_123510.jpg)';
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
            this.bge.style.backgroundImage = 'url(assets/IMG_20200708_123510.jpg)';
        }
        else if (this.i == 1) {
            this.bge.style.backgroundImage = 'url(assets/IMG_20200708_123018.jpg)';
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
        document.getElementsByTagName("game")[0].innerHTML = "";
        new Act1();
    };
    Game.prototype.buttonPress2 = function () {
        document.getElementsByTagName("game")[0].innerHTML = "";
        new Act1();
    };
    Game.prototype.buttonPress3 = function () {
        document.getElementsByTagName("game")[0].innerHTML = "";
        new LocatieSelectie();
    };
    Game.prototype.buttonPress4 = function () {
        document.getElementsByTagName("game")[0].innerHTML = "";
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
        this.background.style.backgroundImage = "url(assets/rotterdam_50.png";
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
        this.background.style.backgroundImage = "url(assets/akte_1_map@0.75x.jpg)";
        this.background.style.backgroundSize = "100% 100%";
        this.educationSet.remove();
        this.locationMarker(30, 40, 'CMGT');
        this.locationMarker(44, 16, 'Informatica');
        this.locationMarker(24, 70, 'Communicatie');
        this.locationMarker(60, 60, 'Crossmediale Communicatie');
        this.locationMarker(17, 50, 'ICT Internet of Things');
        this.locationMarker(80, 36, 'ICT Service Management');
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
        if (awnser == 'correct') {
            locationImage.style.backgroundImage = 'url(assets/IMG_20200708_123456.jpg)';
            popupLocation.innerHTML += 'dummy text';
            var goto = document.createElement('button');
            popupLocation.appendChild(goto);
            goto.innerHTML = "Loop naar binnen";
            goto.addEventListener('click', function () {
                document.getElementsByTagName("game")[0].innerHTML = "";
                new Act1;
            });
        }
        else {
            locationImage.style.backgroundImage = 'url(assets/IMG_20200708_123018.jpg)';
            popupLocation.innerHTML += 'incorrect';
        }
        popupLocation.addEventListener('click', function () {
            document.getElementsByTagName('popupLocation')[0].remove();
        });
    };
    return LocatieSelectie;
}());
//# sourceMappingURL=main.js.map