var ex = "close";

function photoFadeIn() {
    let photos = document.getElementById("gallery"),
        opValue = 0;

    var interval = window.setInterval(() => {
        if(opValue>=1) {
            window.clearInterval(interval);
        }
        opValue += 1/200;
        photos.style.opacity = opValue;
        
    }, 1);
}

function showFigure(num) {
    "use strict";
    if(window.innerWidth>768) {
        document.body.style.overflow = "hidden";

        let figure = document.getElementById("figure");
        figure.innerHTML += "<div id='imgloader' class='lds-dual-ring'></div>";
        figure.style.display = "flex";

        if(document.getElementById("box") == undefined) {
            figure.innerHTML += `<div id='box'>
                                    <div>
                                        <img id='image' alt='Figure Viewer'/>
                                    </div>
                                    
                                    <p class='figcaption'>This right here is a caption</p>
                                
                                    <span id='exit' onclick='exit()'>X</span>
                                </div>`;
        }

        let image = document.getElementById("image"),
            path = "images/fulls/" + num + ".jpg";

        image.setAttribute("src", path);

        image.onload = function() {
            document.getElementById('imgloader').outerHTML = "";
            document.getElementById('box').style.display = "block";
            let opValue = 0, width = 0;

            var interval = window.setInterval(() => {
                if(width>=85 && opValue>=1) {
                    box.style.width = 'auto';
                    window.clearInterval(interval);
                }
                width += 85/150;
                opValue += 1/150;
                box.style.width = width + "%";
                box.style.opacity = opValue;
                
            }, 1);
        }
        ex = "open";
    }
    else {
        window.open("images/fulls/" + num + ".jpg","_top");
    }
}

function exit() {
    "use strict";
    if(ex == "open") {
        let figure = document.getElementById("figure"),
            box = document.getElementById('box');
        figure.style.display = 'none';
        box.style.display = 'none';
        box.style.width = 0;
        box.style.opacity = 0;
        document.body.style.overflow = "auto";
        ex = "close";
    }
}

window.addEventListener("load", photoFadeIn);
window.addEventListener("resize", exit);