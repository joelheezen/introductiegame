class EnterBuilding{

    protected game = document.getElementsByTagName('game')[0]
    public i = 0;

    constructor(){
        this.setBackground()
        document.addEventListener("mousedown", () => this.setBackground())
    }

    setBackground(){
        let bge = document.createElement("backgroundenter")

        if (this.i == 0){
            bge.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123510.jpg)'
        }
        else if (this.i == 1){
            bge.style.backgroundImage = 'url(/docs/assets/IMG_20200708_123018.jpg)'
        }
        else {
            new Act2()
        }

        this.game.appendChild(bge)
        this.i++;
    }
}
