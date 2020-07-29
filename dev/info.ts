class Info{

    constructor(){
        this.makeTexts()
        this.makeButtons()
        this.makeBackground()
    }

    makeBackground(){
        let game = document.getElementsByTagName("game")[0]
        let bg = document.createElement("bg")
        game.appendChild(bg)
        bg.style.backgroundImage = `url(assets/Akte3/Binnenrotte.jpg)`
        bg.style.backgroundRepeat = `no-repeat`
        bg.style.backgroundSize = `100% 100%`
        bg.style.position = `absolute`
        bg.style.width = `100vw`
        bg.style.height = `100vh`
        bg.style.zIndex = `-1`
    }

    makeTexts(){
        let game = document.getElementsByTagName("game")[0]
        let text1 = document.createElement("text")
        let text2 = document.createElement("text")
        game.appendChild(text1)
        game.appendChild(text2)

        let heading1 = document.createElement("text")
        let heading2 = document.createElement("text")

        game.appendChild(heading1)
        game.appendChild(heading2)

        heading1.innerHTML = `Nederlands`
        heading2.innerHTML = `English`

        heading1.style.position = `absolute`
        heading2.style.position = `absolute`
        heading1.style.width = `auto`
        heading2.style.width = `auto`
        heading1.style.transform = `translate(20vw, 5vh)`
        heading2.style.transform = `translate(69vw, 5vh)`

        heading1.style.fontSize = `5vh`
        heading2.style.fontSize = `5vh`

        heading1.style.backgroundColor = `#ffb911`
        heading2.style.backgroundColor = `#ffb911`
        heading1.style.borderRadius = `20px`
        heading2.style.borderRadius = `20px`

        heading1.style.padding = `2vh 2vw 2vh 2vw`
        heading2.style.padding = `2vh 2vw 2vh 2vw`
        

        text1.innerHTML = new Languages()["dutch"][80]
        text2.innerHTML = new Languages()["english"][80]

        text1.style.position = `absolute`
        text2.style.position = `absolute`

        text1.style.width = `40vw`
        text2.style.width = `40vw`
        text1.style.height = `auto`
        text2.style.height = `auto`

        text1.style.fontSize = `3.5vh`
        text2.style.fontSize = `3.5vh`

        text1.style.transform = `translate(5vw, 15vh)`
        text2.style.transform = `translate(53vw, 15vh)`

        text1.style.backgroundColor = `#ffb911`
        text2.style.backgroundColor = `#ffb911`
        text1.style.borderRadius = `20px`
        text2.style.borderRadius = `20px`

        text1.style.padding = `2vh 2vw 2vh 2vw`
        text2.style.padding = `2vh 2vw 2vh 2vw`

    }

    makeButtons(){
        let game = document.getElementsByTagName("game")[0]
        let eng = document.createElement("button")
        let dutch = document.createElement("button")
        game.appendChild(eng)
        game.appendChild(dutch)

        eng.innerHTML = `Press this to play in English.`
        dutch.innerHTML = `Klik hier om in Nederlands te spelen.`

        eng.style.position = `absolute`
        dutch.style.position = `absolute`

        dutch.style.transform = `translate(17vw, 90vh)`
        eng.style.transform = `translate(65vw, 90vh)`

        dutch.style.backgroundColor = `#ffb911`
        eng.style.backgroundColor = `#ffb911`
        dutch.style.border = `solid black 3px`
        eng.style.border = `solid black 3px`
        dutch.style.fontWeight = `bolder`
        eng.style.fontWeight = `bolder`
        dutch.style.borderRadius = `3px`
        eng.style.borderRadius = `3px`
        dutch.style.cursor = `pointer`
        eng.style.cursor = `pointer`
        dutch.style.padding = `2vh 2vw 2vh 2vw`
        eng.style.padding = `2vh 2vw 2vh 2vw`
        dutch.style.fontSize = `2vh`
        eng.style.fontSize = `2vh`

        dutch.addEventListener("click", function(){
            game.innerHTML = ""
            localStorage.setItem('language','dutch')
            new LocatieSelectie()
            new Timer().startTimer()
        })

        eng.addEventListener("click", function(){
            game.innerHTML = ""
            localStorage.setItem('language','english')
            new LocatieSelectie()
            new Timer().startTimer()
        })
    }
}