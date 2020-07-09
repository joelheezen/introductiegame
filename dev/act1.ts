class Act1{

    constructor(){
        let game = document.getElementsByTagName("game")[0]

        let background = document.createElement("backgroundact1")
        game.appendChild(background)

        let button = document.createElement("button")
        game.appendChild(button)

        let input1 = document.createElement("input")
        game.appendChild(input1)
        input1.style.width = `13.8vw`
        input1.style.height = `5.7vh`
        input1.style.transform = `translate(41.2vw, 38.4vh)`
        input1.style.borderRadius = `25px`
        input1.style.border = `none`
        input1.style.fontSize = `20px`
        input1.style.paddingLeft = `20px`
        input1.style.fontFamily = `Arial Black`
        input1.style.textTransform = `uppercase`
    }


}