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

        this.video.src = 'assets/Akte2/filmpjedecaanhorizontaal.mp4'
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

                let url = "url(assets/PRODUCTION/PRODUCTION/ASSETS/blaak.png)"

                let url1 = url
                let url2 = url
                let url3 = url
                let url4 = url
                let url5 = url
                let url6 = url
                let url7 = url
                let url8 = url
                let url9 = url
                let url10 = url
                let url11 = url
                let url12 = url
                let url13 = url

                let text1 = "Hofpleinfontein"
                let text2 = "Rotterdam CS"
                let text3 = "Feyenoordstadion"
                let text4 = "kuntswerk 'De Belichaamde Eenheid'"
                let text5 = "Erasmusbrug"
                let text6 = "Station Blaak"
                let text7 = "Erasmus Medisch Centrum"
                let text8 = "Binnenrotte plein"
                let text9 = "Markthal"
                let text10 = "Centrale Bibliotheek"
                let text11 = "Beurstraverse"
                let text12 = "Blaaktoren"
                let text13 = "Kunstwerk 'De gestileerde bloem'"
                
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

                    pinPopup.style.transform = `translate(23vw, 1vh)`
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

                    pinPopup.style.transform = `translate(18vw, 0.7vh)`
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

                    pinPopup.style.transform = `translate(43vw, 42vh)`
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

                    pinPopup.style.transform = `translate(21vw, 2vh)`
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

                    pinPopup.style.transform = `translate(27vw, 23vh)`
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

                    pinPopup.style.transform = `translate(28vw, 7.7vh)`
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

                    pinPopup.style.transform = `translate(18.5vw, 21vh)`
                    pinPopup.innerHTML += text7
                })
                pin7.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin8.style.transform = `translate(34.3vw, 38.7vh)`
                pin8.style.zIndex = `3`
                pin8.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url8}`

                    pinPopup.style.transform = `translate(27vw, 5.3vh)`
                    pinPopup.innerHTML += text8
                })
                pin8.addEventListener("mouseout", function(){
                    console.log("out")
                    let pinPopup = document.getElementsByTagName("pinPopup")[0]
                    pinPopup.remove()
                })

                pin9.style.transform = `translate(32.2vw, 40.7vh)`
                pin9.style.zIndex = `3`
                pin9.addEventListener("mouseover", function(){
                    console.log("in")
                    let pinPopup = document.createElement("pinPopup")
                    let mapArea = document.getElementsByTagName("mapArea")[0]
                    mapArea.appendChild(pinPopup)
                    let pinPopupImage = document.createElement("pinPopupImage")
                    pinPopup.appendChild(pinPopupImage)
                    pinPopupImage.style.backgroundImage = `${url9}`

                    pinPopup.style.transform = `translate(26.3vw, 5.2vh)`
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

                    pinPopup.style.transform = `translate(29.9vw, 5.7vh)`
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

                    pinPopup.style.transform = `translate(24vw, 10vh)`
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

                    pinPopup.style.transform = `translate(27vw, 10vh)`
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

                    pinPopup.style.transform = `translate(25vw, 11vh)`
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
                button.addEventListener("click", function(){
                    popup.remove()
                    button.remove()
                    mapArea.remove()
                })


            })

            button2.style.width = `11.5vw`
            button2.style.height = `14.3vh`
            button2.style.transform = `translate(44.4vw, 37.6vh)`
            button2.style.opacity = `30%`
            button2.addEventListener("click" , () => this.notebook())

            button3.style.width = `16.3vw`
            button3.style.height = `17.9vh`
            button3.style.transform = `translate(68.7vw, 54.4vh)`
            button3.style.opacity = `30%`
            button3.addEventListener("click" , () => this.rkvv())

            button4.style.width = `20.3vw`
            button4.style.height = `18vh`
            button4.style.transform = `translate(61.2vw, 63.8vh)`
            button4.style.opacity = `80%`
            button4.addEventListener("click" , () => this.studentenpas())

            button5.style.width = `12.8vw`
            button5.style.height = `61.3vh`
            button5.style.transform = `translate(83.7vw, 20.8vh)`
            button5.style.opacity = `80%`
            button5.addEventListener("click" , () => this.lms())

            button6.style.width = `9vw`
            button6.style.height = `7.6vh`
            button6.style.transform = `translate(91vw, 0vh)`
            button6.style.opacity = `80%`
            button6.addEventListener("click" , () => this.goBack())
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