window.addEventListener("load", () => new EnterBuilding())
class EnterBuilding{

    protected game = document.getElementsByTagName('game')[0]

    constructor(){
        this.setBackground()
    }
    setBackground(){
        let bge = document.createElement("backgroundenter")
        bge.style.backgroundImage = 'url(assets\IMG_20200708_123510.jpg)'
        this.game.appendChild(bge)
    }
}