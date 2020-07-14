class StartScreem{

    game = document.getElementsByTagName('game')[0] as HTMLElement
    background = document.createElement('background')

    constructor(){
        this.background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/startScherm.png)"
        this.game.appendChild(this.background)

        let start = document.createElement('startgame')
        this.game.appendChild(start)

        start.addEventListener('click',()=>{
            this.game.innerHTML = ""
            new LocatieSelectie()
            new Timer().startTimer()
        })
    }

}

window.addEventListener('load',() => new StartScreem())