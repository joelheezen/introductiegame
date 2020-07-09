class Act2{

    game = document.getElementsByTagName("game")[0]
    classroomIcon: HTMLElement
    
    constructor(){
        let background = document.createElement("backgroundact2")
        this.game.appendChild(background)
        this.levelSelect()
        
        /*
        let door2 = this.makeLevelIcon(28.5,15.5,9.5,32)
        
        let door3 = this.makeLevelIcon(47,15.5,9.5,32)
        
        let door4 = this.makeLevelIcon(65.2,15.5,9.5,32)
        
        let door5 = this.makeLevelIcon(84,15.5,9.5,32)

        let folder1 = this.makeLevelIcon(28,75,5,4)

        let folder2 = this.makeLevelIcon(25,82,7,12)

        let folder3 = this.makeLevelIcon(35,93,5,5)

        let folder4 = this.makeLevelIcon(33.5,86,5,5)

        let folder5 = this.makeLevelIcon(84,40,9.5,32)
        */

    }
    
    makeLevelIcon(posX: number,posY: number,width: number,height: number){
        this.classroomIcon = document.createElement('classroom')
        this.game.appendChild(this.classroomIcon)

        this.classroomIcon.style.transform = `translate(${posX}vw,${posY}vh)`
        this.classroomIcon.style.width = `${width}vw`
        this.classroomIcon.style.height = `${height}vh`
        this.classroomIcon.style.backgroundColor = "black"
    }

    levelSelect(){

        this.makeLevelIcon(8.8,15.5,9.5,32)
        /*this.classroomIcon.addEventListener("click",()=>{
            console.log("test")
            this.game.innerHTML = ""
        })
        */
    }

    
    


}