class Act2{

    game = document.getElementsByTagName("game")[0]
    classroomIcon: HTMLElement
    
    constructor(){
        let background = document.createElement("backgroundact2")
        this.game.appendChild(background)
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
            new Act2Room1
        })
        this.makeLevelIcon(24,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            console.log("room2")
            new Act2Room2
        })
        this.makeLevelIcon(44,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            console.log("room3")
            new Act2Room3
        })
        this.makeLevelIcon(63.8,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            console.log("room4")
            new Act2Room4
        })
        this.makeLevelIcon(83.5,25,13,43)
        this.classroomIcon.addEventListener("click",()=>{
            console.log("room5")
            new Act2Room5
        })
        this.makeLevelIcon(28,75,5,4)
        
        this.classroomIcon.style.backgroundColor = "black"
        this.classroomIcon.addEventListener("click",()=>{
            console.log("folder1")
        })
        this.makeLevelIcon(25,82,7,12)
        
        this.classroomIcon.style.backgroundColor = "black"
        this.classroomIcon.addEventListener("click",()=>{
            console.log("folder2")
        })
        this.makeLevelIcon(35,93,5,5)
        
        this.classroomIcon.style.backgroundColor = "black"
        this.classroomIcon.addEventListener("click",()=>{
            console.log("folder3")
        })
        this.makeLevelIcon(33.5,86,5,5)
        
        this.classroomIcon.style.backgroundColor = "black"
        this.classroomIcon.addEventListener("click",()=>{
            console.log("folder4")
        })
        this.makeLevelIcon(86.5,25.3,5,15)
        
        this.classroomIcon.style.backgroundColor = "black"
        this.classroomIcon.addEventListener("click",()=>{
            console.log("folder4")
        })

        
    }

    
    


}