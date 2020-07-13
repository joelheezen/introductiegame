class Act3{

    game = document.getElementsByTagName("game")[0]
    bg:HTMLElement = document.createElement("videoBackground")
    video = (<HTMLAudioElement>document.createElement("video"))

    constructor(){
        
        let playButton = document.createElement("button")

        this.bg.style.backgroundColor = "black"
        this.game.appendChild(this.bg)
        this.game.appendChild(this.video)
        this.game.appendChild(playButton)

        playButton.style.width = `100vw`
        playButton.style.height = `100vh`
        playButton.style.opacity = `0%`
        playButton.addEventListener("click", () => this.togglePlay())

        this.video.src = 'assets/Akte3/startAct3.mp4'
        this.video.autoplay = true
        this.video.controls = false
        this.video.playbackRate = 16
        this.video.onended = function() {
            let game = document.getElementsByTagName("game")[0]
            game.innerHTML = ""
            let background = document.createElement("backgroundAct3")
            game.appendChild(background)

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

            button1.style.width = `7.2vw`
            button1.style.height = `14.4vh`
            button1.style.transform = `translate(31vw, 31.8vh)`
            button1.style.opacity = `30%`
            button1.addEventListener("click" , function(){
                let popup = document.createElement("popup")
                let game = document.getElementsByTagName("game")[0]
                game.appendChild(popup)
                popup.style.backgroundImage = `url(assets/PRODUCTION/PRODUCTION/ASSETS/map.png)`
                popup.style.backgroundSize = `100% 100%`
                popup.style.backgroundRepeat = `no-repeat`
                popup.style.width = `80vw`
                popup.style.height = `80vh`
                popup.style.transform = `translate(10vw, 10vh)`
                popup.style.position = `absolute`
                popup.style.boxShadow = `rgba(0,0,0,0.25) 20px 20px`
                popup.style.borderRadius = `15px`

                let mapArea = document.createElement("mapArea")
                game.appendChild(mapArea)
                mapArea.style.width = `80vw`
                mapArea.style.height = `80vh`
                mapArea.style.transform = `translate(10vw, 10vh)`
                mapArea.style.zIndex = `2`
                mapArea.style.position = `absolute`

                let pin1 = document.createElement("pin")
                let pin2 = document.createElement("pin")
                let pin3 = document.createElement("pin")
                let pin4 = document.createElement("pin")
                let pin5 = document.createElement("pin")
                let pin6 = document.createElement("pin")
                let pin7 = document.createElement("pin")
                let pin8 = document.createElement("pin")
                let pin9 = document.createElement("pin")
                let pin10 = document.createElement("pin")
                let pin11 = document.createElement("pin")
                let pin12 = document.createElement("pin")
                let pin13 = document.createElement("pin")

                mapArea.appendChild(pin1)
                mapArea.appendChild(pin2)
                mapArea.appendChild(pin3)
                mapArea.appendChild(pin4)
                mapArea.appendChild(pin5)
                mapArea.appendChild(pin6)
                mapArea.appendChild(pin7)
                mapArea.appendChild(pin8)
                mapArea.appendChild(pin9)
                mapArea.appendChild(pin10)
                mapArea.appendChild(pin11)
                mapArea.appendChild(pin12)
                mapArea.appendChild(pin13)

                let url1 = "url(assets/Akte3/Hofpleinfontein.jpg)"
                let url2 = "url(assets/Akte3/RotterdamCS.jpg)"
                let url3 = "url(assets/Akte3/Feyenoordstadion.jpg)"
                let url4 = "url(assets/Akte3/KunstwerkBelichaamdeEenheid.jpg)"
                let url5 = "url(assets/Akte3/Erasmusbrug.jpg)"
                let url6 = "url(assets/Akte3/StationBlaak.jpg)"
                let url7 = "url(assets/Akte3/ErasmusMC.jpg)"
                let url8 = "url(assets/Akte3/Binnenrotte.jpg)"
                let url9 = "url(assets/Akte3/markthal.jpg)"
                let url10 = "url(assets/Akte3/CentraleBibliotheek.jpg)"
                let url11 = "url(assets/Akte3/Beurstraverse.jpg)"
                let url12 = "url(assets/Akte3/Blaaktoren.jpg)"
                let url13 = "url(assets/Akte3/KunstwerkDeGestileerdeBloem.jpg)"

                let text1 = `De Hofpleinfontein Midden in het verkeersplein Hofplein staat een grote fontein. Deze Hofpleinfontein werd in 1939 aan de stad Rotterdam geschonken door de rederij Van Ommeren die zijn honderjarige bestaan vierde. De fontein wordt in de volksmond ook wel de Flipspuit genoemd, verwijzend naar Philippus "Flip" van Ommeren. Door de centrale ligging, pal naast de Coolsingel, is het een plaats geworden waar grote successen worden gevierd van voetbalclub Feyenoord en het Nederlands voetbalelftal. Bij die overwinningen springen en feesten supporters in de fontein.`
                let text2 = `Rotterdam Centraal Station Het huidige stationsgebouw, gelegen aan het Stationsplein, werd op 13 maart 2014 officieel geopend door koning Willem-Alexander. Het ontwerp verwierf meerdere internationale prijzen. Maar Rotterdammers hebben hun stationsgebouw zoals gewoonlijk een minder flatteuze bijnaam gegeven! `
                let text3 = `Feyenoordstadion “Ga je mee naar het stadion, naar de club van Rood en Wit”. Dit stadion is beter bekend onder de naam ………. `
                let text4 = `'De Belichaamde Eenheid' Dit kunstwerk stond ooit bij de ingang van een van de locaties van Hogeschool Rotterdam (Museumpark Hoogbouw); destijds het hoofdkantoor van Unilever. Bij de verhuizing naar de Weena is het kunstwerk meeverhuisd. `
                let text5 = `Erasmusbrug De Erasmusbrug is een verhaal apart en heeft wel meer dan 20 bijnamen, waaronder ‘de Zwaan’, ‘de Harp’ en 'de Wipkip’. Toch is ‘de Zwaan’ de meest gebruikte bijnaam. `
                let text6 = `Station Blaak De opdracht die de architect had bij het ontwerpen van het station was dat er voldoende oriëntatiepunten moesten zijn voor de reizigers. Dit is ook de reden dat de architect een opvallende constructie boven de grond maakte, zodat het station meteen opvalt en te herkennen is. Het ontwerp lijkt een beetje op een vliegende schotel. Veel mensen noemen het ook een verwelkte zonnebloem of fluitketel. Voor die laatste bijnaam moet je wel iets meer fantasie hebben.. `
                let text7 = `Erasmus Medische Centrum Op 1 juni 2002 fuseerden het Dijkzigtziekenhuis, het Sophia Kinderziekenhuis, de Daniel den Hoedkliniek en de "Faculteit der Geneeskunde en Gezondheidswetenschappen" van de Erasmus Universiteit Rotterdam tot het huidige Erasmus MC. “Groot, wit, vierkant…. Ik begrijp het wel” zei een Rotterdammer over de bijnaam van dit gebouw. `
                let text8 = `Binnenrotte Hier wordt op dinsdag en zaterdag markt gehouden. Daarnaast wordt het plein ook veelvuldig gebruikt voor evenementen. Opgravingen hebben aangetoond dat de vroegste nederzettingen aan de rivier de Rotte hier het begin van de stad Rotterdam hebben ingeluid. De Binnenrotte is een grote, open ruimte en daar is ook de bijnaam ‘Landingsbaan’ van afgeleid. `
                let text9 = `Markthal Deze koophemel herbergt delicatessen, verse producten, allerlei eettentjes, een supermarkt en slijterij. Toch komen de meeste toeristen voor iets anders. Camera’s klikken onafgebroken en zijn allemaal gericht op het plafond van de iconische Markthal. Rotterdammers spreken trots over hun ‘Sixtijnse Kapel’. `
                let text10 = `Centrale Bibliotheek Aan de opvallende gele buizen aan de buitenkant van dit gebouw dankt de bibliotheek haar bijnaam. Waar doet het jou aan denken? Net als meer gebouwen in Rotterdam, draagt de bibliotheek een citaat van een beroemde Rotterdammer op de gevel: “Heel de aarde is je vaderland” schreef niemand minder dan Desiderius Erasmus. Bezoek ook is de Erasmus Experience in de bibliotheek als je meer over deze grote denker wil leren. `
                let text11 = `Beurstraverse Deze verdiepte winkelstraat loopt onder de Coolsingel door. De onhandige trappen ogen misschien mooi, maar lopen voor geen meter! Grote ketens hebben hier allemaal een plek. `
                let text12 = `De Blaaktoren Woontoren. Voor Rotterdammers beter bekend als het ‘potlood’.  `
                let text13 = `'De gestileerde bloem' Dit naamloze kunstwerk is een geschenk van de Bijenkorf aan de stad Rotterdam. Het heeft later de titel ‘de gestileerde bloem’ gekregen. Sommige Rotterdammers noemen het gewoonweg ‘het ding’. Anderen zien er een spoorwegongeluk in.  `
                
                pin1.style.transform = `translate(30.5vw, 35.7vh)`
                pin1.style.zIndex = `3`
                pin1.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url1}`

                    pinPopup.style.transform = `translate(16vw, 1vh)`
                    pinPopup.innerHTML += text1
                })
                pin1.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin2.style.transform = `translate(26.2vw, 34.8vh)`
                pin2.style.zIndex = `3`
                pin2.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url2}`

                    pinPopup.style.transform = `translate(11vw, 0.7vh)`
                    pinPopup.innerHTML += text2
                })
                pin2.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin3.style.transform = `translate(50.3vw, 75.7vh)`
                pin3.style.zIndex = `3`
                pin3.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url3}`

                    pinPopup.style.transform = `translate(36vw, 42vh)`
                    pinPopup.innerHTML += text3
                })
                pin3.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin4.style.transform = `translate(28.3vw, 36.7vh)`
                pin4.style.zIndex = `3`
                pin4.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url4}`

                    pinPopup.style.transform = `translate(14vw, 2vh)`
                    pinPopup.innerHTML += text4
                })
                pin4.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin5.style.transform = `translate(34.3vw, 56.7vh)`
                pin5.style.zIndex = `3`
                pin5.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url5}`

                    pinPopup.style.transform = `translate(20vw, 23vh)`
                    pinPopup.innerHTML += text5
                })
                pin5.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin6.style.transform = `translate(35.6vw, 42vh)`
                pin6.style.zIndex = `3`
                pin6.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url6}`

                    pinPopup.style.transform = `translate(21vw, 7.7vh)`
                    pinPopup.innerHTML += text6
                })
                pin6.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin7.style.transform = `translate(25.8vw, 55.1vh)`
                pin7.style.zIndex = `3`
                pin7.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url7}`

                    pinPopup.style.transform = `translate(11.5vw, 21vh)`
                    pinPopup.innerHTML += text7
                })
                pin7.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin8.style.transform = `translate(34.3vw, 37.9vh)`
                pin8.style.zIndex = `3`
                pin8.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url8}`

                    pinPopup.style.transform = `translate(20vw, 5.3vh)`
                    pinPopup.innerHTML += text8
                })
                pin8.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin9.style.transform = `translate(32.2vw, 39.2vh)`
                pin9.style.zIndex = `3`
                pin9.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url9}`

                    pinPopup.style.transform = `translate(19.3vw, 5.2vh)`
                    pinPopup.innerHTML += text9
                })
                pin9.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin10.style.transform = `translate(36.5vw, 39.2vh)`
                pin10.style.zIndex = `3`
                pin10.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url10}`

                    pinPopup.style.transform = `translate(22.9vw, 5.7vh)`
                    pinPopup.innerHTML += text10
                })
                pin10.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin11.style.transform = `translate(30.4vw, 41.3vh)`
                pin11.style.zIndex = `3`
                pin11.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url11}`

                    pinPopup.style.transform = `translate(17vw, 10vh)`
                    pinPopup.innerHTML += text11
                })
                pin11.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin12.style.transform = `translate(33.8vw, 41.7vh)`
                pin12.style.zIndex = `3`
                pin12.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url12}`

                    pinPopup.style.transform = `translate(20vw, 10vh)`
                    pinPopup.innerHTML += text12
                })
                pin12.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin13.style.transform = `translate(31.7vw, 43.6vh)`
                pin13.style.zIndex = `3`
                pin13.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url13}`

                    pinPopup.style.transform = `translate(18vw, 11vh)`
                    pinPopup.innerHTML += text13
                })
                pin13.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                let button = document.createElement("button")
                game.appendChild(button)
                button.style.width = `100vw`
                button.style.height = `100vh`
                button.style.opacity = `0%`
                button.style.zIndex = `1`
                button.style.position = `absolute`
                button.addEventListener("click", function(){
                    popup.remove()
                    button.remove()
                    mapArea.remove()
                })

                let char1 = document.createElement("char")
                let char2 = document.createElement("char")
                let char3 = document.createElement("char")
                let char4 = document.createElement("char")
                let char5 = document.createElement("char")

                mapArea.appendChild(char1)
                mapArea.appendChild(char2)
                mapArea.appendChild(char3)
                mapArea.appendChild(char4)
                mapArea.appendChild(char5)

                char1.style.backgroundImage = `url(assets/Akte3/cees.png)`
                char1.style.backgroundSize = `100% 100%`
                char1.style.width = `5vw`
                char1.style.height = `10vh`
                char1.style.position = `absolute`
                char1.style.transform = `translate(42.5vw, 33vh)`
                char1.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    pinPopup.style.transform = `translate(29.5vw, 15vh)`
                    pinPopup.innerHTML += `Mijn naam is Cees Jansen. Bij een studentenvereniging maak je vrienden voor het leven. Elke vereniging heeft een eigen cultuur. Onze vereniging is de oudste van Rotterdam en bestaat al meer dan 100 jaar! `
                    pinPopup.style.paddingTop = `1vh`
                    pinPopup.style.fontSize = `1.5vh`
                })
                char1.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                char2.style.backgroundImage = `url(assets/Akte3/zoe.png)`
                char2.style.backgroundSize = `100% 100%`
                char2.style.width = `5vw`
                char2.style.height = `10vh`
                char2.style.position = `absolute`
                char2.style.transform = `translate(25.5vw, 42vh)`
                char2.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    pinPopup.style.transform = `translate(13vw, 23vh)`
                    pinPopup.innerHTML += `Bij ons op de sociëteit organiseren we de mooiste feesten. Ook heb ik een hele leuke club waarmee ik samen studeer en allerlei dingen onderneem. Tijdens de introductie gaan verenigingen trouwens de hele stad door om zichzelf te promoten onder eerstejaars. Ik ga zo maar weer eens naar mijn eigen sociëteit 😉. Liefs, Zoë `
                    pinPopup.style.paddingTop = `1vh`
                    pinPopup.style.fontSize = `1.5vh`
                })
                char2.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                char3.style.backgroundImage = `url(assets/Akte3/loes.png)`
                char3.style.backgroundSize = `100% 100%`
                char3.style.width = `5vw`
                char3.style.height = `10vh`
                char3.style.position = `absolute`
                char3.style.transform = `translate(37.6vw, 42.3vh)`
                char3.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    pinPopup.style.transform = `translate(25vw, 24vh)`
                    pinPopup.innerHTML += `Hi, Ik ben Loes. Ik vind het leuk om samen op de vereniging te studeren. Natuurlijk kom ik er ook om te ontspannen, mensen te leren kennen, etc. Studeren en lid zijn gaat goed samen. Nou, ik ga maar weer eens. Op naar "Koinoonia". `
                    pinPopup.style.paddingTop = `1vh`
                    pinPopup.style.fontSize = `1.5vh`
                })
                char3.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                char4.style.backgroundImage = `url(assets/Akte3/donna.png)`
                char4.style.backgroundSize = `100% 100%`
                char4.style.width = `5vw`
                char4.style.height = `10vh`
                char4.style.position = `absolute`
                char4.style.transform = `translate(42.5vw, 42vh)`
                char4.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    pinPopup.style.transform = `translate(30vw, 25vh)`
                    pinPopup.innerHTML += `Hoi, ik ben Donna. Ook ik ben lid bij een vereniging. Als studentenvereniging zetten we ons ook in voor maatschappelijke projecten. En je leert veel door commissies en het organiseren van evenementen. Echt een goede aanvulling op mijn studententijd.  `
                    pinPopup.style.paddingTop = `1vh`
                    pinPopup.style.fontSize = `1.5vh`
                })
                char4.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                char5.style.backgroundImage = `url(assets/Akte3/werner.png)`
                char5.style.backgroundSize = `100% 100%`
                char5.style.width = `5vw`
                char5.style.height = `10vh`
                char5.style.position = `absolute`
                char5.style.transform = `translate(20.5vw, 42vh)`
                char5.addEventListener("mouseover", function(){
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    pinPopup.style.transform = `translate(8vw, 24vh)`
                    pinPopup.innerHTML += `NSR is de grootste christelijke vereniging van Rotterdam. We zitten op het Eendrachtsplein. Van alle RKvV-verenigingen zijn we de jongste. Toch bestaan we al weer sinds 1987! We combineren vriendschap, verdieping en gezelligheid. Kom eens langs om kennis te maken! Groetjes, Werner`
                    pinPopup.style.paddingTop = `1vh`
                    pinPopup.style.fontSize = `1.5vh`
                })
                char5.addEventListener("mouseout", function(){
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

            })

            button2.style.width = `11.5vw`
            button2.style.height = `14.3vh`
            button2.style.transform = `translate(44.4vw, 37.6vh)`
            button2.style.opacity = `30%`
            button2.addEventListener("click" , function(){
                let game = document.getElementsByTagName("game")[0]
                let popup = document.createElement("popup")
                game.appendChild(popup)
                popup.style.backgroundImage = `url(assets/PRODUCTION/PRODUCTION/ASSETS/notebook_open.png)`
                popup.style.zIndex = `2`
                popup.style.width = `90vw`
                popup.style.height = `90vh`
                popup.style.backgroundSize = `100% 100%`
                popup.style.backgroundRepeat = `no-repeat`
                popup.style.transform = `translate(5vw, 5vh)`
                popup.style.position = `absolute`


                let button = document.createElement("button")
                game.appendChild(button)
                button.style.width = `100vw`
                button.style.height = `100vh`
                button.style.opacity = `0%`
                button.style.zIndex = `1`
                button.style.position = `absolute`
                button.addEventListener("click", function(){
                    button.remove()
                    popup.remove()
                })

                let text1 = document.createElement("question")
                let text2 = document.createElement("question")
                let text3 = document.createElement("question")
                let text4 = document.createElement("question")

                let input1 = document.createElement("input")
                let input2 = document.createElement("input")
                let input3 = document.createElement("input")
                let input4 = document.createElement("input")

                popup.appendChild(text1)
                popup.appendChild(text2)
                popup.appendChild(text3)
                popup.appendChild(text4)

                popup.appendChild(input1)
                popup.appendChild(input2)
                popup.appendChild(input3)
                popup.appendChild(input4)


                text1.style.width = `25vw`
                text1.style.height = `2vh`
                text1.style.transform = `translate(12.3vw, 6vh)`
                text1.style.fontSize = `2.5vh`
                text1.style.position = `absolute`
                text1.innerHTML = `Vraag 1: "Rotterdamse icoon"`

                input1.style.width = `24.5vw`
                input1.style.height = `3vh`
                input1.style.transform = `translate(12.5vw, 11.5vh)`
                input1.style.position = `absolute`
                input1.style.border = `none`
                input1.style.fontSize = `2.5vh`
                input1.style.borderBottom = `dashed 2px`
                input1.style.backgroundColor = `transparent`

                text2.style.width = `28vw`
                text2.style.height = `2vh`
                text2.style.transform = `translate(12.3vw, 22.5vh)`
                text2.style.fontSize = `2.5vh`
                text2.style.position = `absolute`
                text2.innerHTML = `Vraag 2: "Tijd voor een feestje"`

                input2.style.width = `24.5vw`
                input2.style.height = `3vh`
                input2.style.transform = `translate(12.5vw, 28.5vh)`
                input2.style.position = `absolute`
                input2.style.border = `none`
                input2.style.fontSize = `2.5vh`
                input2.style.borderBottom = `dashed 2px`
                input2.style.backgroundColor = `transparent`

                text3.style.width = `25vw`
                text3.style.height = `2vh`
                text3.style.transform = `translate(12.3vw, 39.8vh)`
                text3.style.fontSize = `2.5vh`
                text3.style.position = `absolute`
                text3.innerHTML = `Vraag 3: "RKVV"`

                input3.style.width = `24.5vw`
                input3.style.height = `3vh`
                input3.style.transform = `translate(12.5vw, 45.8vh)`
                input3.style.position = `absolute`
                input3.style.border = `none`
                input3.style.fontSize = `2.5vh`
                input3.style.borderBottom = `dashed 2px`
                input3.style.backgroundColor = `transparent`

                text4.style.width = `25vw`
                text4.style.height = `2vh`
                text4.style.transform = `translate(12.3vw, 57.2vh)`
                text4.style.fontSize = `2.5vh`
                text4.style.position = `absolute`
                text4.innerHTML = `Vraag 4: "Rondje?"`

                input4.style.width = `24.5vw`
                input4.style.height = `3vh`
                input4.style.transform = `translate(12.5vw, 63.2vh)`
                input4.style.position = `absolute`
                input4.style.border = `none`
                input4.style.fontSize = `2.5vh`
                input4.style.borderBottom = `dashed 2px`
                input4.style.backgroundColor = `transparent`


            })

            button3.style.width = `16.3vw`
            button3.style.height = `17.9vh`
            button3.style.transform = `translate(68.7vw, 54.4vh)`
            button3.style.opacity = `30%`
            button3.addEventListener("click" , function(){
                let win = window.open("assets/Akte3/RKvVboekje2020.pdf")
                win!.focus()
            })

            button4.style.width = `10.5vw`
            button4.style.height = `11vh`
            button4.style.transform = `translate(27.5vw, 65.9vh)`
            button4.style.opacity = `30%`
            button4.addEventListener("click" , function(){
                let card = document.getElementById("card")
                if (card){
                    card.style.display = `block`
                    let button = document.createElement("button")
                    game.appendChild(button)

                    button.style.zIndex = `1`
                    button.style.width = `100vw`
                    button.style.height = `100vh`
                    button.style.opacity = `60%`
                    button.style.position = `absolute`
                    button.addEventListener("click", function(){
                        let card = document.getElementById("card")
                        card!.style.display = `none`
                        button.remove()
                })
                }
                else {

                let game = document.getElementsByTagName("game")[0]
                let popup = document.createElement("popup")

                game.appendChild(popup)

                popup.style.backgroundImage = `url(assets/Akte3/woordzoeker.png)`
                popup.style.backgroundRepeat = `no-repeat`
                popup.style.backgroundSize = `100% 100%`
                popup.style.width = `90vw`
                popup.style.height = `90vh`
                popup.style.position = `absolute`
                popup.style.zIndex = `2`
                popup.style.transform = `translate(5vw, 5vh)`
                popup.style.borderRadius = `20px`
                popup.style.boxShadow = `rgba(0,0,0,0.25) 20px 20px`
                popup.id = "card"

                let button = document.createElement("button")
                game.appendChild(button)

                button.style.zIndex = `1`
                button.style.width = `100vw`
                button.style.height = `100vh`
                button.style.opacity = `60%`
                button.style.position = `absolute`
                button.addEventListener("click", function(){
                    popup.style.display = `none`
                    button.remove()
                })

                let text = document.createElement("text")
                popup.appendChild(text)
                
                text.style.fontSize = `2.5vh`
                text.style.transform = `translate(50.5vw, 13vh)`
                text.style.position = `absolute`
                text.style.width = `40vw`
                text.style.height = `10vh`
                text.innerHTML = "Klik op de aansichtkaart om een stip te zetten, klik op de stip om deze weer weg te halen. Uiteindelijk komt er een uitkomst vul deze in in het notitieboekje!"
                
                popup.addEventListener("click", function(event){
                    let dot = document.createElement("dot")
                    popup.appendChild(dot)

                    let x = ((event.clientX / innerWidth) * 100)
                    let y = ((event.clientY / innerHeight) * 100)
                    dot.addEventListener("click",function(event){
                        dot.remove()
                        event.stopPropagation()
                    })
                    dot.style.transform = `translate(${x - 5.75}vw, ${y - 6.5}vh)`
                    dot.style.width = `1.5vw`
                    dot.style.height = `3vh`
                    dot.style.backgroundColor = `red`
                    dot.style.borderRadius = `50%`
                    dot.style.position = `absolute`
                    dot.style.zIndex = `3`
                    dot.style.opacity = `30%`

                })
                }
            })

            button5.style.width = `8vw`
            button5.style.height = `9.1vh`
            button5.style.transform = `translate(46.8vw, 56.8vh)`
            button5.style.opacity = `30%`
            button5.addEventListener("click" , function(){
                let popup = document.createElement("popup")
                let game = document.getElementsByTagName("game")[0]
                game.appendChild(popup)

                popup.style.backgroundImage = `url(assets/Akte3/Rotterdampas.png)`
                popup.style.backgroundSize = `100% 100%`
                popup.style.width = `40vw`
                popup.style.height = `30vh`
                popup.style.transform = `translate(30vw, 35vh)`
                popup.style.position = `absolute`
                popup.style.zIndex = `2`

                let button = document.createElement("button")
                game.appendChild(button)

                button.style.width = `100vw`
                button.style.height = `100vh`
                button.style.position = `absolute`
                button.style.opacity = `80%`
                button.style.zIndex = `1`
                button.addEventListener("click", function(){
                    button.remove()
                    popup.remove()
                })
            })

            button6.style.width = `12.4vw`
            button6.style.height = `3.7vh`
            button6.style.transform = `translate(62.6vw, 72vh)`
            button6.style.opacity = `30%`
            button6.addEventListener("click" , function(){
                let win = window.open("http://www.rotterdamstaattespringen.nl/")
                win!.focus()
            })
            }
    }

    togglePlay() {
        if (this.video.paused) {
            this.video.play()
        }
        else {
            this.video.pause()
        }
    }

}