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
        localStorage.setItem("index1", "0")
        localStorage.setItem("index2", "0")
        localStorage.setItem("index3", "0")
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
        act1Box.innerHTML = new Languages()[localStorage.getItem('language')][8]
        game.appendChild(act1Box)
        
        game.appendChild(this.input1)
        this.input1.classList.add('inputShape')
        this.input1.style.transform = `translate(26vw, 39.2vh)`
        this.input1.value = this.input1Save
        this.input1.id = "input1"
        this.input1.style.display = `none`

        game.appendChild(this.input2)
        this.input2.classList.add('inputShape')
        this.input2.style.transform = `translate(42.7vw, 39.2vh)`
        this.input2.value = this.input2Save
        this.input2.id = "input2"
        this.input2.style.display = `none`

        game.appendChild(this.input3)
        this.input3.classList.add('inputShape')
        this.input3.style.transform = `translate(59.2vw, 39.2vh)`
        this.input3.value = this.input3Save
        this.input3.id = "input3"
        this.input3.style.display = `none`

        var img1 = document.createElement('img')  
        img1.src = "assets/Akte 1/vormen/klaver.png";
        img1.classList.add('vorm1')  
        img1.id = "img1"
        game.appendChild(img1);

        let images1 = ["assets/Akte 1/vormen/driehoek.png", "assets/Akte 1/vormen/hart.png", "assets/Akte 1/vormen/cirkel.png", "assets/Akte 1/vormen/kroon.png", "assets/Akte 1/vormen/maan.png", "assets/Akte 1/vormen/ruiten.png", "assets/Akte 1/vormen/schoppen.png", "assets/Akte 1/vormen/ster.png", "assets/Akte 1/vormen/vierkant.png", "assets/Akte 1/vormen/klaver.png"];
        let index1 = 0;

        img1.addEventListener("click", function() {
            img1.src = images1[index1];
            index1 = (index1 === images1.length - 1) ? 0 : index1 + 1;
            let index1ToString = `${index1}`
            localStorage.setItem("index1", index1ToString)
        });

        var img2 = document.createElement('img')  
        img2.src = "assets/Akte 1/vormen/driehoek.png";
        img2.classList.add('vorm2')  
        img2.id = "img2"
        game.appendChild(img2);

        let images2 = ["assets/Akte 1/vormen/cirkel.png", "assets/Akte 1/vormen/hart.png", "assets/Akte 1/vormen/klaver.png", "assets/Akte 1/vormen/kroon.png", "assets/Akte 1/vormen/maan.png", "assets/Akte 1/vormen/ruiten.png", "assets/Akte 1/vormen/schoppen.png", "assets/Akte 1/vormen/ster.png", "assets/Akte 1/vormen/vierkant.png", "assets/Akte 1/vormen/driehoek.png"];
        let index2 = 0;

        img2.addEventListener("click", function() {
            img2.src = images2[index2];
            index2 = (index2 === images2.length - 1) ? 0 : index2 + 1;
            let index2ToString = `${index2}`
            localStorage.setItem("index2", index2ToString)
        });

        var img3 = document.createElement('img')  
        img3.src = "assets/Akte 1/vormen/cirkel.png";
        img3.classList.add('vorm3')  
        img3.id = "img3"
        game.appendChild(img3);

        let images3 = ["assets/Akte 1/vormen/driehoek.png", "assets/Akte 1/vormen/hart.png", "assets/Akte 1/vormen/klaver.png", "assets/Akte 1/vormen/kroon.png", "assets/Akte 1/vormen/maan.png", "assets/Akte 1/vormen/ruiten.png", "assets/Akte 1/vormen/schoppen.png", "assets/Akte 1/vormen/ster.png", "assets/Akte 1/vormen/vierkant.png", "assets/Akte 1/vormen/cirkel.png"];
        let index3 = 0;

        img3.addEventListener("click", function() {
            img3.src = images3[index3];
            index3 = (index3 === images3.length - 1) ? 0 : index3 + 1;
            let index3ToString = `${index3}`
            localStorage.setItem("index3", index3ToString)
        });

        game.appendChild(this.button1)
        this.button1.style.width = `15.1vw`
        this.button1.style.height = `7.5vh`
        this.button1.style.transform = `translate(42.4vw, 56vh)`
        this.button1.innerHTML = new Languages()[localStorage.getItem('language')][9]
        this.button1.classList.add('verzenden')
        this.button1.addEventListener("click" , () => this.shapeCheck())

        let button2 = document.createElement("button")
        game.appendChild(button2)
        button2.classList.add('search')
        button2.style.height = `4vh`
        button2.style.textAlign = 'left'
        button2.style.transform = `translate(25vw, 61vh)`
        button2.style.opacity = `1`
        button2.innerHTML = new Languages()[localStorage.getItem('language')][10]
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
        let shape1 = localStorage.getItem("index1")
        let shape2 = localStorage.getItem("index2")
        let shape3 = localStorage.getItem("index3")
        console.log(shape1)
        console.log(shape2)
        console.log(shape3)
        if (shape1 == "3" && shape2 == "9" && shape3 == "1"){

            document.getElementsByTagName("game")[0].innerHTML = ""
            new Pause(1,'EnterBuilding')
            
        }
        else{

            let game = document.getElementsByTagName('game')[0]
            let inputs = document.getElementsByTagName('img')

            for (let index = 0; index < inputs.length; index++) {
                inputs[index].style.border = 'solid 3px red'
            }

            let wrong = document.createElement('wrong')
            wrong.innerHTML = new Languages()[localStorage.getItem('language')][14]

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
            new CenterPopup(new Languages()[localStorage.getItem('language')][12],new Languages()[localStorage.getItem('language')][13],'')
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
        window.open('https://webmail.hr.nl', '_blank');
    }

    osiris(){
        window.open('osiris.html', '_blank');
    }

    rooster(){
        new CenterPopup(new Languages()[localStorage.getItem('language')][15],new Languages()[localStorage.getItem('language')][16],'https://hint.hr.nl/nl/HR/Studie/roosters-en-cijfers/Lesrooster/')
    }

    studentenServiceCenter(){

        if(localStorage.getItem('language') == 'dutch'){
            new CenterPopup(new Languages()[localStorage.getItem('language')][17],new Languages()[localStorage.getItem('language')][18],'https://hint.hr.nl/nl/HR/Studie/Studenten-Service-Center/contact-intro-game/?ticket=ST-8256325-afrgd0alCe3y9MWc7In5PdmV1MXNE42FUsq-20')
        }else if(localStorage.getItem('language') == 'english'){
            new CenterPopup(new Languages()[localStorage.getItem('language')][17],new Languages()[localStorage.getItem('language')][18],'https://hint.hr.nl/nl/HR/Studie/Studenten-Service-Center/contact-intro-game/ENG/')
        }
    }

    studentenpas(){
        let game = document.getElementsByTagName("game")[0]
        
        var img = document.createElement('img')  
        img.src = "assets/studentenpas.png";
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
        new CenterPopup('LMS',new Languages()[localStorage.getItem('language')][19],'https://lms.hr.nl')
    }

    goBack(){
        document.getElementsByTagName("game")[0].innerHTML = ""
        this.createAnswerScreen()
    }
}