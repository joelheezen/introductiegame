
class LocatieSelectie{

    background: HTMLElement = document.createElement('backgroundLocation')
    game: Element = document.getElementsByTagName('game')[0]
    educations =  new Locations().collective
    educationSet: HTMLElement
    currentLocation: any
    educationSelect: HTMLElement

    constructor(){
        this.background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/map.png"
        this.game.appendChild(this.background)
        this.educationSetter()

        let back = document.createElement("button")
        back.id = 'backToLocatie'
        back.addEventListener('click',() => this.goBack())
        this.game.appendChild(back)
    }

    goBack(){
        this.game.innerHTML= ""
        new LocatieSelectie()
    }

    educationSetter(){
        this.educationSet = document.createElement('educationsetter')
        this.game.appendChild(this.educationSet)

        this.educationSet.innerHTML = "Om van start te gaan moeten we weten aan welke opleiding jij deel neemt. Kies uit deze lijst jouw opleiding."

        this.educationSelect = document.createElement('select')

        for (let index = 0; index < this.educations.length; index++) {

            this.currentLocation = this.educations[index].opleidingen
            for(let education in this.currentLocation){
                let addToDrop = document.createElement('option')
                addToDrop.value = this.currentLocation[education]
                addToDrop.innerHTML = this.currentLocation[education]
                this.educationSelect.appendChild(addToDrop)
            }
        }
           


        this.educationSet.appendChild(this.educationSelect)

        let thisLocation = document.createElement('button')
        thisLocation.innerHTML = 'Kies opleiding'
        thisLocation.addEventListener('click',() => this.saveEducation())

        this.educationSet.appendChild(thisLocation)
    }

    saveEducation(){
        let education = document.getElementsByTagName('select')[0].value
        localStorage.setItem('education',education)
        this.locationPicker()
    }

    locationPicker(){
        let map = document.createElement('map')
        this.game.appendChild(map)

        this.background.style.backgroundImage = "url(assets/akte_1_map@0.75x.jpg)"
        this.background.style.backgroundSize = "100% 100%"
        this.educationSet.remove()

        this.locationMarker(34.3,67.9,'academieplein',0)
        this.locationMarker(46.3,57,'blaak',1)
        this.locationMarker(62.7,61.5,'kralingse_zoom',2)
        this.locationMarker(33.9,78.5,'lloyd_straat',3)
        this.locationMarker(64,60,'max_euwelaan',4)
        this.locationMarker(37,65,'museumpark_hoogbouw',5)
        this.locationMarker(38,63,'museumpark_laagbouw',6)
        this.locationMarker(33,72.5,'pieter_de_hoogweg',7)
        this.locationMarker(49,73,'posthumalaan',8)
        this.locationMarker(15.7,82,'rmd_rotterdam',9)
        this.locationMarker(35,67,'rochussenstraat',10)
        this.locationMarker(46,58,'wijnhaven_61',11)
        this.locationMarker(45,58.4,'wijnhaven_99',12)
        this.locationMarker(44.4,58.7,'wijnhaven_103',13)
        this.locationMarker(43.8,59,'wijnhaven_107',14)
    }

    locationMarker(x: number,y: number,location: string,index: number){
        let marker = document.createElement('pin')
        this.game.appendChild(marker)

        marker.style.transform = `translate(${x}vw,${y}vh)`

        marker.addEventListener('click',() =>{

            let yourEducation = localStorage.getItem('education')!

            console.log(this.educations )

            if(this.educations[index].opleidingen.indexOf(yourEducation) > -1){
                    this.popupLoc('correct',location,this.educations[index].locatieInfo)
            }else{
                    this.popupLoc('incorrect',location,this.educations[index].locatieInfo)
            } 
        })
    }

    popupLoc(awnser: string,location: string,info: string){

        if(document.getElementsByTagName('popupLocation')[0]){
            document.getElementsByTagName('popupLocation')[0].remove()
        }

        let popupLocation = document.createElement('popupLocation')
        let locationImage = document.createElement('locationImage')

        this.game.appendChild(popupLocation)
        popupLocation.appendChild(locationImage)

        locationImage.style.backgroundImage = `url(assets/PRODUCTION/PRODUCTION/ASSETS/${location}.png)`
            
        if(awnser == 'correct'){
            popupLocation.innerHTML += '<b>Correct!</b>Dit is de locatie van jouw opleiding.<br>'
            popupLocation.innerHTML += `<p><a target='_blank' href='${info}'>Klik hier</a>voor meer informatie over deze locatie.</p>`
            let goto = document.createElement('button')
            popupLocation.appendChild(goto)
            goto.innerHTML = "Loop naar binnen"
            
            goto.addEventListener('click', () =>{   
                document.getElementsByTagName("game")[0].innerHTML = ""
                new Act1
            }) 

        }else{
            
            popupLocation.innerHTML += '<b>Incorrect!</b>Dit is niet de locatie van jouw opleiding'
            popupLocation.innerHTML += `<p><a target='_blank' href='${info}'>Klik hier</a>om te zien welke opleidingen hier wel gegeven worden.</p>`
            let goto = document.createElement('button')
            popupLocation.appendChild(goto)
            goto.innerHTML = "Probeer opnieuw"  

            goto.addEventListener('click', () =>{ 
                document.getElementsByTagName('popupLocation')[0].remove()
            }) 
        }


        
    }
}

