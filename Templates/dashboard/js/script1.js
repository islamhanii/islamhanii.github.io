/*jslint pluplus: true, unused: false*/
/*global document, window*/

var aside = document.getElementById("menu"),
    main = document.getElementById("main"),
    header = document.getElementById("header");

function getOut() {
    "use strict";
    
    if(aside.className.search("out")>-1) {
        aside.className = aside.className.replace(" out", "");
        header.removeEventListener('click', getOut);
        main.removeEventListener('click', getOut);
    } else {
        aside.className += " out";
        window.setTimeout(function(){
            header.addEventListener('click', getOut);
        }, 100);
        window.setTimeout(function(){
            main.addEventListener('click', getOut);
        }, 100);
    }
}

window.onscroll = function() {
    if(aside.className.search("out")>-1) {
        aside.className = aside.className.replace(" out", "");
        header.removeEventListener('click', getOut);
        main.removeEventListener('click', getOut);
    }
};