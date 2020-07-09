class LocatieSelectie{

    background: HTMLElement = document.createElement('backgroundLocation')
    game: Element = document.getElementsByTagName('game')[0]
    educations = new Array()
    educationSet: HTMLElement

    constructor(){
        this.background.style.backgroundImage = "url(/docs/assets/rotterdam_50.png"
        this.game.appendChild(this.background)
        this.educationSetter()
    }

    educationSetter(){
        this.educationSet = document.createElement('educationsetter')
        this.game.appendChild(this.educationSet)

        this.educationSet.innerHTML = "Om van start te gaan moeten we weten aan welke opleiding jij deel neemt. Kies uit deze lijst jouw opleiding."

        let educationSelect = document.createElement('select')

        this.educations = ['CMGT','Informatica','Communicatie','Crossmediale Communicatie','ICT Internet of Things','ICT Service Management']

        for (let index = 0; index < this.educations.length; index++) {
            let addToDrop = document.createElement('option')
            addToDrop.value = this.educations[index]
            addToDrop.innerHTML = this.educations[index]

            educationSelect.appendChild(addToDrop)
        }

        this.educationSet.appendChild(educationSelect)

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
        console.log('you didnt fuck up')
        this.background.style.backgroundImage = "url(/docs/assets/akte_1_map@0.75x.jpg)"
        this.background.style.backgroundSize = "100% 100%"
        this.educationSet.remove()

       
        this.locationMarker(5,5)
        this.locationMarker(5,5)
        

    }

    locationMarker(x: number,y: number){
        let marker = document.createElement('locationMarker')
        this.game.appendChild(marker)

        marker.style.transform = `translate(${x}vw,${y}vh)`
    }
}

//window.addEventListener('load',() => new LocatieSelectie)