class Act1 {



    constructor() {
        let game = document.getElementsByTagName("game")[0]
        let background = document.createElement("backgroundact1")
        game.appendChild(background)
        let button1 = document.createElement("button")
        game.appendChild(button1)
        button1.style.width = `15vw`
        button1.style.height = `7.5vh`
        button1.style.transform = `translate(42vw, 47vh)`
        button1.style.opacity = `80%`
        button1.onclick = this.shapeCheck
        let button2 = document.createElement("button")
        game.appendChild(button2)
        button2.style.width = `18vw`
        button2.style.height = `3vh`
        button2.style.transform = `translate(25vw, 60vh)`
        button2.style.opacity = `80%`
        button2.onclick = this.searchOnline
    }

    shapeCheck() {
        console.log("button 1 is pressed")
    }

    searchOnline() {
        console.log("button 2 is pressed")
    }

}