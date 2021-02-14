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

function selecting(name) {
    "use strict";
    if(!document.getElementById(name).classList.contains("active")) {
        let i, arr = ['all', 'people', 'places', 'things'];
    
        for(i=0; i<4; i++) {
            if(arr[i] === name) {
                document.getElementById(name).classList.add('active');
            }
            else {
                document.getElementById(arr[i]).classList.remove('active');
            }
        }
        
        document.getElementById("gallery").style.opacity = 0;
        let image = document.querySelectorAll("#gallery div");

        for(i=0 ; i<12 ; i++) {
            if(name === 'all') {
                image[i].style.display = 'flex';
            }
            else if(image[i].classList.contains(name)) {
                image[i].style.display = 'flex';
            }
            else {
                image[i].style.display = 'none';
            }
        }
        photoFadeIn();
    }
}