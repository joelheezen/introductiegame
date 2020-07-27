class Ending{

    constructor(){
        new Timer().endTimer()

        let bg = document.createElement("backgroundEnd")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(bg)

        window.addEventListener("beforeprint", function(){
            title.style.fontSize = "7vh"
            popup.style.position = 'absolute'
            subTitle.style.fontSize = "1.1rem"
            subTitle.innerHTML = new Languages()[localStorage.getItem('language')][73]
            button.remove()
        })

        window.addEventListener("afterprint", function(){
            new Ending
        })

        bg.style.backgroundImage = `url(assets/Akte3/Binnenrotte.jpg)`
        bg.style.backgroundSize = `100% 100%`
        bg.style.backgroundRepeat = `no-repeat`
        bg.style.width = `100vw`
        bg.style.height = `100vh`
        bg.style.position = `absolute`

        let popup = document.createElement("endPopup")
        game.appendChild(popup)

        let title = document.createElement('youWon')
        title.innerHTML = new Languages()[localStorage.getItem('language')][74]
        popup.appendChild(title)

        let subTitle = document.createElement('subtitle')
        subTitle.innerHTML = new Languages()[localStorage.getItem('language')][75]
        popup.appendChild(subTitle)

        let score = document.createElement('finalScore')

        let duration = parseInt(new Timer().score())
        let hours = Math.floor(duration / 3600)
        let minutes = Math.floor(duration % 3600 / 60)
        let seconds = Math.floor(duration % 3600 % 60)
        let scoreInMin = `${hours}:${minutes}:${seconds}`
        score.innerHTML += scoreInMin
        popup.appendChild(score)
        
        let button = document.createElement("button")
        popup.appendChild(button)

        button.innerHTML += new Languages()[localStorage.getItem('language')][76]
        button.addEventListener("click", function(){
            window.print()
        })

    }
}