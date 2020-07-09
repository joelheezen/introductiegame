class Act1 {

    private input1 = document.createElement("input")

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

        let input2 = document.createElement("input")
        game.appendChild(input2)
        input2.style.width = `13.7vw`
        input2.style.height = `5.7vh`
        input2.style.transform = `translate(42.7vw, 39.2vh)`
        input2.style.borderRadius = `25px`
        input2.style.border = `none`
        input2.style.fontSize = `20px`
        input2.style.paddingLeft = `1vw`
        input2.style.fontFamily = `Arial Black`
        input2.style.textTransform = `uppercase`

        let input3 = document.createElement("input")
        game.appendChild(input3)
        input3.style.width = `13.7vw`
        input3.style.height = `5.7vh`
        input3.style.transform = `translate(59.2vw, 39.2vh)`
        input3.style.borderRadius = `25px`
        input3.style.border = `none`
        input3.style.fontSize = `20px`
        input3.style.paddingLeft = `1vw`
        input3.style.fontFamily = `Arial Black`
        input3.style.textTransform = `uppercase`

        let button1 = document.createElement("button")
        game.appendChild(button1)
        button1.style.width = `15.1vw`
        button1.style.height = `7.5vh`
        button1.style.transform = `translate(42.4vw, 47.9vh)`
        button1.style.opacity = `80%`
        button1.onclick = this.shapeCheck

        let button2 = document.createElement("button")
        game.appendChild(button2)
        button2.style.width = `18.5vw`
        button2.style.height = `3vh`
        button2.style.transform = `translate(25.25vw, 61vh)`
        button2.style.opacity = `80%`
        button2.onclick = this.searchOnline
    }

    shapeCheck() {
        console.log("button 1 is pressed")
        let shape1 = this.input1
        console.log(shape1)
    }

    searchOnline() {
        console.log("button 2 is pressed")
    }

}