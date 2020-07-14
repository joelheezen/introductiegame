class hint{
    game = document.getElementsByTagName('game')[0]

    hint1: HTMLElement = document.createElement("hinticon")
    hint2: HTMLElement = document.createElement("hinticon")
    hint3: HTMLElement = document.createElement("hinticon")
    
    constructor(){
        this.game.appendChild(this.hint1)
        this.game.appendChild(this.hint2)
        this.game.appendChild(this.hint3)

        this.hint1.style.width = "7vw"
        this.hint1.style.height = "7vh"

        this.hint2.style.width = "7vw"
        this.hint2.style.height = "7vh"
        this.hint2.style.transform = "translateX(7.5vw)"

        this.hint3.style.width = "7vw"
        this.hint3.style.height = "7vh"
        this.hint3.style.transform = "translateX(15vw)"
        
    }
}