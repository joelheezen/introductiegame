class Act1 {

    private input1 = document.createElement("input")
    private input2 = document.createElement("input")
    private input3 = document.createElement("input")

    private button1 = document.createElement("button")

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
        let location = localStorage.getItem('location')
        background.style.backgroundImage = `url(assets/PRODUCTION/PRODUCTION/ASSETS/${location}_door.jpg)`
        game.appendChild(background)

        let banner = document.createElement('banner')
        game.appendChild(banner)

        let act1Box = document.createElement('act1Box')
        act1Box.innerHTML = 'Oh nee! De deur zit dicht en heeft een specifieke sleutel nodig om gepend te worden. Vul de juisten vormen van de sleutel in.'
        game.appendChild(act1Box)
        
        game.appendChild(this.input1)
        this.input1.classList.add('inputShape')
        this.input1.style.transform = `translate(26vw, 39.2vh)`
        this.input1.value = this.input1Save
        this.input1.id = "input1"

        game.appendChild(this.input2)
        this.input2.classList.add('inputShape')
        this.input2.style.transform = `translate(42.7vw, 39.2vh)`
        this.input2.value = this.input2Save
        this.input2.id = "input2"

        game.appendChild(this.input3)
        this.input3.classList.add('inputShape')
        this.input3.style.transform = `translate(59.2vw, 39.2vh)`
        this.input3.value = this.input3Save
        this.input3.id = "input3"

        game.appendChild(this.button1)
        this.button1.style.width = `15.1vw`
        this.button1.style.height = `7.5vh`
        this.button1.style.transform = `translate(42.4vw, 47.9vh)`
        this.button1.innerHTML = "VERZENDEN"
        this.button1.classList.add('verzenden')
        this.button1.addEventListener("click" , () => this.shapeCheck())

        let button2 = document.createElement("button")
        game.appendChild(button2)
        button2.classList.add('search')
        button2.style.width = `18.5vw`
        button2.style.height = `4vh`
        button2.style.transform = `translate(25.25vw, 61vh)`
        button2.style.opacity = `1`
        button2.innerHTML = 'Online zoeken naar vormen'
        button2.addEventListener("click" , () => this.searchOnline())

        let button3 = document.createElement("button")
        game.appendChild(button3)
        button3.style.width = `9vw`
        button3.style.height = `7.6vh`
        button3.style.transform = `translate(91vw, 0vh)`
        button3.style.opacity = `0`
        button3.addEventListener("click" , () => this.searchOnline())
    }

    shapeCheck() {
        console.log("button 1 is pressed")
        let shape1 = (<HTMLInputElement>document.getElementById("input1")).value
        let shape2 = (<HTMLInputElement>document.getElementById("input2")).value
        let shape3 = (<HTMLInputElement>document.getElementById("input3")).value
        if (shape1 == "vierkant" && shape2 == "driehoek" && shape3 == "rondje"){

            document.getElementsByTagName("game")[0].innerHTML = ""
            new Pause(1,'EnterBuilding')
            
        }
        else{
            
        }
    }

    onlinePopup(title:string,message:string,open:string){
        let popup = document.createElement('onlinePopup')

        let popupTitle = document.createElement('popupTitle')
        popupTitle.innerHTML = title

        let popupMessage = document.createElement('popupMessage')
        popupMessage.innerHTML = message

        let doorgaan = document.createElement('button')
        doorgaan.innerHTML = 'Doorgaan'

        doorgaan.addEventListener('click',()=>{

            if(open !== ''){
                window.open(open, '_blank');
            }
            
            let wrong = document.createElement('wrong')
            wrong.innerHTML = 'Dit antwoord is onjuist. Probeer het nog een keer.'

            game.appendChild(wrong)

            setTimeout(() => {
                for (let index = 0; index < inputs.length; index++) {
                    inputs[index].style.border = ''
                    wrong.remove()
                }
            }, 2000);

            
        }
    }

    searchOnline() {
        
        this.input1Save = (<HTMLInputElement>document.getElementById("input1")).value
        this.input2Save = (<HTMLInputElement>document.getElementById("input2")).value
        this.input3Save = (<HTMLInputElement>document.getElementById("input3")).value
        
        document.getElementsByTagName("game")[0].innerHTML = ""
        
        let background = document.createElement("backgroundOnline")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(background)

        let banner = document.createElement('banner')
        game.appendChild(banner)

        if(this.popupSave == false){
            new CenterPopup('Welkom op jullie online plattegrond','Misschien is het handig om even een mailtje te sturen naar het studenten service center over de sleutel','')
            this.popupSave = true;
        }

        let button1 = document.createElement("button")
        let button2 = document.createElement("button")
        let button3 = document.createElement("button")
        let button4 = document.createElement("button")
        let button5 = document.createElement("button")
        let button6 = document.createElement("button")
        let button7 = document.createElement("button")
        
        game.appendChild(button1)
        game.appendChild(button2)
        game.appendChild(button3)
        game.appendChild(button4)
        game.appendChild(button5)
        game.appendChild(button6)
        game.appendChild(button7)

        button1.style.width = `15.6vw`
        button1.style.height = `60.9vh`
        button1.style.transform = `translate(14.5vw, 20.8vh)`
        button1.style.opacity = `0`
        button1.addEventListener("click" , () => this.webmail())

        button2.style.width = `22vw`
        button2.style.height = `12.3vh`
        button2.style.transform = `translate(31.7vw, 69.8vh)`
        button2.style.opacity = `0`
        button2.addEventListener("click" , () => this.rooster())

        button3.style.width = `10.7vw`
        button3.style.height = `27.3vh`
        button3.style.transform = `translate(55vw, 20.7vh)`
        button3.style.opacity = `0`
        button3.addEventListener("click" , () => this.studentenServiceCenter())

        button4.style.width = `16.3vw`
        button4.style.height = `18vh`
        button4.style.transform = `translate(59vw, 63.8vh)`
        button4.style.opacity = `0`
        button4.addEventListener("click" , () => this.studentenpas())

        button5.style.width = `10.2vw`
        button5.style.height = `61.3vh`
        button5.style.transform = `translate(77vw, 20.8vh)`
        button5.style.opacity = `0`
        button5.addEventListener("click" , () => this.lms())

        button6.style.width = `9vw`
        button6.style.height = `7.6vh`
        button6.style.transform = `translate(91vw, 0vh)`
        button6.style.opacity = `0`
        button6.addEventListener("click" , () => this.goBack())

        button7.style.width = `8.5vw`
        button7.style.height = `18vh`
        button7.style.transform = `translate(67vw, 20.8vh)`
        button7.style.opacity = `0`
        button7.addEventListener("click" , () => this.osiris())

    }

    webmail(){
        console.log("webmail is aangeklikt")

        window.open('https://webmail.hr.nl', '_blank');
    }

    osiris(){
        console.log("osiris is aangeklikt")
        window.open('osiris.html', '_blank');
    }

    rooster(){
        new CenterPopup('Rooster','Klik op doorgaan om je rooster te zien','https://hint.hr.nl/nl/HR/Studie/roosters-en-cijfers/Lesrooster/')
    }

    studentenServiceCenter(){
        new CenterPopup('Student Service Center','Mail het SSC met je persoonlijke studentenmail:ssc@hr.nl','')
    }

    studentenpas(){
        console.log("studentenpas is aangeklikt")
        let game = document.getElementsByTagName("game")[0]
        
        var img = document.createElement('img')  
        img.src = "/docs/assets/studentenpas.png";
        img.classList.add('studentenPas')  
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
        button.style.opacity = `0`

        button.addEventListener("click" , function(){
            button.style.display = `none`
            game.removeChild(img);
            button.remove()
        })
    }

    lms(){
        new CenterPopup('LMS','Verschillende vakken en informatie kun je vinden door op doorgaan te klikken','https://lms.hr.nl')
    }

    goBack(){
        console.log("terug naar invulscherm")
        document.getElementsByTagName("game")[0].innerHTML = ""
        this.createAnswerScreen()
    }
}