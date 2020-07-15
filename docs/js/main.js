"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Act1 = (function () {
    function Act1() {
        this.input1 = document.createElement("input");
        this.input2 = document.createElement("input");
        this.input3 = document.createElement("input");
        this.button1 = document.createElement("button");
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
        var location = localStorage.getItem('location');
        background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/" + location + "_door.jpg)";
        game.appendChild(background);
        var banner = document.createElement('banner');
        game.appendChild(banner);
        var act1Box = document.createElement('act1Box');
        act1Box.innerHTML = 'Oh nee! De deur zit dicht en heeft een specifieke sleutel nodig om gepend te worden. Vul de juisten vormen van de sleutel in.';
        game.appendChild(act1Box);
        game.appendChild(this.input1);
        this.input1.classList.add('inputShape');
        this.input1.style.transform = "translate(26vw, 39.2vh)";
        this.input1.value = this.input1Save;
        this.input1.id = "input1";
        game.appendChild(this.input2);
        this.input2.classList.add('inputShape');
        this.input2.style.transform = "translate(42.7vw, 39.2vh)";
        this.input2.value = this.input2Save;
        this.input2.id = "input2";
        game.appendChild(this.input3);
        this.input3.classList.add('inputShape');
        this.input3.style.transform = "translate(59.2vw, 39.2vh)";
        this.input3.value = this.input3Save;
        this.input3.id = "input3";
        game.appendChild(this.button1);
        this.button1.style.width = "15.1vw";
        this.button1.style.height = "7.5vh";
        this.button1.style.transform = "translate(42.4vw, 47.9vh)";
        this.button1.innerHTML = "VERZENDEN";
        this.button1.classList.add('verzenden');
        this.button1.addEventListener("click", function () { return _this.shapeCheck(); });
        var button2 = document.createElement("button");
        game.appendChild(button2);
        button2.classList.add('search');
        button2.style.width = "18.5vw";
        button2.style.height = "4vh";
        button2.style.transform = "translate(25.25vw, 61vh)";
        button2.style.opacity = "1";
        button2.innerHTML = 'Online zoeken naar vormen';
        button2.addEventListener("click", function () { return _this.searchOnline(); });
        var button3 = document.createElement("button");
        game.appendChild(button3);
        button3.style.width = "9vw";
        button3.style.height = "7.6vh";
        button3.style.transform = "translate(91vw, 0vh)";
        button3.style.opacity = "0";
        button3.addEventListener("click", function () { return _this.searchOnline(); });
    };
    Act1.prototype.shapeCheck = function () {
        console.log("button 1 is pressed");
        var shape1 = document.getElementById("input1").value;
        var shape2 = document.getElementById("input2").value;
        var shape3 = document.getElementById("input3").value;
        if (shape1 == "vierkant" && shape2 == "driehoek" && shape3 == "rondje") {
            document.getElementsByTagName("game")[0].innerHTML = "";
            new Pause(1, 'EnterBuilding');
        }
        else {
            var game = document.getElementsByTagName('game')[0];
            var inputs_1 = document.getElementsByTagName('input');
            for (var index = 0; index < inputs_1.length; index++) {
                inputs_1[index].style.border = 'solid 3px red';
            }
            var wrong_1 = document.createElement('wrong');
            wrong_1.innerHTML = 'Dit antwoord is onjuist. Probeer het nog een keer.';
            game.appendChild(wrong_1);
            setTimeout(function () {
                for (var index = 0; index < inputs_1.length; index++) {
                    inputs_1[index].style.border = '';
                    wrong_1.remove();
                }
            }, 2000);
        }
    };
    Act1.prototype.searchOnline = function () {
        var _this = this;
        this.input1Save = document.getElementById("input1").value;
        this.input2Save = document.getElementById("input2").value;
        this.input3Save = document.getElementById("input3").value;
        document.getElementsByTagName("game")[0].innerHTML = "";
        var background = document.createElement("backgroundOnline");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(background);
        var banner = document.createElement('banner');
        game.appendChild(banner);
        if (this.popupSave == false) {
            new CenterPopup('Welkom op jullie online plattegrond', 'Misschien is het handig om even een mailtje te sturen naar het studenten service center over de sleutel', '');
            this.popupSave = true;
        }
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        var button3 = document.createElement("button");
        var button4 = document.createElement("button");
        var button5 = document.createElement("button");
        var button6 = document.createElement("button");
        var button7 = document.createElement("button");
        game.appendChild(button1);
        game.appendChild(button2);
        game.appendChild(button3);
        game.appendChild(button4);
        game.appendChild(button5);
        game.appendChild(button6);
        game.appendChild(button7);
        button1.style.width = "15.6vw";
        button1.style.height = "60.9vh";
        button1.style.transform = "translate(14.5vw, 20.8vh)";
        button1.style.opacity = "0";
        button1.addEventListener("click", function () { return _this.webmail(); });
        button2.style.width = "22vw";
        button2.style.height = "12.3vh";
        button2.style.transform = "translate(31.7vw, 69.8vh)";
        button2.style.opacity = "0";
        button2.addEventListener("click", function () { return _this.rooster(); });
        button3.style.width = "10.7vw";
        button3.style.height = "27.3vh";
        button3.style.transform = "translate(55vw, 20.7vh)";
        button3.style.opacity = "0";
        button3.addEventListener("click", function () { return _this.studentenServiceCenter(); });
        button4.style.width = "16.3vw";
        button4.style.height = "18vh";
        button4.style.transform = "translate(59vw, 63.8vh)";
        button4.style.opacity = "0";
        button4.addEventListener("click", function () { return _this.studentenpas(); });
        button5.style.width = "10.2vw";
        button5.style.height = "61.3vh";
        button5.style.transform = "translate(77vw, 20.8vh)";
        button5.style.opacity = "0";
        button5.addEventListener("click", function () { return _this.lms(); });
        button6.style.width = "9vw";
        button6.style.height = "7.6vh";
        button6.style.transform = "translate(91vw, 0vh)";
        button6.style.opacity = "0";
        button6.addEventListener("click", function () { return _this.goBack(); });
        button7.style.width = "8.5vw";
        button7.style.height = "18vh";
        button7.style.transform = "translate(67vw, 20.8vh)";
        button7.style.opacity = "0";
        button7.addEventListener("click", function () { return _this.osiris(); });
    };
    Act1.prototype.webmail = function () {
        console.log("webmail is aangeklikt");
        window.open('https://webmail.hr.nl', '_blank');
    };
    Act1.prototype.osiris = function () {
        console.log("osiris is aangeklikt");
        window.open('osiris.html', '_blank');
    };
    Act1.prototype.rooster = function () {
        new CenterPopup('Rooster', 'Klik op doorgaan om je rooster te zien', 'https://hint.hr.nl/nl/HR/Studie/roosters-en-cijfers/Lesrooster/');
    };
    Act1.prototype.studentenServiceCenter = function () {
        new CenterPopup('Student Service Center', 'Mail het SSC met je persoonlijke studentenmail:ssc@hr.nl', '');
    };
    Act1.prototype.studentenpas = function () {
        console.log("studentenpas is aangeklikt");
        var game = document.getElementsByTagName("game")[0];
        var img = document.createElement('img');
        img.src = "/docs/assets/studentenpas.png";
        img.classList.add('studentenPas');
        game.appendChild(img);
        img.addEventListener("click", function () {
            button.style.display = "none";
            game.removeChild(img);
            button.remove();
        });
        img.style.position = "absolute";
        var button = document.createElement("button");
        game.appendChild(button);
        button.style.width = "20.3vw";
        button.style.height = "18vh";
        button.style.transform = "translate(61.2vw, 63.8vh)";
        button.style.opacity = "0";
        button.addEventListener("click", function () {
            button.style.display = "none";
            game.removeChild(img);
            button.remove();
        });
    };
    Act1.prototype.lms = function () {
        new CenterPopup('LMS', 'Verschillende vakken en informatie kun je vinden door op doorgaan te klikken', 'https://lms.hr.nl');
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
        this.doorName1 = document.createElement("doorName");
        this.doorName2 = document.createElement("doorName");
        this.doorName3 = document.createElement("doorName");
        this.doorName4 = document.createElement("doorName");
        this.doorName5 = document.createElement("doorName");
        this.input1 = document.createElement("input");
        this.input2 = document.createElement("input");
        this.input3 = document.createElement("input");
        this.input4 = document.createElement("input");
        this.input5 = document.createElement("input");
        this.number1 = "number1";
        this.number2 = "number2";
        this.number3 = "number3";
        this.number4 = "number4";
        this.number5 = "number5";
        var background = document.createElement("backgroundact2");
        this.game.appendChild(background);
        this.createFolderItems();
        this.levelSelect();
        this.codeInput();
        this.codeEind();
        this.doorNames();
        this.setHint();
        new hint;
    }
    Act2.prototype.doorNames = function () {
        this.game.appendChild(this.doorName1);
        this.game.appendChild(this.doorName2);
        this.game.appendChild(this.doorName3);
        this.game.appendChild(this.doorName4);
        this.game.appendChild(this.doorName5);
        this.doorName1.style.width = '11.77vw';
        this.doorName1.style.height = '3.65vh';
        this.doorName1.style.transform = "translate(4.75vw, 27.5vh)";
        this.doorName1.style.textAlign = 'center';
        this.doorName2.style.paddingTop = '1.5vh';
        this.doorName1.style.fontSize = "1vw";
        this.doorName1.style.pointerEvents = "none";
        this.doorName1.innerHTML = "Vertrouwenspersoon";
        this.doorName2.style.width = '11.77vw';
        this.doorName2.style.height = '3.65vh';
        this.doorName2.style.transform = "translate(24.67vw, 26.6vh)";
        this.doorName2.style.textAlign = 'center';
        this.doorName2.style.paddingTop = '0.8vh';
        this.doorName2.style.fontSize = "1vw";
        this.doorName2.style.pointerEvents = "none";
        this.doorName2.innerHTML = "Peercoach";
        this.doorName3.style.width = '11.77vw';
        this.doorName3.style.height = '3.65vh';
        this.doorName3.style.transform = "translate(44.36vw, 26.6vh)";
        this.doorName3.style.textAlign = 'center';
        this.doorName3.style.paddingTop = '0.8vh';
        this.doorName3.style.fontSize = "1vw";
        this.doorName3.style.pointerEvents = "none";
        this.doorName3.innerHTML = "SLC";
        this.doorName4.style.width = '11.77vw';
        this.doorName4.style.height = '3.65vh';
        this.doorName4.style.transform = "translate(64.26vw, 26.6vh)";
        this.doorName4.style.textAlign = 'center';
        this.doorName4.style.paddingTop = '0.8vh';
        this.doorName4.style.fontSize = "1vw";
        this.doorName4.style.pointerEvents = "none";
        this.doorName4.innerHTML = "Decaan";
        this.doorName5.style.width = '11.77vw';
        this.doorName5.style.height = '3.65vh';
        this.doorName5.style.transform = "translate(84vw, 26.1vh)";
        this.doorName5.style.textAlign = 'center';
        this.doorName5.style.paddingTop = '1.3vh';
        this.doorName5.style.fontSize = "1vw";
        this.doorName5.style.pointerEvents = "none";
        this.doorName5.innerHTML = "Student aan zet";
    };
    Act2.prototype.codeInput = function () {
        var _this = this;
        this.game.appendChild(this.input1);
        this.input1.style.width = "2.6vw";
        this.input1.style.height = "5.7vh";
        this.input1.style.transform = "translate(8.7vw, 35.45vh)";
        this.input1.style.border = "thick solid #A9A9A9";
        this.input1.style.fontSize = "2.5vw";
        this.input1.maxLength = 1;
        this.input1.style.paddingLeft = "0.8vw";
        this.input1.style.fontFamily = "Arial Black";
        this.input1.style.textTransform = "uppercase";
        this.input1.value = localStorage.getItem(this.number1);
        this.input1.id = "input1";
        this.input1.addEventListener("keyup", function () {
            _this.localStorageUpdate();
            _this.codeEind();
        });
        this.game.appendChild(this.input2);
        this.input2.style.width = "2.6vw";
        this.input2.style.height = "5.7vh";
        this.input2.style.transform = "translate(28.6vw, 35.45vh)";
        this.input2.style.border = "thick solid #A9A9A9";
        this.input2.style.fontSize = "2.5vw";
        this.input2.maxLength = 1;
        this.input2.style.paddingLeft = "0.8vw";
        this.input2.style.fontFamily = "Arial Black";
        this.input2.style.textTransform = "uppercase";
        this.input2.value = localStorage.getItem(this.number2);
        this.input2.id = "input2";
        this.input2.addEventListener("keyup", function () {
            _this.localStorageUpdate();
            _this.codeEind();
        });
        this.game.appendChild(this.input3);
        this.input3.style.width = "2.8vw";
        this.input3.style.height = "5.7vh";
        this.input3.style.transform = "translate(48.2vw, 35.45vh)";
        this.input3.style.border = "thick solid #A9A9A9";
        this.input3.style.fontSize = "2.5vw";
        this.input3.maxLength = 1;
        this.input3.style.paddingLeft = "0.6vw";
        this.input3.style.fontFamily = "Arial Black";
        this.input3.style.textTransform = "uppercase";
        this.input3.value = localStorage.getItem(this.number3);
        this.input3.id = "input3";
        this.input3.addEventListener("keyup", function () {
            _this.localStorageUpdate();
            _this.codeEind();
        });
        this.game.appendChild(this.input4);
        this.input4.style.width = "2.8vw";
        this.input4.style.height = "5.7vh";
        this.input4.style.transform = "translate(68vw, 35.45vh)";
        this.input4.style.border = "thick solid #A9A9A9";
        this.input4.style.fontSize = "2.5vw";
        this.input4.maxLength = 1;
        this.input4.style.paddingLeft = "0.6vw";
        this.input4.style.fontFamily = "Arial Black";
        this.input4.style.textTransform = "uppercase";
        this.input4.value = localStorage.getItem(this.number4);
        this.input4.id = "input4";
        this.input4.addEventListener("keyup", function () {
            _this.localStorageUpdate();
            _this.codeEind();
        });
        this.game.appendChild(this.input5);
        this.input5.style.width = "2.6vw";
        this.input5.style.height = "5.7vh";
        this.input5.style.transform = "translate(88vw, 35.45vh)";
        this.input5.style.border = "thick solid #A9A9A9";
        this.input5.style.fontSize = "2.5vw";
        this.input5.maxLength = 1;
        this.input5.style.paddingLeft = "0.8vw";
        this.input5.style.fontFamily = "Arial Black";
        this.input5.style.textTransform = "uppercase";
        this.input5.value = localStorage.getItem(this.number5);
        this.input5.id = "input5";
        this.input5.addEventListener("keyup", function () {
            _this.localStorageUpdate();
            _this.codeEind();
        });
    };
    Act2.prototype.localStorageUpdate = function () {
        localStorage.setItem(this.number1, document.getElementById("input1").value);
        localStorage.setItem(this.number2, document.getElementById("input2").value);
        localStorage.setItem(this.number3, document.getElementById("input3").value);
        localStorage.setItem(this.number4, document.getElementById("input4").value);
        localStorage.setItem(this.number5, document.getElementById("input5").value);
    };
    Act2.prototype.setHint = function () {
        new popup("Zoek je juiste kleur bij de juiste persoon.", 5, 84, 10);
        new popup("Hulp nodig? Blijf (er) niet (mee) rondlopen! Hier moet je zijn: Hulp bij studie. De hogeschool biedt allerlei vormen van een-op-een begeleiding en ondersteuning." +
            " Maar....alle deuren zitten op slot. Kraak de lettercode om alle deuren te openen, zodat je gebruik kunt maken van al onze begeleiding!", 64, 75, 30);
    };
    Act2.prototype.codeEind = function () {
        var codeString = document.getElementById("input1").value +
            document.getElementById("input2").value +
            document.getElementById("input3").value +
            document.getElementById("input4").value +
            document.getElementById("input5").value;
        console.log(codeString);
        if (codeString.toLowerCase() == "dbnve") {
            console.log("goed ");
            this.input1.style.border = "thick solid #00FF00";
            this.input2.style.border = "thick solid #00FF00";
            this.input3.style.border = "thick solid #00FF00";
            this.input4.style.border = "thick solid #00FF00";
            this.input5.style.border = "thick solid #00FF00";
            new CenterPopup('De puzzel is opgelost', 'Daar komt de peercoach', 'doorgaan');
        }
        else {
            console.log("fout");
            this.input1.style.border = "thick solid #FF0000";
            this.input2.style.border = "thick solid #FF0000";
            this.input3.style.border = "thick solid #FF0000";
            this.input4.style.border = "thick solid #FF0000";
            this.input5.style.border = "thick solid #FF0000";
        }
    };
    Act2.prototype.makeLevelIcon = function (posX, posY, width, height) {
        this.classroomIcon = document.createElement('classroom');
        this.game.appendChild(this.classroomIcon);
        this.classroomIcon.style.transform = "translate(" + posX + "vw," + posY + "vh)";
        this.classroomIcon.style.width = width + "vw";
        this.classroomIcon.style.height = height + "vh";
    };
    Act2.prototype.levelSelect = function () {
        this.makeLevelIcon(4, 25, 13, 43);
        this.classroomIcon.addEventListener("click", function () {
            console.log("room1");
            document.getElementsByTagName("game")[0].innerHTML = "";
            new Act2Room1;
        });
        this.makeLevelIcon(24, 25, 13, 43);
        this.classroomIcon.addEventListener("click", function () {
            console.log("room2");
            document.getElementsByTagName("game")[0].innerHTML = "";
            new Act2Room2;
        });
        this.makeLevelIcon(43.5, 25, 13, 43);
        this.classroomIcon.addEventListener("click", function () {
            console.log("room3");
            document.getElementsByTagName("game")[0].innerHTML = "";
            new Act2Room3;
        });
        this.makeLevelIcon(63.8, 25, 13, 43);
        this.classroomIcon.addEventListener("click", function () {
            console.log("room4");
            document.getElementsByTagName("game")[0].innerHTML = "";
            new Act2Room4;
        });
        this.makeLevelIcon(83.5, 25, 13, 43);
        this.classroomIcon.addEventListener("click", function () {
            console.log("room5");
            document.getElementsByTagName("game")[0].innerHTML = "";
            new Act2Room5;
        });
    };
    Act2.prototype.createFolderItems = function () {
        var _this = this;
        this.folderBackground = document.createElement("folderbackground");
        this.folderItem1 = document.createElement("folderitem");
        this.folderItem2 = document.createElement("folderitem");
        this.folderItem3 = document.createElement("folderitem");
        this.folderItem4 = document.createElement("folderitem");
        this.folderItem5 = document.createElement("folderitem");
        this.folderItem6 = document.createElement("folderitem");
        this.game.appendChild(this.folderItem1);
        this.game.appendChild(this.folderItem2);
        this.game.appendChild(this.folderItem3);
        this.game.appendChild(this.folderItem4);
        this.game.appendChild(this.folderItem5);
        this.game.appendChild(this.folderItem6);
        this.folderBackground.style.backgroundColor = "black";
        this.folderBackground.style.opacity = "0.8";
        this.folderBackground.style.zIndex = "15";
        this.folderItem1.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_getallen.png)';
        this.folderItem1.style.transform = "translate(20vw,72vh)";
        this.folderItem1.style.width = '8.3vw';
        this.folderItem1.style.height = '8.3vh';
        this.folderItem1.addEventListener("click", function () {
            console.log("folder1");
            _this.game.appendChild(_this.folderBackground);
            new Act2folder1;
        });
        this.folderItem2.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_studie.png)';
        this.folderItem2.style.transform = "translate(44vw,87vh)";
        this.folderItem2.style.width = '12vw';
        this.folderItem2.style.height = '12vh';
        this.folderItem2.addEventListener("click", function () {
            console.log("folder2");
            _this.game.appendChild(_this.folderBackground);
            new Act2folder2;
        });
        this.folderItem3.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_solliciteren.png)';
        this.folderItem3.style.transform = "translate(60vw,70vh)";
        this.folderItem3.style.width = '8vw';
        this.folderItem3.style.height = '8vh';
        this.folderItem3.addEventListener("click", function () {
            console.log("folder3");
            _this.game.appendChild(_this.folderBackground);
            new Act2folder3;
        });
        this.folderItem4.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_coia.png)';
        this.folderItem4.style.transform = "translate(3vw,83vh)";
        this.folderItem4.style.width = '10vw';
        this.folderItem4.style.height = '10vh';
        this.folderItem4.addEventListener("click", function () {
            console.log("folder4");
            _this.game.appendChild(_this.folderBackground);
            new Act2folder4;
        });
        this.folderItem5.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_morsecode.png)';
        this.folderItem5.style.transform = "translate(80vw,78vh)";
        this.folderItem5.style.width = '10vw';
        this.folderItem5.style.height = '10vh';
        this.folderItem5.addEventListener("click", function () {
            console.log("folder5");
            _this.game.appendChild(_this.folderBackground);
            new Act2folder5;
        });
        this.folderItem6.style.backgroundImage = 'url(assets/Akte2/Postervormen&kleuren.jpg)';
        this.folderItem6.style.transform = "translate(58.1vw,30vh)";
        this.folderItem6.style.width = '4.45vw';
        this.folderItem6.style.height = '11.6vh';
        this.folderItem6.addEventListener("click", function () {
            console.log("folder6");
            _this.game.appendChild(_this.folderBackground);
            new Act2folder6;
        });
    };
    return Act2;
}());
var folders = (function () {
    function folders() {
        this.game = document.getElementsByTagName('game')[0];
        this.folder = document.createElement("openfolder");
        this.createFolder();
    }
    folders.prototype.createFolder = function () {
        var _this = this;
        this.folder.style.width = '100vw';
        this.folder.style.height = '100vh';
        this.game.appendChild(this.folder);
        this.folder.addEventListener("click", function () {
            var folderBG = document.getElementsByTagName('folderbackground')[0];
            console.log("folder removed");
            folderBG.remove();
            _this.folder.remove();
        });
    };
    return folders;
}());
var Act2folder1 = (function (_super) {
    __extends(Act2folder1, _super);
    function Act2folder1() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer1getallen.jpg)';
        _this.folder.style.height = "60vh";
        _this.folder.style.marginTop = "20vh";
        return _this;
    }
    return Act2folder1;
}(folders));
var Act2folder2 = (function (_super) {
    __extends(Act2folder2, _super);
    function Act2folder2() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer2HulpbijStudie.jpg)';
        return _this;
    }
    return Act2folder2;
}(folders));
var Act2folder3 = (function (_super) {
    __extends(Act2folder3, _super);
    function Act2folder3() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer3WorkshopSolliciteren.jpg)';
        return _this;
    }
    return Act2folder3;
}(folders));
var Act2folder4 = (function (_super) {
    __extends(Act2folder4, _super);
    function Act2folder4() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer4COIAinfo.png)';
        return _this;
    }
    return Act2folder4;
}(folders));
var Act2folder5 = (function (_super) {
    __extends(Act2folder5, _super);
    function Act2folder5() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer5MorseCodeAlfabet.jpg)';
        _this.folder.style.height = "60vh";
        _this.folder.style.marginTop = "20vh";
        return _this;
    }
    return Act2folder5;
}(folders));
var Act2folder6 = (function (_super) {
    __extends(Act2folder6, _super);
    function Act2folder6() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Postervormen&kleuren.jpg)';
        return _this;
    }
    return Act2folder6;
}(folders));
var Act2Room1 = (function () {
    function Act2Room1() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.openInNewTab("https://hint.hr.nl/nl/HR/Studie/hulp-bij-studie/vertrouwenspersoon-introgame/?ticket=ST-7561117-asFVoii1iQmlJNL9MKZ3jK4u9c0lwEYAbd5-20");
        new Act2;
    }
    Act2Room1.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room1;
}());
var Act2Room2 = (function () {
    function Act2Room2() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("videoBackground");
        this.video = document.createElement("video");
        this.bg.style.backgroundColor = "black";
        this.game.appendChild(this.bg);
        this.game.appendChild(this.video);
        this.video.src = 'assets/Akte2/peer1.mp4';
        this.video.autoplay = true;
        this.video.controls = true;
        this.video.onended = function () {
            var vid = document.getElementsByTagName("video")[0];
            var bg = document.getElementsByTagName("videoBackground")[0];
            vid.remove();
            bg.remove();
            new Act2Room2s1;
        };
    }
    return Act2Room2;
}());
var Act2Room2s1 = (function () {
    function Act2Room2s1() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("videoBackground");
        this.video = document.createElement("video");
        this.bg.style.backgroundColor = "black";
        this.game.appendChild(this.bg);
        this.game.appendChild(this.video);
        this.video.src = 'assets/Akte2/peer2.mp4';
        this.video.autoplay = true;
        this.video.controls = true;
        this.video.onended = function () {
            var vid = document.getElementsByTagName("video")[0];
            var bg = document.getElementsByTagName("videoBackground")[0];
            vid.remove();
            bg.remove();
            new Act2;
        };
    }
    return Act2Room2s1;
}());
var Act2Room3 = (function () {
    function Act2Room3() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.openInNewTab("https://hint.hr.nl/nl/HR/Studie/hulp-bij-studie/studieloopbaancoach-slc-introgame/");
        new Act2;
    }
    Act2Room3.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room3;
}());
var Act2Room4 = (function () {
    function Act2Room4() {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("videoBackground");
        this.video = document.createElement("video");
        this.signin = document.createElement("signin");
        this.bg.style.backgroundColor = "black";
        this.game.appendChild(this.bg);
        this.game.appendChild(this.video);
        this.game.appendChild(this.signin);
        this.video.src = 'assets/Akte2/decaan1.mp4';
        this.video.autoplay = true;
        this.video.controls = true;
        this.signin.style.width = "15vw";
        this.signin.style.height = "3.7vh";
        this.signin.style.transform = "translate(8vw,80vh)";
        this.signin.style.backgroundColor = "#ffb911";
        this.signin.style.borderRadius = "20px";
        this.signin.style.display = "table-cell";
        this.signin.style.fontSize = "18px";
        this.signin.style.textAlign = 'center';
        this.signin.style.paddingTop = '0.5vh';
        this.signin.style.cursor = "pointer";
        this.signin.innerText = "Maak hier een afspraak";
        this.signin.addEventListener("click", function () {
            _this.openInNewTab("https://hint.hr.nl/nl/HR/Studie/hulp-bij-studie/Afspraak-maken-decaan-introgame/");
        });
        this.video.onended = function () {
            var vid = document.getElementsByTagName("video")[0];
            var bg = document.getElementsByTagName("videoBackground")[0];
            var signin = document.getElementsByTagName("signin")[0];
            vid.remove();
            bg.remove();
            signin.remove();
            new Act2Room4s1;
        };
    }
    Act2Room4.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room4;
}());
var Act2Room4s1 = (function () {
    function Act2Room4s1() {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("videoBackground");
        this.video = document.createElement("video");
        this.signin = document.createElement("signin");
        this.bg.style.backgroundColor = "black";
        this.game.appendChild(this.bg);
        this.game.appendChild(this.video);
        this.game.appendChild(this.signin);
        this.video.src = 'assets/Akte2/decaan2.mp4';
        this.video.autoplay = true;
        this.video.controls = true;
        this.signin.style.width = "15vw";
        this.signin.style.height = "3.7vh";
        this.signin.style.transform = "translate(8vw,80vh)";
        this.signin.style.backgroundColor = "#ffb911";
        this.signin.style.borderRadius = "20px";
        this.signin.style.display = "table-cell";
        this.signin.style.fontSize = "18px";
        this.signin.style.textAlign = 'center';
        this.signin.style.paddingTop = '0.5vh';
        this.signin.style.cursor = "pointer";
        this.signin.innerText = "Maak hier een afspraak";
        this.signin.addEventListener("click", function () {
            _this.openInNewTab("https://hint.hr.nl/nl/HR/Studie/hulp-bij-studie/Afspraak-maken-decaan-introgame/");
        });
        this.video.onended = function () {
            var vid = document.getElementsByTagName("video")[0];
            var bg = document.getElementsByTagName("videoBackground")[0];
            var signin = document.getElementsByTagName("signin")[0];
            vid.remove();
            bg.remove();
            signin.remove();
            new Act2;
        };
    }
    Act2Room4s1.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room4s1;
}());
var Act2Room5 = (function () {
    function Act2Room5() {
        this.game = document.getElementsByTagName('game')[0];
        this.bg = document.createElement("act2background");
        this.openInNewTab("https://hint.hr.nl/nl/HR/Studie/hulp-bij-studie/Studentenwelzijnsadviseurs-introgame/");
        new Act2;
    }
    Act2Room5.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    return Act2Room5;
}());
var Act3 = (function () {
    function Act3() {
        var _this = this;
        this.game = document.getElementsByTagName("game")[0];
        this.bg = document.createElement("videoBackground");
        this.video = document.createElement("video");
        var playButton = document.createElement("button");
        this.bg.style.backgroundColor = "black";
        this.game.appendChild(this.bg);
        this.game.appendChild(this.video);
        this.game.appendChild(playButton);
        playButton.style.width = "100vw";
        playButton.style.height = "100vh";
        playButton.style.opacity = "0";
        playButton.addEventListener("click", function () { return _this.togglePlay(); });
        this.video.src = 'assets/Akte3/startAct3.mp4';
        this.video.autoplay = true;
        this.video.controls = false;
        this.video.playbackRate = 16;
        this.video.onended = function () {
            var game = document.getElementsByTagName("game")[0];
            game.innerHTML = "";
            var background = document.createElement("backgroundAct3");
            game.appendChild(background);
            var button1 = document.createElement("button");
            var button2 = document.createElement("button");
            var button3 = document.createElement("button");
            var button4 = document.createElement("button");
            var button5 = document.createElement("button");
            var button6 = document.createElement("button");
            var button7 = document.createElement("button");
            var button8 = document.createElement("button");
            game.appendChild(button1);
            game.appendChild(button2);
            game.appendChild(button3);
            game.appendChild(button4);
            game.appendChild(button5);
            game.appendChild(button6);
            game.appendChild(button7);
            game.appendChild(button8);
            button1.style.width = "7.2vw";
            button1.style.height = "14.4vh";
            button1.style.transform = "translate(31vw, 31.8vh)";
            button1.style.opacity = "0";
            button1.addEventListener("click", function () {
                var popup = document.createElement("popup");
                var game = document.getElementsByTagName("game")[0];
                game.appendChild(popup);
                popup.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/map.png)";
                popup.style.backgroundSize = "100% 100%";
                popup.style.backgroundRepeat = "no-repeat";
                popup.style.width = "80vw";
                popup.style.height = "80vh";
                popup.style.transform = "translate(10vw, 10vh)";
                popup.style.position = "absolute";
                popup.style.boxShadow = "rgba(0,0,0,0.25) 20px 20px";
                popup.style.borderRadius = "15px";
                var mapArea = document.createElement("mapArea");
                game.appendChild(mapArea);
                mapArea.style.width = "80vw";
                mapArea.style.height = "80vh";
                mapArea.style.transform = "translate(10vw, 10vh)";
                mapArea.style.zIndex = "2";
                mapArea.style.position = "absolute";
                var pin1 = document.createElement("pin");
                var pin2 = document.createElement("pin");
                var pin3 = document.createElement("pin");
                var pin4 = document.createElement("pin");
                var pin5 = document.createElement("pin");
                var pin6 = document.createElement("pin");
                var pin7 = document.createElement("pin");
                var pin8 = document.createElement("pin");
                var pin9 = document.createElement("pin");
                var pin10 = document.createElement("pin");
                var pin11 = document.createElement("pin");
                var pin12 = document.createElement("pin");
                var pin13 = document.createElement("pin");
                mapArea.appendChild(pin1);
                mapArea.appendChild(pin2);
                mapArea.appendChild(pin3);
                mapArea.appendChild(pin4);
                mapArea.appendChild(pin5);
                mapArea.appendChild(pin6);
                mapArea.appendChild(pin7);
                mapArea.appendChild(pin8);
                mapArea.appendChild(pin9);
                mapArea.appendChild(pin10);
                mapArea.appendChild(pin11);
                mapArea.appendChild(pin12);
                mapArea.appendChild(pin13);
                var url1 = "url(assets/Akte3/Hofpleinfontein.jpg)";
                var url2 = "url(assets/Akte3/RotterdamCS.jpg)";
                var url3 = "url(assets/Akte3/Feyenoordstadion.jpg)";
                var url4 = "url(assets/Akte3/KunstwerkBelichaamdeEenheid.jpg)";
                var url5 = "url(assets/Akte3/Erasmusbrug.jpg)";
                var url6 = "url(assets/Akte3/StationBlaak.jpg)";
                var url7 = "url(assets/Akte3/ErasmusMC.jpg)";
                var url8 = "url(assets/Akte3/Binnenrotte.jpg)";
                var url9 = "url(assets/Akte3/markthal.jpg)";
                var url10 = "url(assets/Akte3/CentraleBibliotheek.jpg)";
                var url11 = "url(assets/Akte3/Beurstraverse.jpg)";
                var url12 = "url(assets/Akte3/Blaaktoren.jpg)";
                var url13 = "url(assets/Akte3/KunstwerkDeGestileerdeBloem.jpg)";
                var text1 = "De Hofpleinfontein Midden in het verkeersplein Hofplein staat een grote fontein. Deze Hofpleinfontein werd in 1939 aan de stad Rotterdam geschonken door de\u202Frederij Van Ommeren\u202Fdie zijn honderjarige bestaan vierde. De fontein wordt in de volksmond ook wel de\u202FFlipspuit\u202Fgenoemd, verwijzend naar Philippus \"Flip\" van Ommeren. Door de centrale ligging, pal naast de Coolsingel, is het een plaats geworden waar grote successen worden gevierd van voetbalclub\u202FFeyenoord\u202Fen het\u202FNederlands voetbalelftal. Bij die overwinningen\u202Fspringen en feesten supporters in de fontein.";
                var text2 = "Rotterdam Centraal Station Het huidige stationsgebouw, gelegen aan het\u202FStationsplein, werd op 13 maart 2014 officieel geopend door koning\u202FWillem-Alexander.\u202FHet ontwerp verwierf meerdere internationale prijzen. Maar Rotterdammers hebben hun stationsgebouw zoals gewoonlijk een minder flatteuze bijnaam gegeven! ";
                var text3 = "Feyenoordstadion \u201CGa je mee naar het stadion, naar de club van Rood en Wit\u201D. Dit stadion is beter bekend onder de naam \u2026\u2026\u2026. ";
                var text4 = "'De Belichaamde Eenheid' Dit kunstwerk stond ooit bij de ingang van een van de locaties van Hogeschool Rotterdam (Museumpark Hoogbouw); destijds het hoofdkantoor van Unilever. Bij de verhuizing naar de Weena is het kunstwerk meeverhuisd. ";
                var text5 = "Erasmusbrug De Erasmusbrug is een verhaal apart en heeft wel meer dan 20 bijnamen, waaronder \u2018de Zwaan\u2019, \u2018de Harp\u2019 en 'de Wipkip\u2019. Toch is \u2018de Zwaan\u2019 de meest gebruikte bijnaam. ";
                var text6 = "Station Blaak De opdracht die de architect had bij het ontwerpen van het station was dat er voldoende ori\u00EBntatiepunten moesten zijn voor de reizigers. Dit is ook de reden dat de architect een opvallende constructie boven de grond maakte, zodat het station meteen opvalt en te herkennen is. Het ontwerp lijkt een beetje op een vliegende schotel. Veel mensen noemen het ook een verwelkte zonnebloem of fluitketel. Voor die laatste bijnaam moet je wel iets meer fantasie hebben.. ";
                var text7 = "Erasmus Medische Centrum Op 1 juni 2002 fuseerden het Dijkzigtziekenhuis, het Sophia Kinderziekenhuis, de Daniel den Hoedkliniek en de \"Faculteit der Geneeskunde en Gezondheidswetenschappen\" van de Erasmus Universiteit Rotterdam tot het huidige Erasmus MC. \u201CGroot, wit, vierkant\u2026. Ik begrijp het wel\u201D zei een Rotterdammer over de bijnaam van dit gebouw. ";
                var text8 = "Binnenrotte Hier wordt op dinsdag en zaterdag markt gehouden. Daarnaast wordt het plein ook veelvuldig gebruikt voor evenementen. Opgravingen hebben aangetoond dat de vroegste nederzettingen aan de rivier de Rotte hier het begin van de stad Rotterdam hebben ingeluid. De Binnenrotte is een grote, open ruimte en daar is ook de bijnaam \u2018Landingsbaan\u2019 van afgeleid. ";
                var text9 = "Markthal Deze koophemel herbergt delicatessen, verse producten, allerlei eettentjes, een supermarkt en slijterij. Toch komen de meeste toeristen voor iets anders. Camera\u2019s klikken onafgebroken en zijn allemaal gericht op het plafond van de iconische Markthal. Rotterdammers spreken trots over hun \u2018Sixtijnse Kapel\u2019. ";
                var text10 = "Centrale Bibliotheek Aan de opvallende gele buizen aan de buitenkant van dit gebouw dankt de bibliotheek haar bijnaam. Waar doet het jou aan denken? Net als meer gebouwen in Rotterdam, draagt de bibliotheek een citaat van een beroemde Rotterdammer op de gevel: \u201CHeel de aarde is je vaderland\u201D schreef niemand minder dan Desiderius Erasmus. Bezoek ook is de Erasmus Experience in de bibliotheek als je meer over deze grote denker wil leren. ";
                var text11 = "Beurstraverse Deze verdiepte winkelstraat loopt onder de Coolsingel door. De onhandige trappen ogen misschien mooi, maar lopen voor geen meter! Grote ketens hebben hier allemaal een plek. ";
                var text12 = "De Blaaktoren Woontoren. Voor Rotterdammers beter bekend als het \u2018potlood\u2019.  ";
                var text13 = "'De gestileerde bloem' Dit naamloze kunstwerk is een geschenk van de Bijenkorf aan de stad Rotterdam. Het heeft later de titel \u2018de gestileerde bloem\u2019 gekregen. Sommige Rotterdammers noemen het gewoonweg \u2018het ding\u2019. Anderen zien er een spoorwegongeluk in.  ";
                pin1.style.transform = "translate(30.5vw, 35.7vh)";
                pin1.style.zIndex = "3";
                pin1.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url1;
                    pinPopup.style.transform = "translate(16vw, 1vh)";
                    pinPopup.innerHTML += text1;
                });
                pin1.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin2.style.transform = "translate(26.2vw, 34.8vh)";
                pin2.style.zIndex = "3";
                pin2.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url2;
                    pinPopup.style.transform = "translate(11vw, 0.7vh)";
                    pinPopup.innerHTML += text2;
                });
                pin2.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin3.style.transform = "translate(50.3vw, 75.7vh)";
                pin3.style.zIndex = "3";
                pin3.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url3;
                    pinPopup.style.transform = "translate(36vw, 42vh)";
                    pinPopup.innerHTML += text3;
                });
                pin3.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin4.style.transform = "translate(28.3vw, 36.7vh)";
                pin4.style.zIndex = "3";
                pin4.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url4;
                    pinPopup.style.transform = "translate(14vw, 2vh)";
                    pinPopup.innerHTML += text4;
                });
                pin4.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin5.style.transform = "translate(34.3vw, 56.7vh)";
                pin5.style.zIndex = "3";
                pin5.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url5;
                    pinPopup.style.transform = "translate(20vw, 23vh)";
                    pinPopup.innerHTML += text5;
                });
                pin5.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin6.style.transform = "translate(35.6vw, 42vh)";
                pin6.style.zIndex = "3";
                pin6.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url6;
                    pinPopup.style.transform = "translate(21vw, 7.7vh)";
                    pinPopup.innerHTML += text6;
                });
                pin6.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin7.style.transform = "translate(25.8vw, 55.1vh)";
                pin7.style.zIndex = "3";
                pin7.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url7;
                    pinPopup.style.transform = "translate(11.5vw, 21vh)";
                    pinPopup.innerHTML += text7;
                });
                pin7.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin8.style.transform = "translate(34.3vw, 37.9vh)";
                pin8.style.zIndex = "3";
                pin8.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url8;
                    pinPopup.style.transform = "translate(20vw, 5.3vh)";
                    pinPopup.innerHTML += text8;
                });
                pin8.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin9.style.transform = "translate(32.2vw, 39.2vh)";
                pin9.style.zIndex = "3";
                pin9.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url9;
                    pinPopup.style.transform = "translate(19.3vw, 5.2vh)";
                    pinPopup.innerHTML += text9;
                });
                pin9.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin10.style.transform = "translate(36.5vw, 39.2vh)";
                pin10.style.zIndex = "3";
                pin10.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url10;
                    pinPopup.style.transform = "translate(22.9vw, 5.7vh)";
                    pinPopup.innerHTML += text10;
                });
                pin10.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin11.style.transform = "translate(30.4vw, 41.3vh)";
                pin11.style.zIndex = "3";
                pin11.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url11;
                    pinPopup.style.transform = "translate(17vw, 10vh)";
                    pinPopup.innerHTML += text11;
                });
                pin11.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin12.style.transform = "translate(33.8vw, 41.7vh)";
                pin12.style.zIndex = "3";
                pin12.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url12;
                    pinPopup.style.transform = "translate(20vw, 10vh)";
                    pinPopup.innerHTML += text12;
                });
                pin12.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin13.style.transform = "translate(31.7vw, 43.6vh)";
                pin13.style.zIndex = "3";
                pin13.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url13;
                    pinPopup.style.transform = "translate(18vw, 11vh)";
                    pinPopup.innerHTML += text13;
                });
                pin13.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                var button = document.createElement("button");
                game.appendChild(button);
                button.style.width = "100vw";
                button.style.height = "100vh";
                button.style.opacity = "0";
                button.style.zIndex = "1";
                button.style.position = "absolute";
                button.addEventListener("click", function () {
                    popup.remove();
                    button.remove();
                    mapArea.remove();
                });
                var char1 = document.createElement("char");
                var char2 = document.createElement("char");
                var char3 = document.createElement("char");
                var char4 = document.createElement("char");
                var char5 = document.createElement("char");
                mapArea.appendChild(char1);
                mapArea.appendChild(char2);
                mapArea.appendChild(char3);
                mapArea.appendChild(char4);
                mapArea.appendChild(char5);
                char1.style.backgroundImage = "url(assets/Akte3/cees.png)";
                char1.style.backgroundSize = "100% 100%";
                char1.style.width = "3.5vw";
                char1.style.height = "10vh";
                char1.style.position = "absolute";
                char1.style.transform = "translate(42.5vw, 33vh)";
                char1.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    pinPopup.style.transform = "translate(29.5vw, 15vh)";
                    pinPopup.innerHTML += "Mijn naam is Cees Jansen. Bij een studentenvereniging maak je vrienden voor het leven. Elke vereniging heeft een eigen cultuur. Onze vereniging is de oudste van Rotterdam en bestaat al meer dan 100 jaar! ";
                    pinPopup.style.paddingTop = "1vh";
                    pinPopup.style.fontSize = "1.5vh";
                });
                char1.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                char2.style.backgroundImage = "url(assets/Akte3/zoe.png)";
                char2.style.backgroundSize = "100% 100%";
                char2.style.width = "3.5vw";
                char2.style.height = "10vh";
                char2.style.position = "absolute";
                char2.style.transform = "translate(25.5vw, 42vh)";
                char2.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    pinPopup.style.transform = "translate(13vw, 23vh)";
                    pinPopup.innerHTML += "Bij ons op de soci\u00EBteit organiseren we de mooiste feesten. Ook heb ik een hele leuke club waarmee ik samen studeer en allerlei dingen onderneem. Tijdens de introductie gaan verenigingen trouwens de hele stad door om zichzelf te promoten onder eerstejaars. Ik ga zo maar weer eens naar mijn eigen soci\u00EBteit \uD83D\uDE09. Liefs, Zo\u00EB ";
                    pinPopup.style.paddingTop = "1vh";
                    pinPopup.style.fontSize = "1.5vh";
                });
                char2.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                char3.style.backgroundImage = "url(assets/Akte3/loes.png)";
                char3.style.backgroundSize = "100% 100%";
                char3.style.width = "3.5vw";
                char3.style.height = "10vh";
                char3.style.position = "absolute";
                char3.style.transform = "translate(37.6vw, 42.3vh)";
                char3.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    pinPopup.style.transform = "translate(25vw, 24vh)";
                    pinPopup.innerHTML += "Hi, Ik ben Loes. Ik vind het leuk om samen op de vereniging te studeren. Natuurlijk kom ik er ook om te ontspannen, mensen te leren kennen, etc. Studeren en lid zijn gaat goed samen. Nou, ik ga maar weer eens. Op naar \"Koinoonia\". ";
                    pinPopup.style.paddingTop = "1vh";
                    pinPopup.style.fontSize = "1.5vh";
                });
                char3.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                char4.style.backgroundImage = "url(assets/Akte3/donna.png)";
                char4.style.backgroundSize = "100% 100%";
                char4.style.width = "3.5vw";
                char4.style.height = "10vh";
                char4.style.position = "absolute";
                char4.style.transform = "translate(42.5vw, 42vh)";
                char4.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    pinPopup.style.transform = "translate(30vw, 25vh)";
                    pinPopup.innerHTML += "Hoi, ik ben Donna. Ook ik ben lid bij een vereniging. Als studentenvereniging zetten we ons ook in voor maatschappelijke projecten. En je leert veel door commissies en het organiseren van evenementen. Echt een goede aanvulling op mijn studententijd.  ";
                    pinPopup.style.paddingTop = "1vh";
                    pinPopup.style.fontSize = "1.5vh";
                });
                char4.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                char5.style.backgroundImage = "url(assets/Akte3/werner.png)";
                char5.style.backgroundSize = "100% 100%";
                char5.style.width = "3.5vw";
                char5.style.height = "10vh";
                char5.style.position = "absolute";
                char5.style.transform = "translate(20.5vw, 42vh)";
                char5.addEventListener("mouseover", function () {
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    pinPopup.style.transform = "translate(8vw, 24vh)";
                    pinPopup.innerHTML += "NSR is de grootste christelijke vereniging van Rotterdam. We zitten op het Eendrachtsplein. Van alle RKvV-verenigingen zijn we de jongste. Toch bestaan we al weer sinds 1987! We combineren vriendschap, verdieping en gezelligheid. Kom eens langs om kennis te maken! Groetjes, Werner";
                    pinPopup.style.paddingTop = "1vh";
                    pinPopup.style.fontSize = "1.5vh";
                });
                char5.addEventListener("mouseout", function () {
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
            });
            var correct1 = 0;
            var correct2 = 0;
            var correct3 = 0;
            var correct4 = 0;
            button2.style.width = "11.5vw";
            button2.style.height = "14.3vh";
            button2.style.transform = "translate(44.4vw, 37.6vh)";
            button2.style.opacity = "0";
            button2.addEventListener("click", function () {
                var game = document.getElementsByTagName("game")[0];
                var popup = document.createElement("popup");
                game.appendChild(popup);
                popup.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/notebook_open.png)";
                popup.style.zIndex = "2";
                popup.style.width = "90vw";
                popup.style.height = "90vh";
                popup.style.backgroundSize = "100% 100%";
                popup.style.backgroundRepeat = "no-repeat";
                popup.style.transform = "translate(5vw, 5vh)";
                popup.style.position = "absolute";
                var button = document.createElement("button");
                game.appendChild(button);
                button.style.width = "100vw";
                button.style.height = "100vh";
                button.style.opacity = "0";
                button.style.zIndex = "1";
                button.style.position = "absolute";
                button.addEventListener("click", function () {
                    var note1 = document.getElementById("note1").value.toLowerCase();
                    var note2 = document.getElementById("note2").value.toLowerCase();
                    var note3 = document.getElementById("note3").value.toLowerCase();
                    var note4 = document.getElementById("note4").value.toLowerCase();
                    localStorage.setItem("note1Save", note1);
                    localStorage.setItem("note2Save", note2);
                    localStorage.setItem("note3Save", note3);
                    localStorage.setItem("note4Save", note4);
                    button.remove();
                    popup.remove();
                });
                var text1 = document.createElement("question");
                var text2 = document.createElement("question");
                var text3 = document.createElement("question");
                var text4 = document.createElement("question");
                var input1 = document.createElement("input");
                var input2 = document.createElement("input");
                var input3 = document.createElement("input");
                var input4 = document.createElement("input");
                popup.appendChild(text1);
                popup.appendChild(text2);
                popup.appendChild(text3);
                popup.appendChild(text4);
                popup.appendChild(input1);
                popup.appendChild(input2);
                popup.appendChild(input3);
                popup.appendChild(input4);
                var input1Text = localStorage.getItem("note1Save");
                var input2Text = localStorage.getItem("note2Save");
                var input3Text = localStorage.getItem("note3Save");
                var input4Text = localStorage.getItem("note4Save");
                text1.style.width = "25vw";
                text1.style.height = "2vh";
                text1.style.transform = "translate(12.3vw, 6vh)";
                text1.style.fontSize = "2.5vh";
                text1.style.position = "absolute";
                text1.innerHTML = "Vraag 1: \"Rotterdamse icoon\"";
                input1.style.width = "24.5vw";
                input1.style.height = "3vh";
                input1.style.transform = "translate(12.5vw, 11.5vh)";
                input1.style.position = "absolute";
                input1.style.border = "none";
                input1.style.fontSize = "2.5vh";
                input1.style.borderBottom = "dashed 2px";
                input1.style.backgroundColor = "transparent";
                input1.value = input1Text;
                input1.id = "note1";
                text2.style.width = "28vw";
                text2.style.height = "2vh";
                text2.style.transform = "translate(12.3vw, 22.5vh)";
                text2.style.fontSize = "2.5vh";
                text2.style.position = "absolute";
                text2.innerHTML = "Vraag 2: \"Tijd voor een feestje\"";
                input2.style.width = "24.5vw";
                input2.style.height = "3vh";
                input2.style.transform = "translate(12.5vw, 28.5vh)";
                input2.style.position = "absolute";
                input2.style.border = "none";
                input2.style.fontSize = "2.5vh";
                input2.style.borderBottom = "dashed 2px";
                input2.style.backgroundColor = "transparent";
                input2.value = input2Text;
                input2.id = "note2";
                text3.style.width = "25vw";
                text3.style.height = "2vh";
                text3.style.transform = "translate(12.3vw, 39.8vh)";
                text3.style.fontSize = "2.5vh";
                text3.style.position = "absolute";
                text3.innerHTML = "Vraag 3: \"RKVV\"";
                input3.style.width = "24.5vw";
                input3.style.height = "3vh";
                input3.style.transform = "translate(12.5vw, 45.8vh)";
                input3.style.position = "absolute";
                input3.style.border = "none";
                input3.style.fontSize = "2.5vh";
                input3.style.borderBottom = "dashed 2px";
                input3.style.backgroundColor = "transparent";
                input3.value = input3Text;
                input3.id = "note3";
                text4.style.width = "25vw";
                text4.style.height = "2vh";
                text4.style.transform = "translate(12.3vw, 57.2vh)";
                text4.style.fontSize = "2.5vh";
                text4.style.position = "absolute";
                text4.innerHTML = "Vraag 4: \"Rondje?\"";
                input4.style.width = "24.5vw";
                input4.style.height = "3vh";
                input4.style.transform = "translate(12.5vw, 63.2vh)";
                input4.style.position = "absolute";
                input4.style.border = "none";
                input4.style.fontSize = "2.5vh";
                input4.style.borderBottom = "dashed 2px";
                input4.style.backgroundColor = "transparent";
                input4.value = input4Text;
                input4.id = "note4";
                if (correct1 == 1) {
                    input1.style.color = "green";
                    input1.style.borderColor = "black";
                }
                if (correct2 == 1) {
                    input2.style.color = "green";
                    input2.style.borderColor = "black";
                }
                if (correct3 == 1) {
                    input3.style.color = "green";
                    input3.style.borderColor = "black";
                }
                if (correct4 == 1) {
                    input4.style.color = "green";
                    input4.style.borderColor = "black";
                }
                input1.addEventListener("keyup", function () {
                    var note1 = document.getElementById("note1").value.toLowerCase();
                    if (note1 == "bibliotheek") {
                        input1.style.color = "green";
                        input1.style.borderColor = "black";
                        correct1 = 1;
                    }
                    else {
                        input1.style.color = "black";
                        correct1 = 0;
                    }
                });
                input2.addEventListener("keyup", function () {
                    var note2 = document.getElementById("note2").value.toLowerCase();
                    if (note2 == "5") {
                        input2.style.color = "green";
                        input2.style.borderColor = "black";
                        correct2 = 1;
                    }
                    else {
                        input2.style.color = "black";
                        correct2 = 0;
                    }
                });
                input3.addEventListener("keyup", function () {
                    var note3 = document.getElementById("note3").value.toLowerCase();
                    if (note3 == "word lid") {
                        input3.style.color = "green";
                        input3.style.borderColor = "black";
                        correct3 = 1;
                    }
                    else {
                        input3.style.color = "black";
                        correct3 = 0;
                    }
                });
                input4.addEventListener("keyup", function () {
                    var note4 = document.getElementById("note4").value.toLowerCase();
                    if (note4 == "24,20") {
                        input4.style.color = "green";
                        input4.style.borderColor = "black";
                        correct4 = 1;
                    }
                    else {
                        input4.style.color = "black";
                        correct4 = 0;
                    }
                });
                popup.addEventListener("keyup", function () {
                    var note1 = document.getElementById("note1").value.toLowerCase();
                    var note2 = document.getElementById("note2").value.toLowerCase();
                    var note3 = document.getElementById("note3").value.toLowerCase();
                    var note4 = document.getElementById("note4").value.toLowerCase();
                    if (note1 == "bibliotheek" && note2 == "5" && note3 == "word lid" && note4 == "24,20") {
                        game.innerHTML = "";
                        new Ending;
                    }
                });
            });
            button3.style.width = "16.3vw";
            button3.style.height = "17.9vh";
            button3.style.transform = "translate(68.7vw, 54.4vh)";
            button3.style.opacity = "0";
            button3.addEventListener("click", function () {
                var winNav = window.navigator;
                var vendorName = winNav.vendor;
                var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
                var isIOSChrome = winNav.userAgent.match("CriOS");
                if (isIOSChrome) {
                }
                else if (vendorName === "Google Inc." &&
                    isIEedge === false) {
                    var pdf_1 = document.createElement("object");
                    game.appendChild(pdf_1);
                    pdf_1.data = "assets/Akte3/RKvVboekje2020.pdf";
                    pdf_1.type = "application/pdf";
                    pdf_1.width = "50%";
                    pdf_1.height = "75%";
                    pdf_1.style.zIndex = "1";
                    pdf_1.style.position = "absolute";
                    pdf_1.style.transform = "translate(25vw, 10vh)";
                    pdf_1.style.boxShadow = "rgba(0,0,0,0.5) 15px 15px";
                    var button_1 = document.createElement("button");
                    game.appendChild(button_1);
                    button_1.style.width = "100vw";
                    button_1.style.height = "100vh";
                    button_1.style.position = "absolute";
                    button_1.style.zIndex = "0";
                    button_1.style.opacity = "0";
                    button_1.addEventListener("click", function () {
                        button_1.remove();
                        pdf_1.remove();
                    });
                }
                else {
                    var win = window.open("assets/Akte3/RKvVboekje2020.pdf");
                    win.focus();
                }
            });
            button4.style.width = "10.5vw";
            button4.style.height = "11vh";
            button4.style.transform = "translate(27.5vw, 65.9vh)";
            button4.style.opacity = "0";
            button4.addEventListener("click", function () {
                var card = document.getElementById("card");
                if (card) {
                    card.style.display = "block";
                    var button_2 = document.createElement("button");
                    game.appendChild(button_2);
                    button_2.style.zIndex = "1";
                    button_2.style.width = "100vw";
                    button_2.style.height = "100vh";
                    button_2.style.opacity = "0";
                    button_2.style.position = "absolute";
                    button_2.addEventListener("click", function () {
                        var card = document.getElementById("card");
                        card.style.display = "none";
                        button_2.remove();
                    });
                }
                else {
                    var game_1 = document.getElementsByTagName("game")[0];
                    var popup_1 = document.createElement("popup");
                    game_1.appendChild(popup_1);
                    popup_1.style.backgroundImage = "url(assets/Akte3/woordzoeker.png)";
                    popup_1.style.backgroundRepeat = "no-repeat";
                    popup_1.style.backgroundSize = "100% 100%";
                    popup_1.style.width = "90vw";
                    popup_1.style.height = "90vh";
                    popup_1.style.position = "absolute";
                    popup_1.style.zIndex = "2";
                    popup_1.style.transform = "translate(5vw, 5vh)";
                    popup_1.style.borderRadius = "20px";
                    popup_1.style.boxShadow = "rgba(0,0,0,0.25) 20px 20px";
                    popup_1.id = "card";
                    var button_3 = document.createElement("button");
                    game_1.appendChild(button_3);
                    button_3.style.zIndex = "1";
                    button_3.style.width = "100vw";
                    button_3.style.height = "100vh";
                    button_3.style.opacity = "0";
                    button_3.style.position = "absolute";
                    button_3.addEventListener("click", function () {
                        popup_1.style.display = "none";
                        button_3.remove();
                    });
                    var text = document.createElement("text");
                    popup_1.appendChild(text);
                    text.style.fontSize = "2.5vh";
                    text.style.transform = "translate(50.5vw, 13vh)";
                    text.style.position = "absolute";
                    text.style.width = "35vw";
                    text.style.height = "10vh";
                    text.innerHTML = "Klik op de aansichtkaart om een stip te zetten, klik op de stip om deze weer weg te halen. Uiteindelijk komt er een uitkomst vul deze in in het notitieboekje!</br> Hint: het is alleen het eerste woord wat je krijgt nadat je alles in hebt gevuld.";
                    popup_1.addEventListener("click", function (event) {
                        var dot = document.createElement("dot");
                        popup_1.appendChild(dot);
                        var x = ((event.clientX / innerWidth) * 100);
                        var y = ((event.clientY / innerHeight) * 100);
                        dot.addEventListener("click", function (event) {
                            dot.remove();
                            event.stopPropagation();
                        });
                        dot.style.transform = "translate(" + (x - 5.75) + "vw, " + (y - 6.5) + "vh)";
                        dot.style.width = "1.5vw";
                        dot.style.height = "3vh";
                        dot.style.backgroundColor = "red";
                        dot.style.borderRadius = "50%";
                        dot.style.position = "absolute";
                        dot.style.zIndex = "3";
                        dot.style.opacity = "0.3";
                    });
                }
            });
            button5.style.width = "8vw";
            button5.style.height = "9.1vh";
            button5.style.transform = "translate(46.8vw, 56.8vh)";
            button5.style.opacity = "0";
            button5.addEventListener("click", function () {
                var popup = document.createElement("popup");
                var game = document.getElementsByTagName("game")[0];
                game.appendChild(popup);
                popup.style.backgroundImage = "url(assets/Akte3/Rotterdampas.png)";
                popup.style.backgroundSize = "100% 100%";
                popup.style.width = "30vw";
                popup.style.height = "30vh";
                popup.style.transform = "translate(40vw, 35vh)";
                popup.style.position = "absolute";
                popup.style.zIndex = "2";
                var button = document.createElement("button");
                game.appendChild(button);
                button.style.width = "100vw";
                button.style.height = "100vh";
                button.style.position = "absolute";
                button.style.opacity = "0";
                button.style.zIndex = "1";
                button.addEventListener("click", function () {
                    button.remove();
                    popup.remove();
                });
            });
            button6.style.width = "12.4vw";
            button6.style.height = "3.7vh";
            button6.style.transform = "translate(62.6vw, 72vh)";
            button6.style.opacity = "0";
            button6.addEventListener("click", function () {
                var win = window.open("http://www.rotterdamstaattespringen.nl/");
                win.focus();
            });
            button7.style.width = "14.3vw";
            button7.style.height = "15vh";
            button7.style.transform = "translate(15.2vw, 59vh)";
            button7.style.opacity = "0";
            button7.addEventListener("click", function () {
                var popup = document.createElement("popup");
                var game = document.getElementsByTagName("game")[0];
                var button = document.createElement("button");
                game.appendChild(button);
                game.appendChild(popup);
                button.style.width = "100vw";
                button.style.height = "100vh";
                button.style.position = "absolute";
                button.style.zIndex = "1";
                button.style.opacity = "0";
                button.addEventListener("click", function () {
                    button.remove();
                    popup.remove();
                });
                popup.style.backgroundImage = "url(assets/Akte3/vidiVici.png)";
                popup.style.backgroundSize = "100% 100%";
                popup.style.width = "25vw";
                popup.style.height = "57vh";
                popup.style.transform = "translate(37.5vw, 15vh)";
                popup.style.position = "absolute";
                popup.style.zIndex = "2";
                popup.style.paddingTop = "8vh";
                popup.style.paddingBottom = "1vh";
                popup.style.paddingLeft = "1vw";
                popup.style.paddingRight = "1vw";
                popup.style.boxShadow = "rgba(0, 0, 0, 0.5) 15px 15px";
                popup.style.fontSize = "1.5vh";
                popup.innerHTML += "Zin in een feestje? Maar heb ik daar wel tijd voor? Nu je student wordt zal je het razend druk gaat krijgen met je studie. Heb je eigenlijk nog wel tijd om iets leuks te doen? Je wil toch ook een beetje genieten van je studententijd? Hoe doen andere studenten dat eigenlijk?\n                </br>Stel: Je gaat om elf uur naar bed en je staat om zeven uur weer op om naar de hogeschool te gaan. In het weekend ga je vaak wat later naar bed, maar slaap je ook net zoveel uit. Je hebt 0:45 uur reistijd van huis naar school, een half uur om aan te kleden en te eten 's ochtend. Op school heb je van maandag t/m donderdag les van 8.30 uur tot 10:10 uur en je hebt les 12:10 tot 13.50 uur. Vrijdag heb je ook les, maar die volg je online via Teams. Naast je lessen heb je nog ongeveer 4 uur nodig voor je huiswerk. Dat doe je vaak effici\u00EBnt tussen de lessen door, hoef je minder 's avonds en in het weekend te doen. Je kookt je eigen eten, kost een half uurtje en tja, binnen 20 minuten heb je dat op. Per week werk je gemiddeld 14 uur in een leuk koffietentje in de stad. Je wilt het eigenlijk niet, maar aan social media ben je bijna anderhalf uur per dag kwijt. Oh ja, en je belt natuurlijk elke week een keer met je ouders (of oma/opa/tante) voor zo'n 30 min. \n                </br></br>Hoeveel tijd hou jij over voor ontspanning?\n                </br></br>Gemiddeld ... uur per dag. ";
            });
            button8.style.width = "5.9vw";
            button8.style.height = "11.7vh";
            button8.style.transform = "translate(64.8vw, 34.1vh)";
            button8.style.opacity = "0";
            button8.style.zIndex = "-1";
            button8.addEventListener("click", function () {
                var game = document.getElementsByTagName("game")[0];
                var popup = document.createElement("pinPopup");
                var button = document.createElement("button");
                game.appendChild(button);
                game.appendChild(popup);
                var audio = document.createElement("audio");
                var audioCheck = document.getElementsByTagName("audio")[0];
                if (audioCheck == null) {
                    popup.appendChild(audio);
                    audio.src = "assets/Akte3/audio.mp3";
                    audio.autoplay = true;
                    audio.controls = true;
                    audio.style.width = "100%";
                    audio.style.paddingBottom = "1vh";
                }
                popup.style.zIndex = "2";
                popup.style.paddingTop = "1vh";
                popup.style.transform = "translate(35vw, 43vh)";
                popup.innerHTML += "Hoeveel geld houd ik over voor een rondje?";
                button.style.width = "100vw";
                button.style.height = "100vh";
                button.style.position = "absolute";
                button.style.zIndex = "1";
                button.style.opacity = "0";
                button.addEventListener("click", function () {
                    button.remove();
                    popup.remove();
                });
            });
        };
    }
    Act3.prototype.togglePlay = function () {
        if (this.video.paused) {
            this.video.play();
        }
        else {
            this.video.pause();
        }
    };
    return Act3;
}());
var CenterPopup = (function () {
    function CenterPopup(title, message, open) {
        var popup = document.createElement('onlinePopup');
        var popupTitle = document.createElement('popupTitle');
        popupTitle.innerHTML = title;
        var popupMessage = document.createElement('popupMessage');
        popupMessage.innerHTML = message;
        var doorgaan = document.createElement('button');
        doorgaan.innerHTML = 'Doorgaan';
        doorgaan.addEventListener('click', function () {
            if (open == 'doorgaan') {
                new Pause(2, 'Act3');
            }
            else if (open !== '') {
                window.open(open, '_blank');
            }
            popup.remove();
        });
        popup.appendChild(doorgaan);
        popup.appendChild(popupTitle);
        popup.appendChild(popupMessage);
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(popup);
    }
    return CenterPopup;
}());
var Ending = (function () {
    function Ending() {
        new Timer().endTimer();
        var bg = document.createElement("backgroundEnd");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(bg);
        bg.style.backgroundImage = "url(assets/Akte3/Binnenrotte.jpg)";
        bg.style.backgroundSize = "100% 100%";
        bg.style.backgroundRepeat = "no-repeat";
        bg.style.width = "100vw";
        bg.style.height = "100vh";
        bg.style.position = "absolute";
        var popup = document.createElement("endPopup");
        game.appendChild(popup);
        var title = document.createElement('youWon');
        title.innerHTML = "Gefeliciteerd";
        popup.appendChild(title);
        var subTitle = document.createElement('subtitle');
        subTitle.innerHTML = 'Dit is het einde van het spel<br>Jouw score is:<br>';
        popup.appendChild(subTitle);
        var score = document.createElement('finalScore');
        score.innerHTML += new Timer().score();
        popup.appendChild(score);
        var button = document.createElement("button");
        popup.appendChild(button);
        button.innerHTML += "klik hier voor een uitdraai van je score";
        button.addEventListener("click", function () {
            window.print();
        });
        new Timer().resetTimer();
    }
    return Ending;
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
        var button4 = document.createElement("button");
        game.appendChild(button4);
        button4.style.width = "10vw";
        button4.style.height = "10vh";
        button4.style.transform = "translate(80vw, 50vh)";
        button4.innerHTML = "luuk";
        button4.onclick = this.buttonPress4;
    }
    Game.prototype.buttonPress1 = function () {
        document.getElementsByTagName("game")[0].innerHTML = "";
        new Act3();
    };
    Game.prototype.buttonPress2 = function () {
        document.getElementsByTagName("game")[0].innerHTML = "";
        new Act1();
    };
    Game.prototype.buttonPress4 = function () {
        document.getElementsByTagName("game")[0].innerHTML = "";
        new EnterBuilding();
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var hint = (function () {
    function hint() {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.hint1 = document.createElement("hinticon");
        this.hint2 = document.createElement("hinticon");
        this.hint3 = document.createElement("hinticon");
        this.hintbox1 = document.createElement("hintbox");
        this.hintbox2 = document.createElement("hintbox");
        this.hintbox3 = document.createElement("hintbox");
        this.game.appendChild(this.hint1);
        this.game.appendChild(this.hint2);
        this.game.appendChild(this.hint3);
        this.game.appendChild(this.hintbox1);
        this.game.appendChild(this.hintbox2);
        this.game.appendChild(this.hintbox3);
        this.hint1.style.width = "7vw";
        this.hint1.style.height = "7vh";
        this.hintbox1.style.width = "7vw";
        this.hintbox1.style.height = "7vh";
        this.hint1.addEventListener("click", function () {
            console.log("test test");
            new popup("Soms gaat het niet om wat je hoort, maar om wat je ziet.", 20, 45, 20);
            _this.hint1.remove();
        });
        this.hintbox1.addEventListener("click", function () {
            new popup("Weet je zeker dat je hint 1 wilt gebruiken? Deze hint helpt bij de puzzel van de 'Peercoach' deur, maar telt ook extra punten op bij je score. (minder punten is beter) \n \n deze pop-up komt maar 1 keer. De volgende keer dat je op de envelop klikt wordt de hint gebruikt.", 0, 7, 20);
            _this.hintbox1.remove();
            _this.hint1.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)';
        });
        this.hint2.style.width = "7vw";
        this.hint2.style.height = "7vh";
        this.hint2.style.transform = "translateX(7.5vw)";
        this.hintbox2.style.width = "7vw";
        this.hintbox2.style.height = "7vh";
        this.hintbox2.style.transform = "translateX(7.5vw)";
        this.hint2.addEventListener("click", function () {
            console.log("hint2");
            new popup("Lees de bevestiging mail van je telefonische afspraak met Sara Vonk nog eens zorgvuldig door.", 59, 45, 20);
            _this.hint2.remove();
        });
        this.hintbox2.addEventListener("click", function () {
            new popup("Weet je zeker dat je hint 2 wilt gebruiken? Deze hint helpt bij de puzzel van de 'Decaan' deur, maar telt ook extra punten op bij je score. (minder punten is beter) \n \n deze pop-up komt maar 1 keer. De volgende keer dat je op de envelop klikt wordt de hint gebruikt.", 7, 7, 20);
            _this.hintbox2.remove();
            _this.hint2.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)';
        });
        this.hint3.style.width = "7vw";
        this.hint3.style.height = "7vh";
        this.hint3.style.transform = "translateX(15vw)";
        this.hintbox3.style.width = "7vw";
        this.hintbox3.style.height = "7vh";
        this.hintbox3.style.transform = "translateX(15vw)";
        this.hint3.addEventListener("click", function () {
            console.log("hint3");
            new popup("Solliciteren is soms een numbers game.", 82, 45, 15);
            _this.hint3.remove();
        });
        this.hintbox3.addEventListener("click", function () {
            new popup("Weet je zeker dat je hint 3 wilt gebruiken? Deze hint helpt bij de puzzel van de 'Student aan zet' deur, maar telt ook extra punten op bij je score. (minder punten is beter) \n \n deze pop-up komt maar 1 keer. De volgende keer dat je op de envelop klikt wordt de hint gebruikt.", 14, 7, 20);
            _this.hintbox3.remove();
            _this.hint3.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)';
        });
    }
    return hint;
}());
var Languages = (function () {
    function Languages() {
        this.english = ['In order to start, we need to know what course you are taking. Please select your course from this list',
            'Choose education',
            'Choose language',
            'Now pick the location at which this course is taught',
        ];
        this.dutch = ['Om van start te gaan moeten we weten aan welke opleiding jij deel neemt. Kies uit deze lijst jouw opleiding',
            'Kies opleiding',
            'Kies taal',
            'Kies nu de locatie waar deze opleiding wordt gegeven',
        ];
    }
    return Languages;
}());
var LocatieSelectie = (function () {
    function LocatieSelectie() {
        this.background = document.createElement('backgroundLocation');
        this.game = document.getElementsByTagName('game')[0];
        this.educations = new Locations().collective;
        this.background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/map.png";
        this.game.appendChild(this.background);
        this.educationSetter();
        this.language();
    }
    LocatieSelectie.prototype.goBack = function () {
        this.game.innerHTML = "";
        new LocatieSelectie();
    };
    LocatieSelectie.prototype.language = function () {
        var _this = this;
        var language = document.createElement('languagePicker');
        language.innerHTML = new Languages()[localStorage.getItem('language')][2];
        var dutch = document.createElement('button');
        dutch.innerHTML = 'Nedelands';
        language.appendChild(dutch);
        var english = document.createElement('button');
        english.innerHTML = 'English';
        language.appendChild(english);
        document.getElementsByTagName('educationsetter')[0].appendChild(language);
        if (localStorage.getItem('language') == 'dutch') {
            dutch.style.backgroundColor = '#ff9c23';
        }
        if (localStorage.getItem('language') == 'english') {
            english.style.backgroundColor = '#ff9c23';
        }
        dutch.addEventListener('click', function () {
            localStorage.setItem('language', 'dutch');
            dutch.style.backgroundColor = '#ff9c23';
            english.style.backgroundColor = '';
            _this.goBack();
        });
        english.addEventListener('click', function () {
            localStorage.setItem('language', 'english');
            english.style.backgroundColor = '#ff9c23';
            dutch.style.backgroundColor = '';
            _this.goBack();
        });
    };
    LocatieSelectie.prototype.educationSetter = function () {
        var _this = this;
        this.educationSet = document.createElement('educationsetter');
        this.game.appendChild(this.educationSet);
        this.educationSet.innerHTML = new Languages()[localStorage.getItem('language')][0];
        this.educationSelect = document.createElement('select');
        var allEducations = new Array();
        for (var index1 = 0; index1 < this.educations.length; index1++) {
            for (var index2 = 0; index2 < this.educations[index1].opleidingen.length; index2++) {
                allEducations.push(this.educations[index1].opleidingen[index2]);
            }
        }
        allEducations = allEducations.sort();
        for (var education in allEducations) {
            var addToDrop = document.createElement('option');
            addToDrop.value = allEducations[education];
            addToDrop.innerHTML = allEducations[education];
            this.educationSelect.appendChild(addToDrop);
        }
        this.educationSet.appendChild(this.educationSelect);
        var thisLocation = document.createElement('button');
        thisLocation.innerHTML = new Languages()[localStorage.getItem('language')][1];
        thisLocation.addEventListener('click', function () { return _this.saveEducation(); });
        this.educationSet.appendChild(thisLocation);
    };
    LocatieSelectie.prototype.saveEducation = function () {
        var education = document.getElementsByTagName('select')[0].value;
        localStorage.setItem('education', education);
        this.locationPicker();
    };
    LocatieSelectie.prototype.locationPicker = function () {
        var _this = this;
        var back = document.createElement("button");
        back.id = 'backToLocatie';
        back.addEventListener('click', function () { return _this.goBack(); });
        this.game.appendChild(back);
        var map = document.createElement('map');
        this.game.appendChild(map);
        this.background.style.backgroundImage = "url(assets/akte_1_map@0.75x.png)";
        this.background.style.backgroundSize = "100% 100%";
        this.educationSet.remove();
        var locationTekst = document.createElement('locationTekst');
        locationTekst.innerHTML = new Languages()[localStorage.getItem('language')][3];
        this.game.appendChild(locationTekst);
        this.locationMarker(34.3, 67.9, 'academieplein', 0);
        this.locationMarker(46.3, 57, 'blaak', 1);
        this.locationMarker(62.7, 61.5, 'kralingse_zoom', 2);
        this.locationMarker(33.9, 78.5, 'lloyd_straat', 3);
        this.locationMarker(64, 60, 'max_euwelaan', 4);
        this.locationMarker(37, 65, 'museumpark_hoogbouw', 5);
        this.locationMarker(38, 63, 'museumpark_laagbouw', 6);
        this.locationMarker(33, 72.5, 'pieter_de_hoogweg', 7);
        this.locationMarker(49, 73, 'posthumalaan', 8);
        this.locationMarker(15.7, 82, 'rmd_rotterdam', 9);
        this.locationMarker(35, 67, 'rochussenstraat', 10);
        this.locationMarker(46, 58, 'wijnhaven_61', 11);
        this.locationMarker(45, 58.4, 'wijnhaven_99', 12);
        this.locationMarker(44.4, 58.7, 'wijnhaven_103', 13);
        this.locationMarker(43.8, 59, 'wijnhaven_107', 14);
    };
    LocatieSelectie.prototype.locationMarker = function (x, y, location, index) {
        var _this = this;
        var marker = document.createElement('pin');
        this.game.appendChild(marker);
        marker.style.transform = "translate(" + x + "vw," + y + "vh)";
        marker.addEventListener('click', function () {
            var yourEducation = localStorage.getItem('education');
            if (_this.educations[index].opleidingen.indexOf(yourEducation) > -1) {
                localStorage.setItem('location', _this.educations[index].location);
                _this.popupLoc('correct', location, _this.educations[index].locatieInfo);
            }
            else {
                _this.popupLoc('incorrect', location, _this.educations[index].locatieInfo);
            }
        });
    };
    LocatieSelectie.prototype.popupLoc = function (awnser, location, info) {
        if (document.getElementsByTagName('popupLocation')[0]) {
            document.getElementsByTagName('popupLocation')[0].remove();
        }
        var popupLocation = document.createElement('popupLocation');
        var locationImage = document.createElement('locationImage');
        this.game.appendChild(popupLocation);
        popupLocation.appendChild(locationImage);
        locationImage.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/" + location + ".png)";
        if (awnser == 'correct') {
            popupLocation.innerHTML += '<b>Correct!</b>Dit is de locatie van jouw opleiding.<br>';
            popupLocation.innerHTML += "<p><a target='_blank' href='" + info + "'>Klik hier</a>voor meer informatie over deze locatie.</p>";
            var goto = document.createElement('button');
            popupLocation.appendChild(goto);
            goto.innerHTML = "Loop naar binnen";
            goto.addEventListener('click', function () {
                document.getElementsByTagName("game")[0].innerHTML = "";
                new Act1;
            });
        }
        else {
            popupLocation.innerHTML += '<b>Incorrect!</b>Dit is niet de locatie van jouw opleiding';
            popupLocation.innerHTML += "<p><a target='_blank' href='" + info + "'>Klik hier</a>om te zien welke opleidingen hier wel gegeven worden.</p>";
            var goto = document.createElement('button');
            popupLocation.appendChild(goto);
            goto.innerHTML = "Probeer opnieuw";
            goto.addEventListener('click', function () {
                document.getElementsByTagName('popupLocation')[0].remove();
            });
        }
    };
    return LocatieSelectie;
}());
var Locations = (function () {
    function Locations() {
        this.academieplein = {
            location: "academieplein",
            opleidingen: [
                "Biologie en Medisch Laboratoriumonderzoek",
                "Bouwkunde",
                "Chemie",
                "Civiele Techniek",
                "Elektrotechniek",
                "Facility Management",
                "Logistics Management",
                "Ruimtelijke Ontwikkeling | Ruimtelijke Ordening en Planologie",
                "Technische Bedrijfskunde",
                "Vastgoed en Makelaardij",
                "Watermanagement",
                "Werktuigbouwkunde"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/academieplein/"
        };
        this.blaak = {
            location: "blaak",
            opleidingen: [
                "Arts & Crafts",
                "Autonome Beeldende Kunst",
                "Docent Beeldende Kunst en Vormgeving",
                "Vormgeving",
                "Interior Architecture: Research + Design",
                "Master of Arts in Fine Art and Design | Media Design",
                "Design",
                "Education in Arts"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/blaak/"
        };
        this.kralingse_zoom = {
            location: "krazingse_zoom",
            opleidingen: [
                "Accountancy",
                "Bedrijfskunde",
                "Business IT & Management",
                "Commerciële Economie | Creative Marketing & Sales",
                "Commerciële Economie | Global Marketing & Sales",
                "Commerciële Economie | Marketing of Social Business",
                "Finance & Control",
                "Finance, Tax and Advice",
                "Human Resource Management",
                "Ondernemerschap & Retail Management",
                "Master in Consultancy and Entrepreneurship",
                "Master in Finance and Accounting",
                "Master in International Supply Chain Management",
                "Commerciële Economie"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/kralingse-zoom/"
        };
        this.lloyd_straat = {
            location: "lloyd_straat",
            opleidingen: [
                "Chemische Technologie",
                "Logistics Engineering",
                "Maritiem Officier",
                "Maritieme Techniek"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/lloydstraat/"
        };
        this.max_euwelaan = {
            location: "max_euwelaan",
            opleidingen: [
                "Commerciële Economie | SportMarketing & Management"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/max-euwelaan/"
        };
        this.museumpark_hoogbouw = {
            location: "museumpark_hoogbouw",
            opleidingen: [
                "Accountancy",
                "Crossmediale Communicatie",
                "Engineering",
                "ICT Service Management",
                "ICT Internet of Things",
                "Integraal Bouwmanagement",
                "Logistiek Management",
                "Maintenance & Mechanics",
                "Management in de Zorg",
                "Management",
                "Onderwijsondersteuner Technisch beroepsonderwijs",
                "Pedagogisch Educatief Professional",
                "Sales & Accountmanagement",
                "Sociaal Financiële Dienstverlening",
                "Begeleidingskunde",
                "Leren en Innoveren",
                "Management en Innovatie in maatschappelijke organisaties",
                "Pedagogiek",
                "Ondernemen"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/museumpark-laagbouw/"
        };
        this.museumpark_laagbouw = {
            location: "museumpark_laagbouw",
            opleidingen: [
                "Academische pabo",
                "Lerarenopleiding Basisonderwijs (pabo)",
                "Lerarenopleiding VO/BVE Aardrijkskunde",
                "Lerarenopleiding VO/BVE Algemene Economie",
                "Lerarenopleiding VO/BVE Bedrijfseconomie",
                "Lerarenopleiding VO/BVE Biologie",
                "Lerarenopleiding VO/BVE Duits",
                "Lerarenopleiding VO/BVE Engels",
                "Lerarenopleiding VO/BVE Frans",
                "Lerarenopleiding VO/BVE Geschiedenis",
                "Lerarenopleiding VO/BVE Maatschappijleer",
                "Lerarenopleiding VO/BVE Natuurkunde",
                "Lerarenopleiding VO/BVE Nederlands",
                "Lerarenopleiding VO/BVE Technisch beroepsonderwijs",
                "Lerarenopleiding VO/BVE Wiskunde",
                "Social Work"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/mp-hoogbouw/"
        };
        this.pieter_de_hoogweg = {
            location: "pieter_de_hoogbouw",
            opleidingen: [
                "Industrieel Product Ontwerpen",
                "Mens en Techniek | Gezondheidszorg Technologie"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/pieter-de-hoochweg/"
        };
        this.posthumalaan = {
            location: "posthumalaan",
            opleidingen: [
                "International Business"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/posthumalaan/"
        };
        this.rmd_rotterdam = {
            location: "rmd_rotterdam",
            opleidingen: [
                "Automotive",
                "River Delta Development"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/rdm-campus/"
        };
        this.rochussenstraat = {
            location: "rochussenstraat",
            opleidingen: [
                "Ergotherapie",
                "Fysiotherapie",
                "Logopedie",
                "Medische Hulpverlening",
                "Verloskunde",
                "Verpleegkunde",
                "Onderwijsondersteuner Gezondheidszorg en Welzijn",
                "Leraar Gezondheidszorg en Welzijn",
                "Kinderfysiotherapie",
                "Manuele Therapie",
                "Sportfysiotherapie",
                "Advanced Nursing Practice",
                "Physician Assistant (algemeen)",
                "Physician Assistant (Klinisch Verloskundige)"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/rochussenstraat/"
        };
        this.wijnhaven_61 = {
            location: "wijnhaven_61",
            opleidingen: [
                "Leisure & Events Management"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/wijnhaven-61/"
        };
        this.wijnhaven_99 = {
            location: "wijnhaven_99",
            opleidingen: [
                "Creative Media and Game Technologies"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/wijnhaven-99/"
        };
        this.wijnhaven_103 = {
            location: "wijnhaven_103",
            opleidingen: [
                ""
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/wijnhaven-103/"
        };
        this.wijnhaven_107 = {
            location: "wijnhaven_107",
            opleidingen: [
                "Communicatie",
                "Communication and Multimedia Design",
                "Informatica",
                "Technische Informatica"
            ],
            locatieInfo: "https://www.hogeschoolrotterdam.nl/hogeschool/locaties/wijnhaven-107/"
        };
        this.collective = [this.academieplein, this.blaak, this.kralingse_zoom, this.lloyd_straat, this.max_euwelaan, this.museumpark_hoogbouw, this.museumpark_laagbouw, this.pieter_de_hoogweg, this.posthumalaan, this.rmd_rotterdam, this.rochussenstraat, this.wijnhaven_61, this.wijnhaven_99, this.wijnhaven_103, this.wijnhaven_107];
    }
    return Locations;
}());
var Osiris = (function () {
    function Osiris() {
        this.input1 = document.createElement("input");
        this.input1Save = "";
        this.button1 = document.createElement("button");
        this.button2 = document.createElement("button");
        this.button3 = document.createElement("button");
        this.button4 = document.createElement("button");
        this.button5 = document.createElement("button");
        this.button6 = document.createElement("button");
        this.img = document.createElement('img');
        this.input2 = document.createElement("input");
        this.input2Save = "";
        this.createOsirisScreen();
    }
    Osiris.prototype.createOsirisScreen = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        var background = document.createElement("backgroundact2");
        background.style.backgroundImage = "url(assets/osiris_1.png)";
        game2.appendChild(background);
        game2.appendChild(this.input1);
        this.input1.style.width = "17.1vw";
        this.input1.style.transform = "translate(14.1vw, 20.7vh)";
        this.input1.style.fontSize = "17px";
        this.input1.style.paddingLeft = "0.4vw";
        this.input1.value = this.input1Save;
        this.input1.id = "input1";
        game2.appendChild(this.button1);
        this.button1.style.width = "6.6vw";
        this.button1.style.height = "3.3vh";
        this.button1.style.transform = "translate(14.1vw, 26.6vh)";
        this.button1.style.opacity = "0%";
        this.button1.addEventListener("click", function () { return _this.loginCheck(); });
    };
    Osiris.prototype.loginCheck = function () {
        console.log("button 1 is pressed");
        var shape1 = document.getElementById("input1").value;
        if (shape1 == "0200798") {
            console.log("dit klopt");
            this.login();
        }
        else {
            console.log("dit klopt niet");
        }
    };
    Osiris.prototype.login = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        game2.removeChild(this.button1);
        game2.removeChild(this.input1);
        var background = document.createElement("backgroundact2");
        background.style.backgroundImage = "url(assets/osiris_2.png)";
        game2.appendChild(background);
        game2.appendChild(this.button2);
        this.button2.style.width = "6.6vw";
        this.button2.style.height = "3.3vh";
        this.button2.style.transform = "translate(68.7vw, 8.4vh)";
        this.button2.style.opacity = "0%";
        this.button2.addEventListener("click", function () { return _this.onderwijs(); });
        var myloc = new Image();
        myloc.useMap = "/docs/assets/arrow.png";
        this.img.setAttribute('src', myloc.useMap);
        this.img.setAttribute('style', "height:5vh;width:2vw;transform:translate(71vw, 13.5vh);");
        game2.appendChild(this.img);
    };
    Osiris.prototype.onderwijs = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        game2.removeChild(this.img);
        game2.removeChild(this.button2);
        var background = document.createElement("backgroundact2");
        background.style.backgroundImage = "url(assets/osiris_3.png)";
        game2.appendChild(background);
        game2.appendChild(this.input2);
        this.input2.style.width = "17.2vw";
        this.input2.style.transform = "translate(13.9vw, 30.8vh)";
        this.input2.style.fontSize = "17px";
        this.input2.style.paddingLeft = "0.4vw";
        this.input2.value = this.input2Save;
        this.input2.id = "input2";
        game2.appendChild(this.button3);
        this.button3.style.width = "4vw";
        this.button3.style.height = "2.5vh";
        this.button3.style.transform = "translate(1vw, 86vh)";
        this.button3.style.opacity = "0%";
        this.button3.addEventListener("click", function () { return _this.keuzeCheck(); });
    };
    Osiris.prototype.keuzeCheck = function () {
        console.log("button 1 is pressed");
        var shape1 = document.getElementById("input2").value;
        var shape2 = document.getElementById("input2").value;
        if (shape1 == "Sleutel tot succes" || shape2 == "sleutel tot succes") {
            console.log("dit klopt");
            this.keuzeRight();
        }
        else {
            console.log("dit klopt niet");
            this.keuzeWrong();
        }
    };
    Osiris.prototype.keuzeRight = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        var background = document.createElement("backgroundact2");
        background.style.backgroundImage = "url(assets/osiris_5.png)";
        game2.appendChild(background);
        game2.appendChild(this.button4);
        this.button4.style.width = "4vw";
        this.button4.style.height = "3vh";
        this.button4.style.transform = "translate(41.8vw, 37.8vh)";
        this.button4.style.opacity = "0%";
        this.button4.addEventListener("click", function () { return _this.keuzevak(); });
    };
    Osiris.prototype.keuzeWrong = function () {
        var game2 = document.getElementsByTagName("game2")[0];
        var background = document.createElement("backgroundact2");
        background.style.backgroundImage = "url(assets/osiris_4.png)";
        game2.appendChild(background);
    };
    Osiris.prototype.onderwijsAgain = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        var background = document.createElement("backgroundact2");
        background.style.backgroundImage = "url(assets/osiris_3.png)";
        game2.appendChild(background);
        game2.appendChild(this.input2);
        this.input2.style.width = "17.2vw";
        this.input2.style.transform = "translate(13.9vw, 30.8vh)";
        this.input2.style.fontSize = "17px";
        this.input2.style.paddingLeft = "0.4vw";
        this.input2.value = this.input2Save;
        this.input2.id = "input2";
        game2.appendChild(this.button3);
        this.button3.style.width = "4vw";
        this.button3.style.height = "2.5vh";
        this.button3.style.transform = "translate(1vw, 86vh)";
        this.button3.style.opacity = "0%";
        this.button3.addEventListener("click", function () { return _this.keuzeCheck(); });
    };
    Osiris.prototype.keuzevak = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        var background = document.createElement("backgroundact2");
        background.style.backgroundImage = "url(assets/osiris_6.png)";
        game2.appendChild(background);
        game2.removeChild(this.input2);
        game2.removeChild(this.button4);
        game2.appendChild(this.button5);
        this.button5.style.width = "10.5vw";
        this.button5.style.height = "2vh";
        this.button5.style.transform = "translate(64.5vw, 18.8vh)";
        this.button5.style.opacity = "0%";
        this.button5.addEventListener("click", function () { return _this.signIn(); });
    };
    Osiris.prototype.signIn = function () {
        var _this = this;
        var game2 = document.getElementsByTagName("game2")[0];
        var background = document.createElement("backgroundact2");
        background.style.backgroundImage = "url(assets/osiris_7.png)";
        game2.appendChild(background);
        game2.removeChild(this.button5);
        game2.appendChild(this.button6);
        this.button6.style.width = "5vw";
        this.button6.style.height = "2.5vh";
        this.button6.style.transform = "translate(6.5vw, 63.6vh)";
        this.button6.style.opacity = "0%";
        this.button6.addEventListener("click", function () { return _this.definitief(); });
    };
    Osiris.prototype.definitief = function () {
        var game2 = document.getElementsByTagName("game2")[0];
        game2.removeChild(this.button6);
        var background = document.createElement("backgroundact2");
        background.style.backgroundImage = "url(assets/osiris_8.png)";
        game2.appendChild(background);
    };
    return Osiris;
}());
window.addEventListener("load", function () { return new Osiris(); });
var Pause = (function () {
    function Pause(act, next) {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.pauseTimer = new Timer();
        this.game.innerHTML = '';
        this.pauseTimer.startPause();
        var background = document.createElement('background');
        background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/pauze.jpg)";
        this.game.appendChild(background);
        var title = document.createElement('congratulations');
        var subTitle = document.createElement('akteGehaald');
        var message = document.createElement('pauseMessage');
        var nextButton = document.createElement('next');
        title.innerHTML = "Gefeliciteerd";
        subTitle.innerHTML = "Je hebt akte " + act + " gehaald";
        message.innerHTML = "Je kunt nu even pauze nemen<br>Tijdens de pauze staat de tijd stil<br>Druk op de knop om te beginnen met akte " + (act + 1);
        nextButton.innerHTML = "Begin akte " + (act + 1);
        this.game.appendChild(title);
        title.appendChild(subTitle);
        this.game.appendChild(message);
        message.appendChild(nextButton);
        setTimeout(function () {
            nextButton.style.filter = "grayscale(0%)";
            nextButton.style.cursor = "pointer";
            nextButton.addEventListener('click', function () {
                _this.pauseTimer.endPause();
                _this.game.innerHTML = '';
                eval("new " + next + "()");
            });
        }, 2000);
    }
    return Pause;
}());
var popup = (function () {
    function popup(text, posX, posY, width) {
        var _this = this;
        this.field = document.createElement('popup');
        this.game = document.getElementsByTagName('game')[0];
        this.game.appendChild(this.field);
        this.field.innerText = text;
        this.field.style.position = "absolute";
        this.field.style.overflow = "hidden";
        this.field.style.transform = "translate(" + posX + "vw," + posY + "vh)";
        this.field.style.width = width.toString() + "vw";
        this.field.style.height = "auto";
        this.field.style.borderRadius = "20px";
        this.field.style.backgroundColor = "#ffb911";
        this.field.style.fontSize = "1vw";
        this.field.style.zIndex = "2";
        this.field.style.padding = "0.5vw";
        this.field.style.boxShadow = "0.3vw 1vh";
        this.field.addEventListener("click", function () {
            _this.field.remove();
        });
    }
    return popup;
}());
var StartScreem = (function () {
    function StartScreem() {
        var _this = this;
        this.game = document.getElementsByTagName('game')[0];
        this.background = document.createElement('background');
        if (!localStorage.getItem('language')) {
            localStorage.setItem('language', 'dutch');
        }
        this.background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/startScherm.png)";
        this.game.appendChild(this.background);
        var start = document.createElement('startgame');
        this.game.appendChild(start);
        start.addEventListener('click', function () {
            _this.game.innerHTML = "";
            new LocatieSelectie();
            new Timer().startTimer();
        });
    }
    return StartScreem;
}());
window.addEventListener('load', function () { return new StartScreem(); });
var Timer = (function () {
    function Timer() {
    }
    Timer.prototype.startTimer = function () {
        if (!localStorage.getItem('start')) {
            localStorage.setItem('start', new Date().getTime().toString());
        }
        if (!localStorage.getItem('pause')) {
            localStorage.setItem('pause', '0');
        }
        if (!localStorage.getItem('bonus')) {
            localStorage.setItem('bonus', '0');
        }
    };
    Timer.prototype.startPause = function () {
        this.pauseStart = new Date().getTime();
    };
    Timer.prototype.endPause = function () {
        this.pauseEnd = new Date().getTime();
        var currentPause = parseInt(localStorage.getItem('pause'));
        var thisPause = this.pauseEnd - this.pauseStart;
        var newPause = thisPause + currentPause;
        localStorage.setItem('pause', newPause.toString());
    };
    Timer.prototype.addBonus = function (point) {
        var currentBonus = parseInt(localStorage.getItem('bonus'));
        var newBonus = currentBonus + point;
        localStorage.setItem('bonus', newBonus);
    };
    Timer.prototype.endTimer = function () {
        if (!localStorage.getItem('end')) {
            localStorage.setItem('end', new Date().getTime().toString());
        }
    };
    Timer.prototype.score = function () {
        var start = parseInt(localStorage.getItem('start'));
        var end = parseInt(localStorage.getItem('end'));
        var pause = parseInt(localStorage.getItem('pause'));
        var bonus = parseInt(localStorage.getItem('bonus'));
        var score = Math.floor((end - start - pause) / 1000) - bonus;
        return score;
    };
    Timer.prototype.resetTimer = function () {
        localStorage.removeItem('start');
        localStorage.removeItem('end');
        localStorage.removeItem('pause');
        localStorage.removeItem('bonus');
    };
    return Timer;
}());
window.addEventListener('load', function () { return new Timer(); });
//# sourceMappingURL=main.js.map