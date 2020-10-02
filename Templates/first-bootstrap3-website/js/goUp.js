function goUpDisplay() {
    "use strict";
    
    if(window.scrollY > 500){document.getElementById('go-up').style.display = 'block';}
    
    else{document.getElementById('go-up').style.display = 'none';}
}

function goUpEvent() {
    "use strict";
    
    let valueUp = (window.pageYOffset/250) * -1;
    
    let intervaID = window.setInterval(function() {
        
        if(window.pageYOffset===0) {window.clearInterval(intervaID);}
        
        else {window.scrollBy(0, valueUp);}
        
    }, 1);
}

window.addEventListener("load", goUpDisplay);
window.onscroll = goUpDisplay;
document.getElementById('go-up').onclick = goUpEvent;