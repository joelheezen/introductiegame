class Game{

    constructor(){
        let game = document.getElementsByTagName("game")[0]
        let button1 = document.createElement("button")
        game.appendChild(button1)
        button1.style.width = `10vw`
        button1.style.height = `10vh`
        button1.style.transform = `translate(25vw, 25vh)`
        button1.innerHTML = `joel`
        button1.onclick = this.buttonPress1

        let button2 = document.createElement("button")
        game.appendChild(button2)
        button2.style.width = `10vw`
        button2.style.height = `10vh`
        button2.style.transform = `translate(50vw, 25vh)`
        button2.innerHTML = `gert`
        button2.onclick = this.buttonPress2


        let button4 = document.createElement("button")
        game.appendChild(button4)
        button4.style.width = `10vw`
        button4.style.height = `10vh`
        button4.style.transform = `translate(80vw, 50vh)`
        button4.innerHTML = `luuk`
        button4.onclick = this.buttonPress4
    }

    buttonPress1(){
        document.getElementsByTagName("game")[0].innerHTML = ""
        new Ending()
        
    }
    buttonPress2(){
        document.getElementsByTagName("game")[0].innerHTML = ""
        new Act1()
    }

    buttonPress4(){
        document.getElementsByTagName("game")[0].innerHTML = ""
        new EnterBuilding()
    }

    
}

window.addEventListener("load", () => new Game())
