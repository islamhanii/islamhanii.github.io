function toggleGear() {
    "use strict";
    
    let box = this.parentElement,
        left = box.style.left;
    
    if(left === "-200px") {
        left = -200;
        let intervalID = window.setInterval(function(){
            
            if(left === 0) {
                window.clearInterval(intervalID);
            }
            else {
                left += 2;
                box.style.left = left+"px";
            }

        }, 1);
    }

    else if((left === "0px")) {
        left = 0;
        let intervalID = window.setInterval(function(){
            
            if(left === -200) {
                window.clearInterval(intervalID);
            }
            else {
                left -= 2;
                box.style.left = left+"px";
            }

        }, 1);
    }
}

let gear = document.getElementById("gear-button");

window.onload = gear.parentElement.style.left = "-200px";
gear.onclick = toggleGear;