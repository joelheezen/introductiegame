class Pause{

    game = document.getElementsByTagName('game')[0]

    constructor(act: number,next: string){
        this.game.innerHTML = ''

        new Timer().startPause()
        
        let background = document.createElement('background')
        background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/pauze.jpg)"

        this.game.appendChild(background)

        let title = document.createElement('congratulations')
        let subTitle = document.createElement('akteGehaald')
        let message = document.createElement('pauseMessage')
        let nextButton = document.createElement('next')

        title.innerHTML = `Gefeliciteerd`

        subTitle.innerHTML = `Je hebt akte ${act} gehaald`

        message.innerHTML = `Je kunt nu even pauze nemen<br>Tijdens de pauze staat de tijd stil<br>Druk op de knop om te beginnen met akte ${act + 1}` 

        nextButton.innerHTML = `Begin akte ${act + 1}`

        this.game.appendChild(title)
        title.appendChild(subTitle)
        this.game.appendChild(message)
        message.appendChild(nextButton)

        nextButton.addEventListener('click',() =>{
            new Timer().endPause()
            this.game.innerHTML = ''
            eval(`new ${next}()`);
        })


    }

}
