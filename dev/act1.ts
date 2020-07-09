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
        console.log("gg")
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
        console.log(background)
    }

}