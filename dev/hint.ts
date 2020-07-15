class hint{
    game = document.getElementsByTagName('game')[0]

    hint1: HTMLElement = document.createElement("hinticon")
    hint2: HTMLElement = document.createElement("hinticon")
    hint3: HTMLElement = document.createElement("hinticon")
    
    hintbox1 : HTMLElement = document.createElement("hintbox")
    hintbox2 : HTMLElement = document.createElement("hintbox")
    hintbox3 : HTMLElement = document.createElement("hintbox")
    
    constructor(){
        this.game.appendChild(this.hint1)
        this.game.appendChild(this.hint2)
        this.game.appendChild(this.hint3)

        this.game.appendChild(this.hintbox1)
        this.game.appendChild(this.hintbox2)
        this.game.appendChild(this.hintbox3)

        this.hint1.style.width = "7vw"
        this.hint1.style.height = "7vh"

        this.hintbox1.style.width = "7vw"
        this.hintbox1.style.height = "7vh"

        //weet je het zeker toevoegen

        this.hint1.addEventListener("click",()=>{
            console.log("test test")
            new popup(new Languages()[localStorage.getItem('language')][53],20,45,20)
            this.hint1.remove()
            
        })

        
        this.hintbox1.addEventListener("click",()=>{
            new popup(new Languages()[localStorage.getItem('language')][54],0,7,20)
            this.hintbox1.remove()
            this.hint1.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)'
            
        })

        this.hint2.style.width = "7vw"
        this.hint2.style.height = "7vh"
        this.hint2.style.transform = "translateX(7.5vw)"

        this.hintbox2.style.width = "7vw"
        this.hintbox2.style.height = "7vh"
        this.hintbox2.style.transform = "translateX(7.5vw)"

        this.hint2.addEventListener("click",()=>{
            console.log("hint2")
            new popup(new Languages()[localStorage.getItem('language')][55],59,45,20)
            this.hint2.remove()
        })

        this.hintbox2.addEventListener("click",()=>{
            new popup(new Languages()[localStorage.getItem('language')][56],7,7,20)
            this.hintbox2.remove()
            this.hint2.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)'
            
        })

        this.hint3.style.width = "7vw"
        this.hint3.style.height = "7vh"
        this.hint3.style.transform = "translateX(15vw)"

        this.hintbox3.style.width = "7vw"
        this.hintbox3.style.height = "7vh"
        this.hintbox3.style.transform = "translateX(15vw)"

        this.hint3.addEventListener("click",()=>{
            console.log("hint3")
            new popup(new Languages()[localStorage.getItem('language')][57],82,45,15)
            this.hint3.remove()
        })
        
        this.hintbox3.addEventListener("click",()=>{
            new popup(new Languages()[localStorage.getItem('language')][58],14,7,20)
            this.hintbox3.remove()
            this.hint3.style.backgroundImage = 'url(assets/Akte2/envelope_open.png)'
            
        })
        
    }
}