class Pause{

    game = document.getElementsByTagName('game')[0]
    pauseTimer = new Timer()

    constructor(act: number,next: string){
        this.game.innerHTML = ''

        this.pauseTimer.startPause()
        
        let background = document.createElement('background')
        background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/pauze.jpg)"

        this.game.appendChild(background)

        let title = document.createElement('congratulations')
        let subTitle = document.createElement('akteGehaald')
        let message = document.createElement('pauseMessage')
        let nextButton = document.createElement('next')

        title.innerHTML = new Languages()[localStorage.getItem('language')][60]

        subTitle.innerHTML = new Languages()[localStorage.getItem('language')][61]

        message.innerHTML = new Languages()[localStorage.getItem('language')][62] + (act + 1) 

        nextButton.innerHTML = new Languages()[localStorage.getItem('language')][63] + (act + 1)

        this.game.appendChild(title)
        title.appendChild(subTitle)
        this.game.appendChild(message)
        message.appendChild(nextButton)

        setTimeout(() => {
            nextButton.style.filter = "grayscale(0%)"
            nextButton.style.cursor= "pointer"
            nextButton.addEventListener('click',() =>{
                this.pauseTimer.endPause()
                this.game.innerHTML = ''
                eval(`new ${next}()`);
            })
        }, 2000);

        


    }

}
