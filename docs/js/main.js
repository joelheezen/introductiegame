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
        this.wrong_div = document.createElement("div");
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
            var game = document.getElementsByTagName("game")[0];
            game.appendChild(this.wrong_div);
            this.wrong_div.style.width = "13.7vw";
            this.wrong_div.style.height = "5.7vh";
            this.wrong_div.style.transform = "translate(10vw, 39.2vh)";
            this.wrong_div.style.borderRadius = "25px";
            this.wrong_div.style.border = "none";
            this.wrong_div.style.fontSize = "20px";
            this.wrong_div.style.paddingLeft = "1vw";
            this.wrong_div.style.fontFamily = "Arial Black";
            this.wrong_div.style.textTransform = "uppercase";
            this.wrong_div.style.zIndex = "999";
            this.wrong_div.id = "input1";
            var myloc = new Image();
            myloc.useMap = "/docs/assets/fout_antwoord.png";
            var img = document.createElement('img');
            img.setAttribute('src', myloc.useMap);
            img.setAttribute('style', "height:25vh;width:30vw;transform:translate(28.3vw, 26.5vh);cursor:pointer;");
            game.appendChild(img);
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
        window.open('https://webmail.hr.nl', '_blank');
    };
    Act1.prototype.osiris = function () {
        console.log("osiris is aangeklikt");
    };
    Act1.prototype.rooster = function () {
        console.log("rooster is aangeklikt");
        var background = document.getElementsByTagName("backgroundact1")[0];
        var game = document.getElementsByTagName("game")[0];
        var button_next = document.createElement("button");
        game.appendChild(button_next);
        var button_previous = document.createElement("button");
        game.appendChild(button_previous);
        background.style.backgroundImage = "url(assets/rooster_popup.png)";
        background.style.zIndex = "1";
        button_next.style.width = "9.2vw";
        button_next.style.height = "5vh";
        button_next.style.transform = "translate(59.8vw, 64vh)";
        button_next.style.opacity = "0%";
        button_next.style.zIndex = "999";
        button_next.addEventListener("click", function () {
            background.style.backgroundImage = "url(assets/plattegrond.jpg)";
            button_next.remove();
            button_previous.remove();
            background.style.zIndex = "-1";
            window.open('https://google.nl', '_blank');
        });
        button_previous.style.width = "6.2vw";
        button_previous.style.height = "5vh";
        button_previous.style.transform = "translate(52.6vw, 64vh)";
        button_previous.style.opacity = "0%";
        button_previous.style.zIndex = "999";
        button_previous.addEventListener("click", function () {
            background.style.backgroundImage = "url(assets/plattegrond.jpg)";
            button_previous.remove();
            button_next.remove();
            background.style.zIndex = "-1";
        });
    };
    Act1.prototype.studentenServiceCenter = function () {
        console.log("ssc is aangeklikt");
        var background = document.getElementsByTagName("backgroundact1")[0];
        var game = document.getElementsByTagName("game")[0];
        var button_next = document.createElement("button");
        game.appendChild(button_next);
        background.style.backgroundImage = "url(assets/ssc_popup.png)";
        background.style.zIndex = "1";
        button_next.style.width = "9.2vw";
        button_next.style.height = "5vh";
        button_next.style.transform = "translate(59.8vw, 64vh)";
        button_next.style.opacity = "0%";
        button_next.style.zIndex = "999";
        button_next.addEventListener("click", function () {
            background.style.backgroundImage = "url(assets/plattegrond.jpg)";
            button_next.remove();
            background.style.zIndex = "-1";
        });
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
            button.remove();
        });
        img.style.position = "absolute";
        var button = document.createElement("button");
        game.appendChild(button);
        button.style.width = "20.3vw";
        button.style.height = "18vh";
        button.style.transform = "translate(61.2vw, 63.8vh)";
        button.style.opacity = "0%";
        button.addEventListener("click", function () {
            button.style.display = "none";
            game.removeChild(img);
            button.remove();
        });
    };
    Act1.prototype.lms = function () {
        console.log("lms is aangeklikt");
        var background = document.getElementsByTagName("backgroundact1")[0];
        var game = document.getElementsByTagName("game")[0];
        var button_next = document.createElement("button");
        game.appendChild(button_next);
        background.style.backgroundImage = "url(assets/lms_popup.png)";
        background.style.zIndex = "1";
        button_next.style.width = "9.2vw";
        button_next.style.height = "5vh";
        button_next.style.transform = "translate(59.8vw, 64vh)";
        button_next.style.opacity = "0%";
        button_next.style.zIndex = "999";
        button_next.addEventListener("click", function () {
            background.style.backgroundImage = "url(assets/plattegrond.jpg)";
            button_next.remove();
            background.style.zIndex = "-1";
            window.open('https://lms.hr.nl', '_blank');
        });
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
        var _this = this;
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
        this.testbutton = document.createElement("testbutton");
        var background = document.createElement("backgroundact2");
        this.game.appendChild(background);
        this.createFolderItems();
        this.levelSelect();
        this.codeInput();
        this.codeEind();
        this.doorNames();
        this.game.appendChild(this.testbutton);
        this.testbutton.style.width = "3vw";
        this.testbutton.style.height = "5vh";
        this.testbutton.style.backgroundColor = "black";
        this.testbutton.addEventListener("click", function () {
            _this.codeEind();
            _this.localStorageUpdate();
        });
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
        this.doorName1.style.fontSize = "2vh";
        this.doorName1.style.fontFamily = "Arial Black";
        this.doorName1.innerHTML = "Vertrouwenspersoon";
        this.doorName2.style.width = '11.77vw';
        this.doorName2.style.height = '3.65vh';
        this.doorName2.style.transform = "translate(24.65vw, 26.6vh)";
        this.doorName2.style.textAlign = 'center';
        this.doorName2.style.paddingTop = '0.4vh';
        this.doorName2.style.fontSize = "2.5vh";
        this.doorName2.innerHTML = "Peercoach";
        this.doorName3.style.width = '11.77vw';
        this.doorName3.style.height = '3.65vh';
        this.doorName3.style.transform = "translate(44.36vw, 26.6vh)";
        this.doorName3.style.textAlign = 'center';
        this.doorName3.style.paddingTop = '0vh';
        this.doorName3.style.fontSize = "3vh";
        this.doorName3.innerHTML = "SLC";
        this.doorName4.style.width = '11.77vw';
        this.doorName4.style.height = '3.65vh';
        this.doorName4.style.transform = "translate(64.26vw, 26.6vh)";
        this.doorName4.style.textAlign = 'center';
        this.doorName4.style.paddingTop = '0vh';
        this.doorName4.style.fontSize = "3vh";
        this.doorName4.innerHTML = "Decaan";
        this.doorName5.style.width = '11.77vw';
        this.doorName5.style.height = '3.65vh';
        this.doorName5.style.transform = "translate(84vw, 26.1vh)";
        this.doorName5.style.textAlign = 'center';
        this.doorName5.style.paddingTop = '0.9vh';
        this.doorName5.style.fontSize = "2.6vh";
        this.doorName5.innerHTML = "Student aan zet";
    };
    Act2.prototype.codeInput = function () {
        this.game.appendChild(this.input1);
        this.input1.style.width = "2vw";
        this.input1.style.height = "5.7vh";
        this.input1.style.transform = "translate(9.1vw, 36.25vh)";
        this.input1.style.border = "none";
        this.input1.style.fontSize = "30px";
        this.input1.maxLength = 1;
        this.input1.style.paddingLeft = "0.8vw";
        this.input1.style.fontFamily = "Arial Black";
        this.input1.style.textTransform = "uppercase";
        this.input1.value = localStorage.getItem(this.number1);
        this.input1.id = "input1";
        this.game.appendChild(this.input2);
        this.input2.style.width = "2.4vw";
        this.input2.style.height = "5.7vh";
        this.input2.style.transform = "translate(29vw, 36.25vh)";
        this.input2.style.border = "none";
        this.input2.style.fontSize = "30px";
        this.input2.maxLength = 1;
        this.input2.style.paddingLeft = "0.8vw";
        this.input2.style.fontFamily = "Arial Black";
        this.input2.style.textTransform = "uppercase";
        this.input2.value = localStorage.getItem(this.number2);
        this.input2.id = "input2";
        this.game.appendChild(this.input3);
        this.input3.style.width = "2vw";
        this.input3.style.height = "5.7vh";
        this.input3.style.transform = "translate(48.5vw, 36.25vh)";
        this.input3.style.border = "none";
        this.input3.style.fontSize = "30px";
        this.input3.maxLength = 1;
        this.input3.style.paddingLeft = "0.8vw";
        this.input3.style.fontFamily = "Arial Black";
        this.input3.style.textTransform = "uppercase";
        this.input3.value = localStorage.getItem(this.number3);
        this.input3.id = "input3";
        this.game.appendChild(this.input4);
        this.input4.style.width = "2vw";
        this.input4.style.height = "5.7vh";
        this.input4.style.transform = "translate(68.4vw, 36.25vh)";
        this.input4.style.border = "none";
        this.input4.style.fontSize = "30px";
        this.input4.maxLength = 1;
        this.input4.style.paddingLeft = "0.8vw";
        this.input4.style.fontFamily = "Arial Black";
        this.input4.style.textTransform = "uppercase";
        this.input4.value = localStorage.getItem(this.number4);
        this.input4.id = "input4";
        this.game.appendChild(this.input5);
        this.input5.style.width = "2vw";
        this.input5.style.height = "5.7vh";
        this.input5.style.transform = "translate(88.3vw, 36.25vh)";
        this.input5.style.border = "none";
        this.input5.style.fontSize = "30px";
        this.input5.maxLength = 1;
        this.input5.style.paddingLeft = "0.8vw";
        this.input5.style.fontFamily = "Arial Black";
        this.input5.style.textTransform = "uppercase";
        this.input5.value = localStorage.getItem(this.number5);
        this.input5.id = "input5";
    };
    Act2.prototype.localStorageUpdate = function () {
        localStorage.setItem(this.number1, document.getElementById("input1").value);
        localStorage.setItem(this.number2, document.getElementById("input2").value);
        localStorage.setItem(this.number3, document.getElementById("input3").value);
        localStorage.setItem(this.number4, document.getElementById("input4").value);
        localStorage.setItem(this.number5, document.getElementById("input5").value);
    };
    Act2.prototype.codeEind = function () {
        var codeString = document.getElementById("input1").value +
            document.getElementById("input2").value +
            document.getElementById("input3").value +
            document.getElementById("input4").value +
            document.getElementById("input5").value;
        console.log(codeString);
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
        this.folderItem1.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_getallen.png)';
        this.folderItem1.style.transform = "translate(20vw,72vh)";
        this.folderItem1.style.width = '8.3vw';
        this.folderItem1.style.height = '8.3vh';
        this.folderItem1.addEventListener("click", function () {
            console.log("folder1");
            new Act2folder1;
        });
        this.folderItem2.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_studie.png)';
        this.folderItem2.style.transform = "translate(44vw,87vh)";
        this.folderItem2.style.width = '12vw';
        this.folderItem2.style.height = '12vh';
        this.folderItem2.addEventListener("click", function () {
            console.log("folder2");
            new Act2folder2;
        });
        this.folderItem3.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_solliciteren.png)';
        this.folderItem3.style.transform = "translate(60vw,70vh)";
        this.folderItem3.style.width = '8vw';
        this.folderItem3.style.height = '8vh';
        this.folderItem3.addEventListener("click", function () {
            console.log("folder3");
            new Act2folder3;
        });
        this.folderItem4.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_coia.png)';
        this.folderItem4.style.transform = "translate(3vw,83vh)";
        this.folderItem4.style.width = '10vw';
        this.folderItem4.style.height = '10vh';
        this.folderItem4.addEventListener("click", function () {
            console.log("folder4");
            new Act2folder4;
        });
        this.folderItem5.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_morsecode.png)';
        this.folderItem5.style.transform = "translate(80vw,78vh)";
        this.folderItem5.style.width = '10vw';
        this.folderItem5.style.height = '10vh';
        this.folderItem5.addEventListener("click", function () {
            console.log("folder5");
            new Act2folder5;
        });
        this.folderItem6.style.backgroundImage = 'url(assets/Akte2/Postervormen&kleuren.jpg)';
        this.folderItem6.style.transform = "translate(58.1vw,30vh)";
        this.folderItem6.style.width = '4.45vw';
        this.folderItem6.style.height = '11.6vh';
        this.folderItem6.addEventListener("click", function () {
            console.log("folder6");
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
            console.log("folder removed");
            _this.folder.remove();
        });
    };
    folders.prototype.removeMe = function () {
        this.folder.remove();
    };
    return folders;
}());
var Act2folder1 = (function (_super) {
    __extends(Act2folder1, _super);
    function Act2folder1() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer1getallen.jpg)';
        _this.folder.style.backgroundSize = '50% 50%';
        return _this;
    }
    return Act2folder1;
}(folders));
var Act2folder2 = (function (_super) {
    __extends(Act2folder2, _super);
    function Act2folder2() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer2HulpbijStudie.jpg)';
        _this.folder.style.backgroundSize = '40% 90%';
        return _this;
    }
    return Act2folder2;
}(folders));
var Act2folder3 = (function (_super) {
    __extends(Act2folder3, _super);
    function Act2folder3() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer3WorkshopSolliciteren.jpg)';
        _this.folder.style.backgroundSize = '30% 90%';
        return _this;
    }
    return Act2folder3;
}(folders));
var Act2folder4 = (function (_super) {
    __extends(Act2folder4, _super);
    function Act2folder4() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer4COIAinfo.png)';
        _this.folder.style.backgroundSize = '45% 80%';
        return _this;
    }
    return Act2folder4;
}(folders));
var Act2folder5 = (function (_super) {
    __extends(Act2folder5, _super);
    function Act2folder5() {
        var _this = _super.call(this) || this;
        _this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer5MorseCodeAlfabet.jpg)';
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
            var bg = document.getElementsByTagName("videoBackground")[0];
            vid.remove();
            bg.remove();
            new Act2;
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
        playButton.style.opacity = "0%";
        playButton.addEventListener("click", function () { return _this.togglePlay(); });
        this.video.src = 'assets/Akte3/startAct3.mp4';
        this.video.autoplay = true;
        this.video.controls = false;
        this.video.playbackRate = 16;
        this.video.onended = function () {
            var _this = this;
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
            game.appendChild(button1);
            game.appendChild(button2);
            game.appendChild(button3);
            game.appendChild(button4);
            game.appendChild(button5);
            game.appendChild(button6);
            button1.style.width = "7.2vw";
            button1.style.height = "14.4vh";
            button1.style.transform = "translate(31vw, 31.8vh)";
            button1.style.opacity = "30%";
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
                var url = "url(assets/PRODUCTION/PRODUCTION/ASSETS/blaak.png)";
                var url1 = url;
                var url2 = url;
                var url3 = url;
                var url4 = url;
                var url5 = url;
                var url6 = url;
                var url7 = url;
                var url8 = url;
                var url9 = url;
                var url10 = url;
                var url11 = url;
                var url12 = url;
                var url13 = url;
                var text1 = "Hofpleinfontein";
                var text2 = "Rotterdam CS";
                var text3 = "Feyenoordstadion";
                var text4 = "kuntswerk 'De Belichaamde Eenheid'";
                var text5 = "Erasmusbrug";
                var text6 = "Station Blaak";
                var text7 = "Erasmus Medisch Centrum";
                var text8 = "Binnenrotte plein";
                var text9 = "Markthal";
                var text10 = "Centrale Bibliotheek";
                var text11 = "Beurstraverse";
                var text12 = "Blaaktoren";
                var text13 = "Kunstwerk 'De gestileerde bloem'";
                pin1.style.transform = "translate(30.5vw, 35.7vh)";
                pin1.style.zIndex = "3";
                pin1.addEventListener("mouseover", function () {
                    console.log("in");
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url1;
                    pinPopup.style.transform = "translate(23vw, 1vh)";
                    pinPopup.innerHTML += text1;
                });
                pin1.addEventListener("mouseout", function () {
                    console.log("out");
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin2.style.transform = "translate(26.2vw, 34.8vh)";
                pin2.style.zIndex = "3";
                pin2.addEventListener("mouseover", function () {
                    console.log("in");
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url2;
                    pinPopup.style.transform = "translate(18vw, 0.7vh)";
                    pinPopup.innerHTML += text2;
                });
                pin2.addEventListener("mouseout", function () {
                    console.log("out");
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin3.style.transform = "translate(50.3vw, 75.7vh)";
                pin3.style.zIndex = "3";
                pin3.addEventListener("mouseover", function () {
                    console.log("in");
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url3;
                    pinPopup.style.transform = "translate(43vw, 42vh)";
                    pinPopup.innerHTML += text3;
                });
                pin3.addEventListener("mouseout", function () {
                    console.log("out");
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin4.style.transform = "translate(28.3vw, 36.7vh)";
                pin4.style.zIndex = "3";
                pin4.addEventListener("mouseover", function () {
                    console.log("in");
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url4;
                    pinPopup.style.transform = "translate(21vw, 2vh)";
                    pinPopup.innerHTML += text4;
                });
                pin4.addEventListener("mouseout", function () {
                    console.log("out");
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin5.style.transform = "translate(34.3vw, 56.7vh)";
                pin5.style.zIndex = "3";
                pin5.addEventListener("mouseover", function () {
                    console.log("in");
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url5;
                    pinPopup.style.transform = "translate(27vw, 23vh)";
                    pinPopup.innerHTML += text5;
                });
                pin5.addEventListener("mouseout", function () {
                    console.log("out");
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin6.style.transform = "translate(35.6vw, 42vh)";
                pin6.style.zIndex = "3";
                pin6.addEventListener("mouseover", function () {
                    console.log("in");
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url6;
                    pinPopup.style.transform = "translate(28vw, 7.7vh)";
                    pinPopup.innerHTML += text6;
                });
                pin6.addEventListener("mouseout", function () {
                    console.log("out");
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin7.style.transform = "translate(25.8vw, 55.1vh)";
                pin7.style.zIndex = "3";
                pin7.addEventListener("mouseover", function () {
                    console.log("in");
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url7;
                    pinPopup.style.transform = "translate(18.5vw, 21vh)";
                    pinPopup.innerHTML += text7;
                });
                pin7.addEventListener("mouseout", function () {
                    console.log("out");
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin8.style.transform = "translate(34.3vw, 38.7vh)";
                pin8.style.zIndex = "3";
                pin8.addEventListener("mouseover", function () {
                    console.log("in");
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url8;
                    pinPopup.style.transform = "translate(27vw, 5.3vh)";
                    pinPopup.innerHTML += text8;
                });
                pin8.addEventListener("mouseout", function () {
                    console.log("out");
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin9.style.transform = "translate(32.2vw, 40.7vh)";
                pin9.style.zIndex = "3";
                pin9.addEventListener("mouseover", function () {
                    console.log("in");
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url9;
                    pinPopup.style.transform = "translate(26.3vw, 5.2vh)";
                    pinPopup.innerHTML += text9;
                });
                pin9.addEventListener("mouseout", function () {
                    console.log("out");
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin10.style.transform = "translate(36.5vw, 39.2vh)";
                pin10.style.zIndex = "3";
                pin10.addEventListener("mouseover", function () {
                    console.log("in");
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url10;
                    pinPopup.style.transform = "translate(29.9vw, 5.7vh)";
                    pinPopup.innerHTML += text10;
                });
                pin10.addEventListener("mouseout", function () {
                    console.log("out");
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin11.style.transform = "translate(30.4vw, 41.3vh)";
                pin11.style.zIndex = "3";
                pin11.addEventListener("mouseover", function () {
                    console.log("in");
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url11;
                    pinPopup.style.transform = "translate(24vw, 10vh)";
                    pinPopup.innerHTML += text11;
                });
                pin11.addEventListener("mouseout", function () {
                    console.log("out");
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin12.style.transform = "translate(33.8vw, 41.7vh)";
                pin12.style.zIndex = "3";
                pin12.addEventListener("mouseover", function () {
                    console.log("in");
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url12;
                    pinPopup.style.transform = "translate(27vw, 10vh)";
                    pinPopup.innerHTML += text12;
                });
                pin12.addEventListener("mouseout", function () {
                    console.log("out");
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                pin13.style.transform = "translate(31.7vw, 43.6vh)";
                pin13.style.zIndex = "3";
                pin13.addEventListener("mouseover", function () {
                    console.log("in");
                    var pinPopup = document.createElement("pinPopup");
                    var mapArea = document.getElementsByTagName("mapArea")[0];
                    mapArea.appendChild(pinPopup);
                    var pinPopupImage = document.createElement("pinPopupImage");
                    pinPopup.appendChild(pinPopupImage);
                    pinPopupImage.style.backgroundImage = "" + url13;
                    pinPopup.style.transform = "translate(25vw, 11vh)";
                    pinPopup.innerHTML += text13;
                });
                pin13.addEventListener("mouseout", function () {
                    console.log("out");
                    var pinPopup = document.getElementsByTagName("pinPopup")[0];
                    pinPopup.remove();
                });
                var button = document.createElement("button");
                game.appendChild(button);
                button.style.width = "100vw";
                button.style.height = "100vh";
                button.style.opacity = "0%";
                button.style.zIndex = "1";
                button.style.position = "absolute";
                button.addEventListener("click", function () {
                    popup.remove();
                    button.remove();
                    mapArea.remove();
                });
            });
            button2.style.width = "11.5vw";
            button2.style.height = "14.3vh";
            button2.style.transform = "translate(44.4vw, 37.6vh)";
            button2.style.opacity = "30%";
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
                button.style.opacity = "0%";
                button.style.zIndex = "1";
                button.style.position = "absolute";
                button.addEventListener("click", function () {
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
            });
            button3.style.width = "16.3vw";
            button3.style.height = "17.9vh";
            button3.style.transform = "translate(68.7vw, 54.4vh)";
            button3.style.opacity = "30%";
            button3.addEventListener("click", function () {
                var win = window.open("assets/Akte3/RKvVboekje2020.pdf");
                win.focus();
            });
            button4.style.width = "10.5vw";
            button4.style.height = "11vh";
            button4.style.transform = "translate(27.5vw, 65.9vh)";
            button4.style.opacity = "30%";
            button4.addEventListener("click", function () {
                var game = document.getElementsByTagName("game")[0];
                var popup = document.createElement("popup");
                game.appendChild(popup);
                popup.style.backgroundImage = "url(assets/Akte3/woordzoeker.png)";
                popup.style.backgroundRepeat = "no-repeat";
                popup.style.backgroundSize = "100% 100%";
                popup.style.width = "90vw";
                popup.style.height = "90vh";
                popup.style.position = "absolute";
                popup.style.zIndex = "2";
                popup.style.transform = "translate(5vw, 5vh)";
                popup.style.borderRadius = "20px";
                popup.style.boxShadow = "rgba(0,0,0,0.25) 20px 20px";
                var button = document.createElement("button");
                game.appendChild(button);
                button.style.zIndex = "1";
                button.style.width = "100vw";
                button.style.height = "100vh";
                button.style.opacity = "60%";
                button.style.position = "absolute";
                button.addEventListener("click", function () {
                    popup.remove();
                    button.remove();
                });
                var text = document.createElement("text");
                popup.appendChild(text);
                text.style.fontSize = "2.5vh";
                text.style.transform = "translate(50.5vw, 8vh)";
                text.style.position = "absolute";
                text.style.width = "40vw";
                text.style.height = "10vh";
                text.innerHTML = "";
                var words = document.createElement("word");
                words.style.backgroundImage = "url(assets/Akte3/woorden.png)";
                words.style.backgroundSize = "100% 100%";
                words.style.width = "50vw";
                words.style.height = "50vh";
                words.style.transform = "translate(10vw, 10vh)";
                popup.addEventListener("click", function (event) {
                    var dot = document.createElement("dot");
                    popup.appendChild(dot);
                    var x = ((event.clientX / innerWidth) * 100);
                    var y = ((event.clientY / innerHeight) * 100);
                    dot.addEventListener("click", function (event) {
                        dot.remove();
                        event.stopPropagation();
                    });
                    dot.style.transform = "translate(" + (x - 5.5) + "vw, " + (y - 6) + "vh)";
                    dot.style.width = "1vw";
                    dot.style.height = "2vh";
                    dot.style.backgroundColor = "red";
                    dot.style.borderRadius = "50%";
                    dot.style.position = "absolute";
                    dot.style.zIndex = "3";
                });
            });
            button5.style.width = "12.8vw";
            button5.style.height = "61.3vh";
            button5.style.transform = "translate(83.7vw, 20.8vh)";
            button5.style.opacity = "80%";
            button5.addEventListener("click", function () { return _this.lms(); });
            button6.style.width = "9vw";
            button6.style.height = "7.6vh";
            button6.style.transform = "translate(91vw, 0vh)";
            button6.style.opacity = "80%";
            button6.addEventListener("click", function () { return _this.goBack(); });
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
        new Act3();
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
        this.educations = new Locations();
        this.background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/map.png";
        this.game.appendChild(this.background);
        this.educationSetter();
    }
    LocatieSelectie.prototype.educationSetter = function () {
        var _this = this;
        this.educationSet = document.createElement('educationsetter');
        this.game.appendChild(this.educationSet);
        this.educationSet.innerHTML = "Om van start te gaan moeten we weten aan welke opleiding jij deel neemt. Kies uit deze lijst jouw opleiding.";
        this.educationSelect = document.createElement('select');
        this.currentLocation = this.educations.academieplein.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.blaak.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.kralingse_zoom.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.lloyd_straat.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.max_euwelaan.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.museumpark_hoogbouw.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.museumpark_laagbouw.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.pieter_de_hoogweg.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.posthumalaan.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.rmd_rotterdam.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.rochussenstraat.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.wijnhaven_103.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.wijnhaven_107.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.wijnhaven_61.opleidingen;
        this.addToSelect();
        this.currentLocation = this.educations.wijnhaven_99.opleidingen;
        this.addToSelect();
        this.educationSet.appendChild(this.educationSelect);
        var thisLocation = document.createElement('button');
        thisLocation.innerHTML = 'Kies opleiding';
        thisLocation.addEventListener('click', function () { return _this.saveEducation(); });
        this.educationSet.appendChild(thisLocation);
    };
    LocatieSelectie.prototype.addToSelect = function () {
        for (var education in this.currentLocation) {
            var addToDrop = document.createElement('option');
            addToDrop.value = this.currentLocation[education];
            addToDrop.innerHTML = this.currentLocation[education];
            this.educationSelect.appendChild(addToDrop);
        }
    };
    LocatieSelectie.prototype.saveEducation = function () {
        var education = document.getElementsByTagName('select')[0].value;
        localStorage.setItem('education', education);
        this.locationPicker();
    };
    LocatieSelectie.prototype.locationPicker = function () {
        var map = document.createElement('map');
        this.game.appendChild(map);
        this.background.style.backgroundImage = "url(assets/akte_1_map@0.75x.jpg)";
        this.background.style.backgroundSize = "100% 100%";
        this.educationSet.remove();
        this.locationMarker(34.3, 67.9, 'academieplein');
        this.locationMarker(46.3, 57, 'blaak');
        this.locationMarker(62.7, 61.5, 'kralingse_zoom');
        this.locationMarker(33.9, 78.5, 'lloyd_straat');
        this.locationMarker(64, 60, 'max_euwelaan');
        this.locationMarker(37, 65, 'museumpark_hoogbouw');
        this.locationMarker(38, 63, 'museumpark_laagbouw');
        this.locationMarker(33, 72.5, 'pieter_de_hoogweg');
        this.locationMarker(49, 73, 'posthumalaan');
        this.locationMarker(15.7, 82, 'rmd_rotterdam');
        this.locationMarker(35, 67, 'rochussenstraat');
        this.locationMarker(46, 58, 'wijnhaven_61');
        this.locationMarker(45, 58.4, 'wijnhaven_99');
        this.locationMarker(44.4, 58.7, 'wijnhaven_103');
        this.locationMarker(43.8, 59, 'wijnhaven_107');
    };
    LocatieSelectie.prototype.locationMarker = function (x, y, location) {
        var _this = this;
        var marker = document.createElement('pin');
        this.game.appendChild(marker);
        marker.style.transform = "translate(" + x + "vw," + y + "vh)";
        marker.addEventListener('click', function () {
            var yourEducation = localStorage.getItem('education');
            var educations = new Locations;
            var clicked;
            switch (location) {
                case 'academieplein':
                    clicked = educations.academieplein;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'blaak':
                    clicked = educations.blaak;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'kralingse_zoom':
                    clicked = educations.kralingse_zoom;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'lloyd_straat':
                    clicked = educations.lloyd_straat;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'max_euwelaan':
                    clicked = educations.max_euwelaan;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'museumpark_hoogbouw':
                    clicked = educations.museumpark_hoogbouw;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'museumpark_laagbouw':
                    clicked = educations.museumpark_laagbouw;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'pieter_de_hoogweg':
                    clicked = educations.pieter_de_hoogweg;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'posthumalaan':
                    clicked = educations.posthumalaan;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'rmd_rotterdam':
                    clicked = educations.rmd_rotterdam;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'rochussenstraat':
                    clicked = educations.rochussenstraat;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'wijnhaven_61':
                    clicked = educations.wijnhaven_61;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'wijnhaven_99':
                    clicked = educations.wijnhaven_99;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'wijnhaven_103':
                    clicked = educations.wijnhaven_103;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
                case 'wijnhaven_107':
                    clicked = educations.wijnhaven_107;
                    if (clicked.opleidingen.indexOf(yourEducation) > -1) {
                        _this.popupLoc('correct', location, clicked.locatieInfo);
                    }
                    else {
                        _this.popupLoc('incorrect', location, clicked.locatieInfo);
                    }
                    break;
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
            popupLocation.innerHTML += 'correct<br>';
            popupLocation.innerHTML += info;
            var goto = document.createElement('button');
            popupLocation.appendChild(goto);
            goto.innerHTML = "Loop naar binnen";
            console.log('test');
            goto.addEventListener('click', function () {
                console.log('test');
                document.getElementsByTagName("game")[0].innerHTML = "";
                new Act1;
            });
        }
        else {
            popupLocation.innerHTML += 'incorrect<br>';
            popupLocation.innerHTML += info;
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
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.blaak = {
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
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.kralingse_zoom = {
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
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.lloyd_straat = {
            opleidingen: [
                "Chemische Technologie",
                "Logistics Engineering",
                "Maritiem Officier",
                "Maritieme Techniek"
            ],
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.max_euwelaan = {
            opleidingen: [
                "Commerciële Economie | SportMarketing & Management"
            ],
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.museumpark_hoogbouw = {
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
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.museumpark_laagbouw = {
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
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.pieter_de_hoogweg = {
            opleidingen: [
                "Industrieel Product Ontwerpen",
                "Mens en Techniek | Gezondheidszorg Technologie"
            ],
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.posthumalaan = {
            opleidingen: [
                "International Business"
            ],
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.rmd_rotterdam = {
            opleidingen: [
                "Automotive",
                "River Delta Development"
            ],
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.rochussenstraat = {
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
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.wijnhaven_61 = {
            opleidingen: [
                "Leisure & Events Management"
            ],
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.wijnhaven_99 = {
            opleidingen: [
                "Creative Media and Game Technologies"
            ],
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.wijnhaven_103 = {
            opleidingen: [],
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
        this.wijnhaven_107 = {
            opleidingen: [
                "Communicatie",
                "Communication and Multimedia Design",
                "Informatica",
                "Technische Informatica"
            ],
            locatieInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
    }
    return Locations;
}());
//# sourceMappingURL=main.js.map