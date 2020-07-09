class Act1 {

    private input1 = document.createElement("input")
    private input2 = document.createElement("input")
    private input3 = document.createElement("input")

    constructor(){
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
        this.input3.id = "input3"

        let button1 = document.createElement("button")
        game.appendChild(button1)
        button1.style.width = `15.1vw`
        button1.style.height = `7.5vh`
        button1.style.transform = `translate(42.4vw, 47.9vh)`
        button1.style.opacity = `0%`
        button1.onclick = this.shapeCheck

        let button2 = document.createElement("button")
        game.appendChild(button2)
        button2.style.width = `18.5vw`
        button2.style.height = `3vh`
        button2.style.transform = `translate(25.25vw, 61vh)`
        button2.style.opacity = `0%`
        button2.onclick = this.searchOnline
    }

    shapeCheck() {
        console.log("button 1 is pressed")
        let shape1 = (<HTMLInputElement>document.getElementById("input1")).value
        let shape2 = (<HTMLInputElement>document.getElementById("input2")).value
        let shape3 = (<HTMLInputElement>document.getElementById("input3")).value
        if (shape1 == "vierkant" && shape2 == "driehoek" && shape3 == "rondje"){
            if (confirm("dit is het goede antwoord, wil je verder? klik op cancel voor een pauze.")){
                new Act2()
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
        let inputs = document.getElementsByTagName("input")
        let buttons = document.getElementsByTagName("button")
        let background = (<HTMLElement>document.getElementsByTagName("backgroundact1")[0])
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
        background.style.backgroundImage = `url(/docs/assets/plattegrond.png)`

        let button1 = document.createElement("button")
        let button2 = document.createElement("button")
        let button3 = document.createElement("button")
        let button4 = document.createElement("button")
        let button5 = document.createElement("button")
        let button6 = document.createElement("button")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(button1)
        game.appendChild(button2)
        game.appendChild(button3)
        game.appendChild(button4)
        game.appendChild(button5)
        game.appendChild(button6)

        button1.style.width = `13.9vw`
        button1.style.height = `20.1vh`
        button1.style.transform = `translate(16.5vw, 41.4vh)`
        button1.style.opacity = `80%`
        button1.onclick = this.webmail

        button2.style.width = `6.5vw`
        button2.style.height = `24.8vh`
        button2.style.transform = `translate(31.5vw, 31.7vh)`
        button2.style.opacity = `80%`
        button2.onclick = this.osiris

        button3.style.width = `9.6vw`
        button3.style.height = `9.3vh`
        button3.style.transform = `translate(35.5vw, 63vh)`
        button3.style.opacity = `80%`
        button3.onclick = this.rooster

        button4.style.width = `10.9vw`
        button4.style.height = `14vh`
        button4.style.transform = `translate(56.8vw, 42.5vh)`
        button4.style.opacity = `80%`
        button4.onclick = this.studentenServiceCenter

        button5.style.width = `11.1vw`
        button5.style.height = `13.6vh`
        button5.style.transform = `translate(53.2vw, 65.8vh)`
        button5.style.opacity = `80%`
        button5.onclick = this.studentenpas

        button6.style.width = `10.8vw`
        button6.style.height = `24.8vh`
        button6.style.transform = `translate(72.2vw, 42.5vh)`
        button6.style.opacity = `80%`
        button6.onclick = this.lms
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
}