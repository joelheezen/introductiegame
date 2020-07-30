class Act2Room4Eng{

    game = document.getElementsByTagName('game')[0]
    bg: HTMLElement = document.createElement("act2background")

    constructor(){
        this.openInNewTab("https://hint.hr.nl/nl/HR/english/study-information/study-help/Appointment-student-counsellor-introgame")
        new Act2
    }
    openInNewTab(url:string) {
        var win = window.open(url, '_blank');
        win!.focus();
      }
}