class EnterBuilding{

    protected game = document.getElementsByTagName('game')[0]
    bge: HTMLElement = document.createElement("backgroundenter")
    public i = 0;

    constructor(){
        this.setBackground()
        this.game.appendChild(this.bge)
        this.bge.addEventListener("mousedown", () => this.setBackground())
        this.game.appendChild(this.bge)
    }

    setBackground(){

        if (this.i == 0){
            this.bge.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123510.jpg)'
        }
        else if (this.i == 1){
            this.bge.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123018.jpg)'
        }
        else if (this.i == 2){
            this.bge.remove()
            console.log('help')
            new Act2()
        }
<<<<<<< HEAD

=======
>>>>>>> f43055bd0530c58e46bc811fa598a2067f655e7f
        this.i++;
    }
}
