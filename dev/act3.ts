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

                let playArea = document.createElement("playArea")
                game.appendChild(playArea)
                playArea.style.width = `80vw`
                playArea.style.height = `80vh`
                playArea.style.transform = `translate(10vw, 10vh)`
                playArea.style.zIndex = `2`
                playArea.style.position = `absolute`

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
                
                game.appendChild(pin1)
                game.appendChild(pin2)
                game.appendChild(pin3)
                game.appendChild(pin4)
                game.appendChild(pin5)
                game.appendChild(pin6)
                game.appendChild(pin7)
                game.appendChild(pin8)
                game.appendChild(pin9)
                game.appendChild(pin10)
                game.appendChild(pin11)
                game.appendChild(pin12)
                game.appendChild(pin13)
                

                let button = document.createElement("button")
                game.appendChild(button)
                button.style.width = `100vw`
                button.style.height = `100vh`
                button.style.opacity = `0%`
                button.style.zIndex = `1`
                button.addEventListener("click", function(){
                    popup.remove()
                    button.remove()
                    playArea.remove()
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