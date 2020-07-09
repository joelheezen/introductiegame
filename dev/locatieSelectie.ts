class LocatieSelectie{

    background: HTMLElement = document.createElement('background')
    game: Element = document.getElementsByTagName('game')[0]

    constructor(){
        this.background.style.backgroundImage = ""
        this.locationSetter()
    }

    locationSetter(){
        let locationSet = document.createElement('locationsetter')
        this.game.appendChild(locationSet)

        let locationSelect = document.createElement('select')

        let locations = ['CMGT','Informatica']

        for (let index = 0; index < locations.length; index++) {
            let addToDrop = document.createElement('option')
            addToDrop.value = locations[index]
            addToDrop.innerHTML = locations[index]

            locationSelect.appendChild(addToDrop)
        }

        locationSet.appendChild(locationSelect)

        let thisLocation = document.createElement('button')
        thisLocation.id = 'buttonLocation'
        thisLocation.innerHTML = 'Kies opleiding'

        locationSet.appendChild(thisLocation)
        
    }

    locationPicker(){

    }

    locationMarker(){

    }
}

window.addEventListener('load',() => new LocatieSelectie)