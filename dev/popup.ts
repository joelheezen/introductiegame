class popup{
    field : HTMLElement = document.createElement('popup')
    game = document.getElementsByTagName('game')[0]
    constructor(text: string, posX:number,posY:number,width:number,height:number){
        this.game.appendChild(this.field)
        this.field.innerText = text
        this.field.style.position = "absolute"
        this.field.style.transform = "translate("+posX+"vw,"+posY+"vh)"
        this.field.style.width = width.toString() + "px"
        this.field.style.height = height.toString() + "px"
        this.field.style.borderRadius = "20px"
        this.field.style.backgroundColor = "#ffb911"
        this.field.style.fontSize = "14px"
        this.field.style.zIndex = "2"
        this.field.style.padding = "10px"
        this.field.style.boxShadow = "5px 10px"
        this.field.addEventListener("click",()=>{
            this.field.remove()
        })
    }
}