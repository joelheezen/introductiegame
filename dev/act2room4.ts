class Act2Room4{

    game = document.getElementsByTagName('game')[0]
    bg: HTMLElement = document.createElement("act2background")
    video = document.createElement("videoDecaan")

    constructor(){
        console.log("act2 room 4 open")
        this.game.appendChild(this.bg)
        
        this.bg.style.backgroundImage = 'url(/docs/assets/Akte2/filmpjedecaanhorizontaal.mp4)'
    }
}