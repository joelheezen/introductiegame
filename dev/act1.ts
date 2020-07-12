class Act1 {

    private input1 = document.createElement("input")
    private input2 = document.createElement("input")
    private input3 = document.createElement("input")
    private wrong_div = document.createElement("div")

    private input1Save :string = ""
    private input2Save :string = ""
    private input3Save :string = ""

    private popupSave :boolean = false

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
        button3.style.opacity = `0%`
        button3.addEventListener("click" , () => this.searchOnline())
    }

    shapeCheck() {
        console.log("button 1 is pressed")
        let shape1 = (<HTMLInputElement>document.getElementById("input1")).value
        let shape2 = (<HTMLInputElement>document.getElementById("input2")).value
        let shape3 = (<HTMLInputElement>document.getElementById("input3")).value
        if (shape1 == "vierkant" && shape2 == "driehoek" && shape3 == "rondje"){
            if (confirm("dit is het goede antwoord, wil je verder? klik op cancel voor een pauze.")){
                document.getElementsByTagName("game")[0].innerHTML = ""
                new EnterBuilding()
            }
            else{
                console.log("je neemt een pauze")
            }
        }
        else{
            let game = document.getElementsByTagName("game")[0]

            game.appendChild(this.wrong_div)
            this.wrong_div.style.width = `13.7vw`
            this.wrong_div.style.height = `5.7vh`
            this.wrong_div.style.transform = `translate(10vw, 39.2vh)`
            this.wrong_div.style.borderRadius = `25px`
            this.wrong_div.style.border = `none`
            this.wrong_div.style.fontSize = `20px`
            this.wrong_div.style.paddingLeft = `1vw`
            this.wrong_div.style.fontFamily = `Arial Black`
            this.wrong_div.style.textTransform = `uppercase`
            this.wrong_div.style.zIndex = `999`
            this.wrong_div.id = "input1"

            var myloc = new Image();  
            myloc.useMap = "/docs/assets/fout_antwoord.png";  
            var img = document.createElement('img')  
            img.setAttribute('src', myloc.useMap);  
            img.setAttribute('style', "height:25vh;width:30vw;transform:translate(28.3vw, 26.5vh);cursor:pointer;");  
            game.appendChild(img);
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

        let button_next = document.createElement("button")
        game.appendChild(button_next)

        if(this.popupSave == false){
            background.style.backgroundImage = `url(assets/plattegrond_popup.png)`
            this.popupSave = true
            background.style.zIndex = `9`
        }else{
            background.style.backgroundImage = `url(assets/plattegrond.jpg)`
            game.removeChild(button_next)
            background.style.zIndex = `-1`
        }

        button_next.style.width = `9.2vw`
        button_next.style.height = `5vh`
        button_next.style.transform = `translate(59.8vw, 64vh)`
        button_next.style.opacity = `0%`
        button_next.style.zIndex = `999`
        button_next.addEventListener("click" , function(){
            background.style.backgroundImage = `url(assets/plattegrond.jpg)`
            game.removeChild(button_next)
            background.style.zIndex = `-1`
        })

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
        button1.style.opacity = `0%`
        button1.addEventListener("click" , () => this.webmail())

        button2.style.width = `27.5vw`
        button2.style.height = `12.3vh`
        button2.style.transform = `translate(27.2vw, 69.8vh)`
        button2.style.opacity = `0%`
        button2.addEventListener("click" , () => this.rooster())

        button3.style.width = `13.2vw`
        button3.style.height = `27.3vh`
        button3.style.transform = `translate(56.3vw, 20.7vh)`
        button3.style.opacity = `0%`
        button3.addEventListener("click" , () => this.studentenServiceCenter())

        button4.style.width = `20.3vw`
        button4.style.height = `18vh`
        button4.style.transform = `translate(61.2vw, 63.8vh)`
        button4.style.opacity = `0%`
        button4.addEventListener("click" , () => this.studentenpas())

        button5.style.width = `12.8vw`
        button5.style.height = `61.3vh`
        button5.style.transform = `translate(83.7vw, 20.8vh)`
        button5.style.opacity = `0%`
        button5.addEventListener("click" , () => this.lms())

        button6.style.width = `9vw`
        button6.style.height = `7.6vh`
        button6.style.transform = `translate(91vw, 0vh)`
        button6.style.opacity = `0%`
        button6.addEventListener("click" , () => this.goBack())

    }

    webmail(){
        console.log("webmail is aangeklikt")

        window.open('https://webmail.hr.nl', '_blank');
    }

    osiris(){
        console.log("osiris is aangeklikt")
    }

    rooster(){
        console.log("rooster is aangeklikt")

        let background = <HTMLElement>document.getElementsByTagName("backgroundact1")[0]
        let game = document.getElementsByTagName("game")[0]

        let button_next = document.createElement("button")
        game.appendChild(button_next)

        let button_previous = document.createElement("button")
        game.appendChild(button_previous)

        
        background.style.backgroundImage = `url(assets/rooster_popup.png)`
        background.style.zIndex = `1`
        
    
        button_next.style.width = `9.2vw`
        button_next.style.height = `5vh`
        button_next.style.transform = `translate(59.8vw, 64vh)`
        button_next.style.opacity = `0%`
        button_next.style.zIndex = `999`
        button_next.addEventListener("click" , function(){
            background.style.backgroundImage = `url(assets/plattegrond.jpg)`
            button_next.remove()
            button_previous.remove()
            background.style.zIndex = `-1`
            window.open('https://google.nl', '_blank');
        })

        button_previous.style.width = `6.2vw`
        button_previous.style.height = `5vh`
        button_previous.style.transform = `translate(52.6vw, 64vh)`
        button_previous.style.opacity = `0%`
        button_previous.style.zIndex = `999`
        button_previous.addEventListener("click" , function(){
            background.style.backgroundImage = `url(assets/plattegrond.jpg)`
            button_previous.remove()
            button_next.remove()
            background.style.zIndex = `-1`
        })
    }

    studentenServiceCenter(){
        console.log("ssc is aangeklikt")

        let background = <HTMLElement>document.getElementsByTagName("backgroundact1")[0]
        let game = document.getElementsByTagName("game")[0]

        let button_next = document.createElement("button")
        game.appendChild(button_next)
        
        background.style.backgroundImage = `url(assets/ssc_popup.png)`
        background.style.zIndex = `1`
        
    
        button_next.style.width = `9.2vw`
        button_next.style.height = `5vh`
        button_next.style.transform = `translate(59.8vw, 64vh)`
        button_next.style.opacity = `0%`
        button_next.style.zIndex = `999`
        button_next.addEventListener("click" , function(){
            background.style.backgroundImage = `url(assets/plattegrond.jpg)`
            button_next.remove()
            background.style.zIndex = `-1`
        })
    }

    studentenpas(){
        console.log("studentenpas is aangeklikt")
        let game = document.getElementsByTagName("game")[0]
        var myloc = new Image();  
        myloc.useMap = "/docs/assets/studentenpas.png";  
        var img = document.createElement('img')  
        img.setAttribute('src', myloc.useMap);  
        img.setAttribute('style', "height:25vh;width:25vw;transform:translate(28.3vw, 26.5vh);cursor:pointer;");  
        game.appendChild(img);

        img.addEventListener("click" , function(){
            button.style.display = `none`
            game.removeChild(img);
            button.remove()
        })
        img.style.position = `absolute`

        let button = document.createElement("button")
        game.appendChild(button)

        button.style.width = `20.3vw`
        button.style.height = `18vh`
        button.style.transform = `translate(61.2vw, 63.8vh)`
        button.style.opacity = `0%`

        button.addEventListener("click" , function(){
            button.style.display = `none`
            game.removeChild(img);
            button.remove()
        })
    }

    lms(){
        console.log("lms is aangeklikt")

        let background = <HTMLElement>document.getElementsByTagName("backgroundact1")[0]
        let game = document.getElementsByTagName("game")[0]

        let button_next = document.createElement("button")
        game.appendChild(button_next)
        
        background.style.backgroundImage = `url(assets/lms_popup.png)`
        background.style.zIndex = `1`
        
    
        button_next.style.width = `9.2vw`
        button_next.style.height = `5vh`
        button_next.style.transform = `translate(59.8vw, 64vh)`
        button_next.style.opacity = `0%`
        button_next.style.zIndex = `999`
        button_next.addEventListener("click" , function(){
            background.style.backgroundImage = `url(assets/plattegrond.jpg)`
            button_next.remove()
            background.style.zIndex = `-1`
            window.open('https://lms.hr.nl', '_blank');
        })
    }

    goBack(){
        console.log("terug naar invulscherm")
        document.getElementsByTagName("game")[0].innerHTML = ""
        this.createAnswerScreen()
    }
}