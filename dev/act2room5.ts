class Act2Room5{

    game = document.getElementsByTagName('game')[0]
    bg: HTMLElement = document.createElement("act2background")

    constructor(){
        
        this.game.appendChild(this.bg)
        this.bg.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123510.jpg)'
    }
}