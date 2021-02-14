function messageFadeUp() {
    "use strict";
    let message = document.getElementById("message"), time = 0,
        pValue = 100,
        opValue = 0;

    var interval = window.setInterval(() => {
        if(pValue<=0 && opValue>=1) {window.clearInterval(interval);}
        pValue -= 100/150;
        opValue += 1;
        message.style.top = pValue+"px";
        message.style.opacity = opValue/150;
    }, 1);
}

function slideDown() {
    "use strict";
    let scrollValue = window.scrollY,
        scrollFor = window.innerHeight * 0.75 - scrollValue,
        finalPoint = scrollValue + scrollFor;
        
    var interval2 = window.setInterval(() => {
        if(finalPoint < scrollValue) {window.clearInterval(interval2);}
        scrollValue += 10;
        window.scrollTo(0, scrollValue);

    }, 1); 
}

window.addEventListener("load", messageFadeUp);
document.getElementById("slide-down").onclick = slideDown;