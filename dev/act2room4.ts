class Act2Room4{

    game = document.getElementsByTagName('game')[0]
    bg: HTMLElement = document.createElement("videoBackground")
    video = (<HTMLAudioElement>document.createElement("video"))

    constructor(){
        this.bg.style.backgroundColor = "black"
        this.game.appendChild(this.bg)
        this.game.appendChild(this.video)

        this.video.src = '/docs/assets/Akte2/filmpjedecaanhorizontaal.mp4'
        this.video.autoplay = true
        this.video.controls = true
        this.video.onended = function() {
             let vid = document.getElementsByTagName("video")[0]
             vid.remove()
          };
    }
}