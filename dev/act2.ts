class Act2{

    game = document.getElementsByTagName("game")[0]
    constructor(){
        let game = document.getElementsByTagName("game")[0]
        let background = document.createElement("backgroundact2")
        game.appendChild(background)
    }
    /*
    makeLevelIcon(posX: number,posY: number,width: number,height: number,levelNumber: number){
        this.levelIcon = document.createElement('level')
        this.game.appendChild(this.levelIcon)

        this.levelIcon.innerHTML = "Level " + levelNumber

        this.levelIcon.style.transform = `translate(${posX}vw,${posY}vh)`
        this.levelIcon.style.width = `${width}vw`
        this.levelIcon.style.height = `${height}vh`
    }
    */


}