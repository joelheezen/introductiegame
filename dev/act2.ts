class Act2{

    game = document.getElementsByTagName("game")[0]
    classroomIcon: HTMLElement

    folder : HTMLElement

    folderItem1 : HTMLElement
    folderItem2 : HTMLElement
    folderItem3 : HTMLElement
    folderItem4 : HTMLElement
    folderItem5 : HTMLElement
    folderItem6 : HTMLElement

    doorName1 = document.createElement("doorName")
    doorName2 = document.createElement("doorName")
    doorName3 = document.createElement("doorName")
    doorName4 = document.createElement("doorName")
    doorName5 = document.createElement("doorName")

    private input1 = document.createElement("input")
    private input2 = document.createElement("input")
    private input3 = document.createElement("input")
    private input4 = document.createElement("input")
    private input5 = document.createElement("input")

    number1 : string = "number1"
    number2 : string = "number2"
    number3 : string = "number3"
    number4 : string = "number4"
    number5 : string = "number5"
    
    constructor(){
        let background = document.createElement("backgroundact2")
        this.game.appendChild(background)
        this.createFolderItems()
        this.levelSelect()
        this.codeInput()
        this.codeEind()
        this.doorNames()
        new popup("Hulp nodig? Blijf (er) niet (mee) rondlopen! Hier moet je zijn: Hulp bij studie. De hogeschool biedt allerlei vormen van een-op-een begeleiding en ondersteuning."+
        " Maar....alle deuren zitten op slot. Kraak de lettercode om alle deuren te openen, zodat je gebruik kunt maken van al onze begeleiding!",64,75,30,20)


    }
    doorNames(){
        this.game.appendChild(this.doorName1)
        this.game.appendChild(this.doorName2)
        this.game.appendChild(this.doorName3)
        this.game.appendChild(this.doorName4)
        this.game.appendChild(this.doorName5)

        this.doorName1.style.width = '11.77vw'
        this.doorName1.style.height = '3.65vh'
        this.doorName1.style.transform = `translate(4.75vw, 27.5vh)`
        this.doorName1.style.textAlign = 'center'
        this.doorName2.style.paddingTop = '1.5vh'
        this.doorName1.style.fontSize = `1vw`
        this.doorName1.innerHTML = "Vertrouwenspersoon"

        this.doorName2.style.width = '11.77vw'
        this.doorName2.style.height = '3.65vh'
        this.doorName2.style.transform = `translate(24.65vw, 26.6vh)`
        this.doorName2.style.textAlign = 'center'
        this.doorName2.style.paddingTop = '0.8vh'
        this.doorName2.style.fontSize = `1vw`
        this.doorName2.innerHTML = "Peercoach"

        this.doorName3.style.width = '11.77vw'
        this.doorName3.style.height = '3.65vh'
        this.doorName3.style.transform = `translate(44.36vw, 26.6vh)`
        this.doorName3.style.textAlign = 'center'
        this.doorName3.style.paddingTop = '0.8vh'
        this.doorName3.style.fontSize = `1vw`
        this.doorName3.innerHTML = "SLC"

        this.doorName4.style.width = '11.77vw'
        this.doorName4.style.height = '3.65vh'
        this.doorName4.style.transform = `translate(64.26vw, 26.6vh)`
        this.doorName4.style.textAlign = 'center'
        this.doorName4.style.paddingTop = '0.8vh'
        this.doorName4.style.fontSize = `1vw`
        this.doorName4.innerHTML = "Decaan"

        this.doorName5.style.width = '11.77vw'
        this.doorName5.style.height = '3.65vh'
        this.doorName5.style.transform = `translate(84vw, 26.1vh)`
        this.doorName5.style.textAlign = 'center'
        this.doorName5.style.paddingTop = '1.3vh'
        this.doorName5.style.fontSize = `1vw`
        this.doorName5.innerHTML = "Student aan zet"
    }
    codeInput(){

        this.game.appendChild(this.input1)

        this.input1.style.width = `2.5vw`
        this.input1.style.height = `5.7vh`
        this.input1.style.transform = `translate(9vw, 36.25vh)`
        this.input1.style.border = `none`
        this.input1.style.fontSize = `2.5vw`
        this.input1.maxLength = 1
        this.input1.style.paddingLeft = `0.8vw`
        this.input1.style.fontFamily = `Arial Black`
        this.input1.style.textTransform = `uppercase`
        this.input1.value = localStorage.getItem(this.number1)!
        this.input1.id = "input1"
        this.input1.addEventListener("keyup",()=>{
            this.codeCheck("input1","D",'d')
            this.localStorageUpdate()
            this.codeEind()
        })

        this.game.appendChild(this.input2)

        this.input2.style.width = `2.4vw`
        this.input2.style.height = `5.7vh`
        this.input2.style.transform = `translate(28.9vw, 36.25vh)`
        this.input2.style.border = `none`
        this.input2.style.fontSize = `2.5vw`
        this.input2.maxLength = 1
        this.input2.style.paddingLeft = `0.8vw`
        this.input2.style.fontFamily = `Arial Black`
        this.input2.style.textTransform = `uppercase`
        this.input2.value = localStorage.getItem(this.number2)!
        this.input2.id = "input2"
        this.input2.addEventListener("keyup",()=>{
            this.codeCheck("input2","B",'b')
            this.localStorageUpdate()
            this.codeEind()
        })

        this.game.appendChild(this.input3)

        this.input3.style.width = `2vw`
        this.input3.style.height = `5.7vh`
        this.input3.style.transform = `translate(48.5vw, 36.25vh)`
        this.input3.style.border = `none`
        this.input3.style.fontSize = `2.5vw`
        this.input3.maxLength = 1
        this.input3.style.paddingLeft = `0.6vw`
        this.input3.style.fontFamily = `Arial Black`
        this.input3.style.textTransform = `uppercase`
        this.input3.value = localStorage.getItem(this.number3)!
        this.input3.id = "input3"
        this.input3.addEventListener("keyup",()=>{
            this.codeCheck("input3","N",'n')
            this.localStorageUpdate()
            this.codeEind()
        })

        this.game.appendChild(this.input4)

        this.input4.style.width = `2vw`
        this.input4.style.height = `5.7vh`
        this.input4.style.transform = `translate(68.4vw, 36.25vh)`
        this.input4.style.border = `none`
        this.input4.style.fontSize = `2.5vw`
        this.input4.maxLength = 1
        this.input4.style.paddingLeft = `0.6vw`
        this.input4.style.fontFamily = `Arial Black`
        this.input4.style.textTransform = `uppercase`
        this.input4.value = localStorage.getItem(this.number4)!
        this.input4.id = "input4"
        this.input4.addEventListener("keyup",()=>{
            this.codeCheck("input4","V",'v')
            this.localStorageUpdate()
            this.codeEind()
        })

    
        this.game.appendChild(this.input5)

        this.input5.style.width = `2vw`
        this.input5.style.height = `5.7vh`
        this.input5.style.transform = `translate(88.3vw, 36.25vh)`
        this.input5.style.border = `none`
        this.input5.style.fontSize = `2.5vw`
        this.input5.maxLength = 1
        this.input5.style.paddingLeft = `0.8vw`
        this.input5.style.fontFamily = `Arial Black`
        this.input5.style.textTransform = `uppercase`
        this.input5.value = localStorage.getItem(this.number5)!
        this.input5.id = "input5"
        this.input5.addEventListener("keyup",()=>{
            this.codeCheck("input5","E",'e')
            this.localStorageUpdate()
            this.codeEind()
        })
    }
    localStorageUpdate(){
        localStorage.setItem(this.number1, (<HTMLInputElement>document.getElementById("input1")).value)
        localStorage.setItem(this.number2, (<HTMLInputElement>document.getElementById("input2")).value)
        localStorage.setItem(this.number3, (<HTMLInputElement>document.getElementById("input3")).value)
        localStorage.setItem(this.number4, (<HTMLInputElement>document.getElementById("input4")).value)
        localStorage.setItem(this.number5, (<HTMLInputElement>document.getElementById("input5")).value)
    }
    codeCheck(input: string, awnser:string, awnser2:string){
        console.log(input)
        if((<HTMLInputElement>document.getElementById(input)).value == awnser || (<HTMLInputElement>document.getElementById(input)).value == awnser2){
            console.log(input + " is true")
        }else{
            console.log(input + " is false")
        }

    }

    codeEind(){
        let codeString = 
        (<HTMLInputElement>document.getElementById("input1")).value + 
        (<HTMLInputElement>document.getElementById("input2")).value +
        (<HTMLInputElement>document.getElementById("input3")).value + 
        (<HTMLInputElement>document.getElementById("input4")).value + 
        (<HTMLInputElement>document.getElementById("input5")).value
        console.log(codeString)
        if(codeString=="DBNVE"){
            console.log("winner")
        }
    }
    
    makeLevelIcon(posX: number,posY: number,width: number,height: number){
        this.classroomIcon = document.createElement('classroom')
        this.game.appendChild(this.classroomIcon)

        this.classroomIcon.style.transform = `translate(${posX}vw,${posY}vh)`
        this.classroomIcon.style.width = `${width}vw`
        this.classroomIcon.style.height = `${height}vh`
    }

    levelSelect(){

        this.makeLevelIcon(4,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            console.log("room1")
            document.getElementsByTagName("game")[0].innerHTML = ""
            new Act2Room1
        })
        this.makeLevelIcon(24,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            console.log("room2")
            document.getElementsByTagName("game")[0].innerHTML = ""
            new Act2Room2
        })
        this.makeLevelIcon(43.5,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            console.log("room3")
            document.getElementsByTagName("game")[0].innerHTML = ""
            new Act2Room3
        })
        this.makeLevelIcon(63.8,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            console.log("room4")
            document.getElementsByTagName("game")[0].innerHTML = ""
            new Act2Room4
        })
        this.makeLevelIcon(83.5,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            console.log("room5")
            document.getElementsByTagName("game")[0].innerHTML = ""
            new Act2Room5
        })
    }

    createFolderItems(){
        
        this.folderItem1 = document.createElement("folderitem")
        this.folderItem2 = document.createElement("folderitem")
        this.folderItem3 = document.createElement("folderitem")
        this.folderItem4 = document.createElement("folderitem")
        this.folderItem5 = document.createElement("folderitem")
        this.folderItem6 = document.createElement("folderitem")

        this.game.appendChild(this.folderItem1)
        this.game.appendChild(this.folderItem2)
        this.game.appendChild(this.folderItem3)
        this.game.appendChild(this.folderItem4)
        this.game.appendChild(this.folderItem5)
        this.game.appendChild(this.folderItem6)

        
        this.folderItem1.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_getallen.png)'
        this.folderItem1.style.transform = `translate(20vw,72vh)`
        this.folderItem1.style.width = '8.3vw'
        this.folderItem1.style.height = '8.3vh'
        this.folderItem1.addEventListener("click",()=>{
            console.log("folder1")
            new Act2folder1
        })

        this.folderItem2.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_studie.png)'
        this.folderItem2.style.transform = `translate(44vw,87vh)`
        this.folderItem2.style.width = '12vw'
        this.folderItem2.style.height = '12vh'
        this.folderItem2.addEventListener("click",()=>{
            console.log("folder2")
            new Act2folder2
        })

        this.folderItem3.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_solliciteren.png)'
        this.folderItem3.style.transform = `translate(60vw,70vh)`
        this.folderItem3.style.width = '8vw'
        this.folderItem3.style.height = '8vh'
        this.folderItem3.addEventListener("click",()=>{
            console.log("folder3")
            new Act2folder3
        })

        this.folderItem4.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_coia.png)'
        this.folderItem4.style.transform = `translate(3vw,83vh)`
        this.folderItem4.style.width = '10vw'
        this.folderItem4.style.height = '10vh'
        this.folderItem4.addEventListener("click",()=>{
            console.log("folder4")
            new Act2folder4
        })

        this.folderItem5.style.backgroundImage = 'url(assets/PRODUCTION/PRODUCTION/ASSETS/flyer_morsecode.png)'
        this.folderItem5.style.transform = `translate(80vw,78vh)`
        this.folderItem5.style.width = '10vw'
        this.folderItem5.style.height = '10vh'
        this.folderItem5.addEventListener("click",()=>{
            console.log("folder5")
            new Act2folder5
        })
        this.folderItem6.style.backgroundImage = 'url(assets/Akte2/Postervormen&kleuren.jpg)'
        this.folderItem6.style.transform = `translate(58.1vw,30vh)`
        this.folderItem6.style.width = '4.45vw'
        this.folderItem6.style.height = '11.6vh'
        this.folderItem6.addEventListener("click",()=>{
            console.log("folder6")
            new Act2folder6
        })
        


    }
}
class folders{
    
    game = document.getElementsByTagName('game')[0]
    folder: HTMLElement = document.createElement("openfolder")
    constructor(){
        this.createFolder()
    }
    createFolder(){
        this.folder.style.width = '100vw'
        this.folder.style.height = '100vh'
        this.game.appendChild(this.folder)
        this.folder.addEventListener("click",()=>{
            console.log("folder removed")
            this.folder.remove()
        })
        
    }
    removeMe(){
        this.folder.remove()
    }
}

class Act2folder1 extends folders{
    
    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer1getallen.jpg)'
        this.folder.style.backgroundSize = '50% 50%'
    }
}
class Act2folder2 extends folders{

    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer2HulpbijStudie.jpg)'
        this.folder.style.backgroundSize = '40% 90%'
    }
}
class Act2folder3 extends folders{

    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer3WorkshopSolliciteren.jpg)'
        this.folder.style.backgroundSize = '30% 90%'
    }
}
class Act2folder4 extends folders{

    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer4COIAinfo.png)'
        this.folder.style.backgroundSize = '45% 80%'
    }
}
class Act2folder5 extends folders{

    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Flyer5MorseCodeAlfabet.jpg)'
    }
}
class Act2folder6 extends folders{

    constructor(){
        super()
        this.folder.style.backgroundImage = 'url(assets/Akte2/Postervormen&kleuren.jpg)'
    }
}