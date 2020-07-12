
class LocatieSelectie{

    background: HTMLElement = document.createElement('backgroundLocation')
    game: Element = document.getElementsByTagName('game')[0]
    educations =  new Locations()
    educationSet: HTMLElement
    currentLocation: any
    educationSelect: HTMLElement

    constructor(){
        this.background.style.backgroundImage = "url(assets/PRODUCTION/PRODUCTION/ASSETS/map.png"
        this.game.appendChild(this.background)
        this.educationSetter()
    }

    educationSetter(){
        this.educationSet = document.createElement('educationsetter')
        this.game.appendChild(this.educationSet)

        this.educationSet.innerHTML = "Om van start te gaan moeten we weten aan welke opleiding jij deel neemt. Kies uit deze lijst jouw opleiding."

        this.educationSelect = document.createElement('select')
           
        this.currentLocation = this.educations.academieplein.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.blaak.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.kralingse_zoom.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.lloyd_straat.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.max_euwelaan.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.museumpark_hoogbouw.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.museumpark_laagbouw.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.pieter_de_hoogweg.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.posthumalaan.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.rmd_rotterdam.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.rochussenstraat.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.wijnhaven_103.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.wijnhaven_107.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.wijnhaven_61.opleidingen
        this.addToSelect()
        this.currentLocation = this.educations.wijnhaven_99.opleidingen
        this.addToSelect()


        this.educationSet.appendChild(this.educationSelect)

        let thisLocation = document.createElement('button')
        thisLocation.innerHTML = 'Kies opleiding'
        thisLocation.addEventListener('click',() => this.saveEducation())

        this.educationSet.appendChild(thisLocation)
    }

    addToSelect(){
        for(let education in this.currentLocation){
            let addToDrop = document.createElement('option')
            addToDrop.value = this.currentLocation[education]
            addToDrop.innerHTML = this.currentLocation[education]
            this.educationSelect.appendChild(addToDrop)
        }
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

        this.locationMarker(34.3,67.9,'academieplein')
        this.locationMarker(46.3,57,'blaak')
        this.locationMarker(62.7,61.5,'kralingse_zoom')
        this.locationMarker(33.9,78.5,'lloyd_straat')
        this.locationMarker(64,60,'max_euwelaan')
        this.locationMarker(37,65,'museumpark_hoogbouw')
        this.locationMarker(38,63,'museumpark_laagbouw')
        this.locationMarker(33,72.5,'pieter_de_hoogweg')
        this.locationMarker(49,73,'posthumalaan')
        this.locationMarker(15.7,82,'rmd_rotterdam')
        this.locationMarker(35,67,'rochussenstraat')
        this.locationMarker(46,58,'wijnhaven_61')
        this.locationMarker(45,58.4,'wijnhaven_99')
        this.locationMarker(44.4,58.7,'wijnhaven_103')
        this.locationMarker(43.8,59,'wijnhaven_107')
    }

    locationMarker(x: number,y: number,location: string){
        let marker = document.createElement('pin')
        this.game.appendChild(marker)

        marker.style.transform = `translate(${x}vw,${y}vh)`

        marker.addEventListener('click',() =>{

            let yourEducation = localStorage.getItem('education')!
            let educations = new Locations

            let clicked

            switch (location) {
                case 'academieplein':
                    clicked = educations.academieplein
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'blaak':
                    clicked = educations.blaak
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'kralingse_zoom':
                    clicked = educations.kralingse_zoom
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'lloyd_straat':
                    clicked = educations.lloyd_straat
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'max_euwelaan':
                    clicked = educations.max_euwelaan
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'museumpark_hoogbouw':
                    clicked = educations.museumpark_hoogbouw
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'museumpark_laagbouw':
                    clicked = educations.museumpark_laagbouw
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'pieter_de_hoogweg':
                    clicked = educations.pieter_de_hoogweg
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'posthumalaan':
                    clicked = educations.posthumalaan
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'rmd_rotterdam':
                    clicked = educations.rmd_rotterdam
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'rochussenstraat':
                    clicked = educations.rochussenstraat
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'wijnhaven_61':
                    clicked = educations.wijnhaven_61
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'wijnhaven_99':
                    clicked = educations.wijnhaven_99
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'wijnhaven_103':
                    clicked = educations.wijnhaven_103
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                case 'wijnhaven_107':
                    clicked = educations.wijnhaven_107
                    if(clicked.opleidingen.indexOf(yourEducation) > -1){
                        this.popupLoc('correct',location,clicked.locatieInfo)
                    }else{
                        this.popupLoc('incorrect',location,clicked.locatieInfo)
                    }
                break;
                
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
            popupLocation.innerHTML += 'correct<br>'
            popupLocation.innerHTML += info
            let goto = document.createElement('button')
            popupLocation.appendChild(goto)
            goto.innerHTML = "Loop naar binnen"
            console.log('test')
            
            goto.addEventListener('click', () =>{ 
                console.log('test')
                document.getElementsByTagName("game")[0].innerHTML = ""
                new Act1
            }) 

        }else{
            popupLocation.innerHTML += 'incorrect<br>'
            popupLocation.innerHTML += info
            let goto = document.createElement('button')
            popupLocation.appendChild(goto)
            goto.innerHTML = "Probeer opnieuw"  

            goto.addEventListener('click', () =>{ 
                document.getElementsByTagName('popupLocation')[0].remove()
            }) 
        }


        
    }
}

