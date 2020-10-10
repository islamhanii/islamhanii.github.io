/*global document, $*/
/*jslint plusplus:true, unused:false*/

function togglefide(element, start, end) {
    if(start > end) {
        let intervalID = window.setInterval(function() {
            if(end >= start) {window.clearInterval(intervalID);}
            else {
                start -= 0.009;
                element.style.opacity = start;
            }
        }, 1);
    }

    else {
        let intervalID = window.setInterval(function() {
            if(end <= start) {window.clearInterval(intervalID);}
            else {
                start += 0.009;
                element.style.opacity = start;
            }
        }, 1);
    }
}

function choosePhotos(name) {
    "use strict";
    let button = document.getElementById(name).parentElement.children,
        photo = document.querySelectorAll(".photos img");

    for(let i=0; i<button.length; i++) {
        if(button[i].classList.contains("active")) {
            button[i].classList.remove("active");
            document.getElementById(name).classList.add("active");
            break;
        }
    }
    
    for(let i=0; i<photo.length; i++) {
        if(name === "all") {
            if(photo[i].style.opacity <= 0.1) {togglefide(photo[i], 0.1, 1);}
        }
        else if(photo[i].classList.contains(name)) {
            if(photo[i].style.opacity <= 0.1) {togglefide(photo[i], 0.1, 1);}
        }
        else {
            if(photo[i].style.opacity >= 1) {togglefide(photo[i], 1, 0.1);}
        }
    }
}

window.addEventListener('laod', choosePhotos('all'));