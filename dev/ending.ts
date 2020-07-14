class Ending{

    constructor(){
        let bg = document.createElement("backgroundEnd")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(bg)

        bg.style.backgroundImage = `url(assets/Akte3/Binnenrotte.jpg)`
        bg.style.backgroundSize = `100% 100%`
        bg.style.backgroundRepeat = `no-repeat`
        bg.style.width = `100vw`
        bg.style.height = `100vh`
        bg.style.position = `absolute`

        let popup = document.createElement("pinPopup")
        game.appendChild(popup)
        popup.style.transform = `translate(34vw, 20vh)`
        popup.innerHTML += `je score is ..`
        let button = document.createElement("button")
        popup.appendChild(button)
        popup.style.boxShadow = `none`

        button.style.position = `absolute`
        button.style.width = `94%`
        button.style.height = `20%`
        button.style.transform = `translate(0%, 30%)`
        button.innerHTML += `klik hier voor een uitdraai van je score`
        button.addEventListener("click", function(){
            window.print()
        })
    }
}