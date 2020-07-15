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

        //weet je het zeker toevoegen

        this.hint1.addEventListener("click",()=>{
            console.log("test test")
            new popup("Soms gaat het niet om wat je hoort, maar om wat je ziet.",20,45,20)
            
        })

        this.hint2.style.width = "7vw"
        this.hint2.style.height = "7vh"
        this.hint2.style.transform = "translateX(7.5vw)"
        this.hint2.addEventListener("click",()=>{
            console.log("hint2")
            new popup("Lees de bevestiging mail van je telefonische afspraak met Sara Vonk nog eens zorgvuldig door",59,45,20)
        })

        this.hint3.style.width = "7vw"
        this.hint3.style.height = "7vh"
        this.hint3.style.transform = "translateX(15vw)"
        this.hint3.addEventListener("click",()=>{
            console.log("hint3")
            new popup("Solliciteren is soms een numbers game",82,45,15)
        })
        
    }
}