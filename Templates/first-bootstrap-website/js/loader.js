function hideLoader() {
    let opac = 1,
        dOpacity = 1/200,
        loader = document.getElementById("loader");
    
    document.querySelector("#loader > div:nth-of-type(1)").style.display = 'none';
    document.body.style.overflow = "auto";

    let intervalID = window.setInterval(function() {
        if(opac < 0) {
            loader.style.display = "none";
            clearInterval(intervalID);
        }
        else {
            opac -= dOpacity;
            loader.style.opacity = opac;
        }
    }, 1);
}

window.addEventListener("load", hideLoader);