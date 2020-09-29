/*global document, window*/
/*jslint plusplus:true, unused:false*/

var slideDown = document.getElementById('slide-down'),
    message = document.getElementById('message');

function slidedown() {
    
    "use strict";
    var scrollValue = document.body.scrollTop,
        place = window.innerHeight*0.75 - scrollValue,
        scrollPerSec = place/150,
        time = 0;
    
    var interval = window.setInterval(function() {
        
        if(time >= 150) {
            window.clearInterval(interval);
        }
        
        scrollValue += scrollPerSec;
        window.scrollTo(0, scrollValue);
        time += 1;
        
    }, 1);
}

function messagefadein() {
    
    "use strict";
    var opcValue = 0,
        opcPlus = 1/100,
        posValue = 50,
        posMinus = 50/100, 
        time = 0;
    
    message.style.visibility = "visible";
    
    var interval = window.setInterval(function() {
        
        if(time >= 100) {
            window.clearInterval(interval);
        }
        
        opcValue += opcPlus;
        posValue -= posMinus;
        message.style.opacity = opcValue;
        message.style.top = posValue;
        
        time += 1;
        
    }, 1);
}

slideDown.onclick = slidedown;
window.onload = messagefadein;