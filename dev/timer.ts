class Timer{
    pauseStart: number
    pauseEnd: number

    constructor(){
    
        this.startTimer()


        setTimeout(() => {
            this.startPause()
        }, 2000);

        setTimeout(() => {
            this.endPause()
        }, 4000);

        setTimeout(() => {
            this.startPause()
        }, 6000);

        setTimeout(() => {
            this.endPause()
        }, 8000);

        setTimeout(() => {
            this.endTimer()

            this.score()
            this.resetTimer()
        }, 12000);

        
    }

    startTimer(){
        if(!localStorage.getItem('start')){
            localStorage.setItem('start',new Date().getTime().toString())
        }

        if(!localStorage.getItem('pause')){
            localStorage.setItem('pause','0')
        }
        
        if(!localStorage.getItem('bonus')){
            localStorage.setItem('bonus','0')
        }

    }

    startPause(){
        this.pauseStart = new Date().getTime()
    }

    endPause(){
        this.pauseEnd = new Date().getTime()

        let currentPause = parseInt(localStorage.getItem('pause')!)

        let thisPause = this.pauseEnd - this.pauseStart
        let newPause = thisPause + currentPause

        localStorage.setItem('pause', newPause.toString())
    }

    addBonus(point: string){
        let currentBonus = parseInt(localStorage.getItem('bonus')!)
        
        let newBonus = currentBonus + point
        localStorage.setItem('bonus',newBonus)
        
    }

    endTimer(){
        if(!localStorage.getItem('end')){
            localStorage.setItem('end',new Date().getTime().toString())
        }
    }

    score(){
        let start = parseInt(localStorage.getItem('start')!)
        let end = parseInt(localStorage.getItem('end')!)
        let pause = parseInt(localStorage.getItem('pause')!)
        let bonus = parseInt(localStorage.getItem('bonus')!)
        let score = Math.floor((end - start - pause) / 1000) - bonus

        console.log(score)

    }

    resetTimer(){
        localStorage.removeItem('start')
        localStorage.removeItem('end')
        localStorage.removeItem('pause')
    }
}

window.addEventListener('load',() => new Timer())