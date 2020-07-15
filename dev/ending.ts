class Ending{

    constructor(){
        new Timer().endTimer()

        let bg = document.createElement("backgroundEnd")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(bg)

        bg.style.backgroundImage = `url(assets/Akte3/Binnenrotte.jpg)`
        bg.style.backgroundSize = `100% 100%`
        bg.style.backgroundRepeat = `no-repeat`
        bg.style.width = `100vw`
        bg.style.height = `100vh`
        bg.style.position = `absolute`

        let popup = document.createElement("endPopup")
        game.appendChild(popup)

        let title = document.createElement('youWon')
        title.innerHTML = "Gefeliciteerd"
        popup.appendChild(title)

        let subTitle = document.createElement('subtitle')
        subTitle.innerHTML = 'Dit is het einde van het spel<br>Jouw score is:<br>'
        popup.appendChild(subTitle)

        let score = document.createElement('finalScore')

        score.innerHTML += new Timer().score()
        popup.appendChild(score)
        
        let button = document.createElement("button")
        popup.appendChild(button)

        button.innerHTML += `klik hier voor een uitdraai van je score`
        button.addEventListener("click", function(){
            window.print()
        })

        new Timer().resetTimer()
    }
}