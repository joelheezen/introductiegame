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
    
    constructor(){
        let background = document.createElement("backgroundact2")
        this.game.appendChild(background)
        this.createFolderItems()
        this.levelSelect()

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
        //C:\School\Kennismakings project\introductiegame\docs\assets\PRODUCTION\PRODUCTION\ASSETS  =  show item

        //C:\School\Kennismakings project\introductiegame\docs\assets\Akte2  =  opened
        
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