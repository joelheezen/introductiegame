class CenterPopup{

    constructor(title:string,message:string,open:string){
            let popup = document.createElement('onlinePopup')
    
            let popupTitle = document.createElement('popupTitle')
            popupTitle.innerHTML = title
    
            let popupMessage = document.createElement('popupMessage')
            popupMessage.innerHTML = message
    
            let doorgaan = document.createElement('button')
            doorgaan.innerHTML = 'Doorgaan'
    
            doorgaan.addEventListener('click',()=>{
    
                if(open == 'doorgaan'){
                    new Pause(2,'Act3')
                }else if(open !== ''){
                    window.open(open, '_blank');
                }
                
                popup.remove()

            })
    
            popup.appendChild(doorgaan)
            popup.appendChild(popupTitle)
            popup.appendChild(popupMessage)
    
            let game = document.getElementsByTagName("game")[0]
            game.appendChild(popup) 
    }

}