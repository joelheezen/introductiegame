class Game{

    constructor(){
<<<<<<< HEAD
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

        let button3 = document.createElement("button")
        game.appendChild(button3)
        button3.style.width = `10vw`
        button3.style.height = `10vh`
        button3.style.transform = `translate(25vw, 50vh)`
        button3.innerHTML = `tom`
        button3.onclick = this.buttonPress3

        let button4 = document.createElement("button")
        game.appendChild(button4)
        button4.style.width = `10vw`
        button4.style.height = `10vh`
        button4.style.transform = `translate(50vw, 50vh)`
        button4.innerHTML = `luuk`
        button4.onclick = this.buttonPress4
    }

    buttonPress1(){
        let buttons = document.getElementsByTagName("button")
        if (buttons){
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].remove();
            }
        }
        new Act1()
    }
    buttonPress2(){
        
    }
    buttonPress3(){
        
    }
    buttonPress4(){

=======
        new Act1()
>>>>>>> a6aa100e759953aad413e69d9f7cc78ccba16d9c
    }
}

window.addEventListener("load", () => new Game())
