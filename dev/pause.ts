class Pause{

    game = document.getElementsByTagName('game')[0]

    constructor(act: number,next: string){
        new Timer().startPause()
        console.log('luuk gay')
        let background = document.createElement('background')
        background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/pauze.jpg)"

        this.game.appendChild(background)

        let title = document.createElement('hurray')
        let message = document.createElement('message')
        let nextButton = document.createElement('next')

        title.innerHTML = `Gefeliciteerd!!!<br>Je hebt akte ${act} gehaald`

        message.innerHTML = `Je kunt nu even pauze nemen<br>Druk op de knop om te beginnen met akte ${act + 1}` 

        nextButton.innerHTML = `Begin akte ${act + 1}`

        this.game.appendChild(title)
        this.game.appendChild(message)
        this.game.appendChild(nextButton)

        nextButton.addEventListener('click',() =>{
            new Timer().endPause()
            this.game.innerHTML = ''
            eval(`new ${next}()`);
        })


    }

}