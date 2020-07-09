class EnterBuilding{

    protected game = document.getElementsByTagName('game')[0]
    bge: HTMLElement = document.createElement("backgroundenter")
    public i = 0;

    constructor(){
        this.setBackground()
        this.game.appendChild(this.bge)
        this.bge.addEventListener("mousedown", () => this.setBackground())
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
            new Act2()
        }
        this.i++;
    }
}
