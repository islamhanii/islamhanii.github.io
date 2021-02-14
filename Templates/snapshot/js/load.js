function removeLoader() {
    "use strict";
    let loader = document.getElementById("loader");
    loader.outerHTML = "";
    document.body.style.overflow = "auto";
    
}

function listToggle() {
    var list = document.getElementById("list");
    if(this.classList.contains("active")) {
        let hValue = 115;
        var listo = window.setInterval(() => {
            if(hValue <= 0) {
                list.style.display = "none";
                this.classList.remove("active");
                window.clearInterval(listo);
            }
            hValue -= 115/50;
            list.style.height = hValue + "px";
        }, 1);
    }
    else {
        let hValue = 0;
        list.style.display = "flex";
        var listo = window.setInterval(() => {
            if(hValue >= 115) {
                list.style.height = "116px";
                this.classList.add("active");
                window.clearInterval(listo);
            }
            hValue += 115/50;
            list.style.height = hValue + "px";
        }, 1);
    }
}

window.onload = removeLoader;
let button = document.getElementById("list-button");
button.onclick = listToggle;