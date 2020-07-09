class Act1 {

    private input1 = document.createElement("input")
    private input2 = document.createElement("input")
    private input3 = document.createElement("input")
    private input1Save :string = ""
    private input2Save :string = ""
    private input3Save :string = ""

    constructor(){
        this.createAnswerScreen()
    }

    createAnswerScreen(){
        let game = document.getElementsByTagName("game")[0]

        let background = document.createElement("backgroundact1")
        game.appendChild(background)

        
        game.appendChild(this.input1)
        this.input1.style.width = `13.7vw`
        this.input1.style.height = `5.7vh`
        this.input1.style.transform = `translate(26vw, 39.2vh)`
        this.input1.style.borderRadius = `25px`
        this.input1.style.border = `none`
        this.input1.style.fontSize = `20px`
        this.input1.style.paddingLeft = `1vw`
        this.input1.style.fontFamily = `Arial Black`
        this.input1.style.textTransform = `uppercase`
        this.input1.value = this.input1Save
        this.input1.id = "input1"

        game.appendChild(this.input2)
        this.input2.style.width = `13.7vw`
        this.input2.style.height = `5.7vh`
        this.input2.style.transform = `translate(42.7vw, 39.2vh)`
        this.input2.style.borderRadius = `25px`
        this.input2.style.border = `none`
        this.input2.style.fontSize = `20px`
        this.input2.style.paddingLeft = `1vw`
        this.input2.style.fontFamily = `Arial Black`
        this.input2.style.textTransform = `uppercase`
        this.input2.value = this.input2Save
        this.input2.id = "input2"

        game.appendChild(this.input3)
        this.input3.style.width = `13.7vw`
        this.input3.style.height = `5.7vh`
        this.input3.style.transform = `translate(59.2vw, 39.2vh)`
        this.input3.style.borderRadius = `25px`
        this.input3.style.border = `none`
        this.input3.style.fontSize = `20px`
        this.input3.style.paddingLeft = `1vw`
        this.input3.style.fontFamily = `Arial Black`
        this.input3.style.textTransform = `uppercase`
        this.input3.value = this.input3Save
        this.input3.id = "input3"

        let button1 = document.createElement("button")
        game.appendChild(button1)
        button1.style.width = `15.1vw`
        button1.style.height = `7.5vh`
        button1.style.transform = `translate(42.4vw, 47.9vh)`
        button1.style.opacity = `0%`
        button1.addEventListener("click" , () => this.shapeCheck())

        let button2 = document.createElement("button")
        game.appendChild(button2)
        button2.style.width = `18.5vw`
        button2.style.height = `3vh`
        button2.style.transform = `translate(25.25vw, 61vh)`
        button2.style.opacity = `0%`
        button2.addEventListener("click" , () => this.searchOnline())

        let button3 = document.createElement("button")
        game.appendChild(button3)
        button3.style.width = `9vw`
        button3.style.height = `7.6vh`
        button3.style.transform = `translate(91vw, 0vh)`
        button3.style.opacity = `80%`
        button3.addEventListener("click" , () => this.searchOnline())
    }

    shapeCheck() {
        console.log("button 1 is pressed")
        let shape1 = (<HTMLInputElement>document.getElementById("input1")).value
        let shape2 = (<HTMLInputElement>document.getElementById("input2")).value
        let shape3 = (<HTMLInputElement>document.getElementById("input3")).value
        if (shape1 == "vierkant" && shape2 == "driehoek" && shape3 == "rondje"){
            if (confirm("dit is het goede antwoord, wil je verder? klik op cancel voor een pauze.")){
                new EnterBuilding()
                let inputs = document.getElementsByTagName("input")
                let buttons = document.getElementsByTagName("button")

                if (buttons){
                    for (let i = (buttons.length -1); i >= 0; i--) {
                        buttons[i].remove()
                    }
                }

                if (inputs) {
                    for (let i = (inputs.length -1); i >= 0; i--) {
                        inputs[i].remove()
                    }
                }
            }
            else{
                console.log("je neemt een pauze")
            }
        }
        else{
            alert("helaas dit antwoord is fout.")
        }
    }

    searchOnline() {
        this.input1Save = (<HTMLInputElement>document.getElementById("input1")).value
        this.input2Save = (<HTMLInputElement>document.getElementById("input2")).value
        this.input3Save = (<HTMLInputElement>document.getElementById("input3")).value
        document.getElementsByTagName("game")[0].innerHTML = ""
        
        let background = document.createElement("backgroundact1")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(background)
        background.style.backgroundImage = `url(/docs/assets/plattegrond.jpg)`

        let button1 = document.createElement("button")
        let button2 = document.createElement("button")
        let button3 = document.createElement("button")
        let button4 = document.createElement("button")
        let button5 = document.createElement("button")
        let button6 = document.createElement("button")
        
        game.appendChild(button1)
        game.appendChild(button2)
        game.appendChild(button3)
        game.appendChild(button4)
        game.appendChild(button5)
        game.appendChild(button6)

        button1.style.width = `19.6vw`
        button1.style.height = `60.9vh`
        button1.style.transform = `translate(5.7vw, 20.8vh)`
        button1.style.opacity = `80%`
        button1.addEventListener("click" , () => this.webmail())

        button2.style.width = `27.5vw`
        button2.style.height = `12.3vh`
        button2.style.transform = `translate(27.2vw, 69.8vh)`
        button2.style.opacity = `80%`
        button2.addEventListener("click" , () => this.rooster())

        button3.style.width = `13.2vw`
        button3.style.height = `27.3vh`
        button3.style.transform = `translate(56.3vw, 20.7vh)`
        button3.style.opacity = `80%`
        button3.addEventListener("click" , () => this.studentenServiceCenter())

        button4.style.width = `20.3vw`
        button4.style.height = `18vh`
        button4.style.transform = `translate(61.2vw, 63.8vh)`
        button4.style.opacity = `80%`
        button4.addEventListener("click" , () => this.studentenpas())

        button5.style.width = `12.8vw`
        button5.style.height = `61.3vh`
        button5.style.transform = `translate(83.7vw, 20.8vh)`
        button5.style.opacity = `80%`
        button5.addEventListener("click" , () => this.lms())

        button6.style.width = `9vw`
        button6.style.height = `7.6vh`
        button6.style.transform = `translate(91vw, 0vh)`
        button6.style.opacity = `80%`
        button6.addEventListener("click" , () => this.goBack())

    }

    webmail(){
        console.log("webmail is aangeklikt")
    }

    osiris(){
        console.log("osiris is aangeklikt")
    }

    rooster(){
        console.log("rooster is aangeklikt")
    }

    studentenServiceCenter(){
        console.log("ssc is aangeklikt")
    }

    studentenpas(){
        console.log("studentenpas is aangeklikt")
    }

    lms(){
        console.log("lms is aangeklikt")
    }

    goBack(){
        console.log("terug naar invulscherm")
        document.getElementsByTagName("game")[0].innerHTML = ""
        this.createAnswerScreen()
    }
}