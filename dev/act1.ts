class Act1 {

    constructor(){
        let game = document.getElementsByTagName("game")[0]

        let background = document.createElement("backgroundact1")
        game.appendChild(background)

        let input1 = document.createElement("input")
        game.appendChild(input1)
        input1.style.width = `13.7vw`
        input1.style.height = `5.7vh`
        input1.style.transform = `translate(25.4vw, 39.3vh)`
        input1.style.borderRadius = `25px`
        input1.style.border = `none`
        input1.style.fontSize = `20px`
        input1.style.paddingLeft = `20px`
        input1.style.fontFamily = `Arial Black`
        input1.style.textTransform = `uppercase`

        let input2 = document.createElement("input")
        game.appendChild(input2)
        input2.style.width = `13.7vw`
        input2.style.height = `5.7vh`
        input2.style.transform = `translate(27.1vw, 39.3vh)`
        input2.style.borderRadius = `25px`
        input2.style.border = `none`
        input2.style.fontSize = `20px`
        input2.style.paddingLeft = `20px`
        input2.style.fontFamily = `Arial Black`
        input2.style.textTransform = `uppercase`

        let input3 = document.createElement("input")
        game.appendChild(input3)
        input3.style.width = `13.7vw`
        input3.style.height = `5.7vh`
        input3.style.transform = `translate(28.7vw, 39.3vh)`
        input3.style.borderRadius = `25px`
        input3.style.border = `none`
        input3.style.fontSize = `20px`
        input3.style.paddingLeft = `20px`
        input3.style.fontFamily = `Arial Black`
        input3.style.textTransform = `uppercase`

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