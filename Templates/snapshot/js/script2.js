/*global document, window*/
/*jslint plusplus:true, unused:false*/

var photos = document.getElementById('photos'),
    image = document.getElementById('image'),
    figure = document.getElementById('figure'),
    box = document.getElementById('box'),
    images = document.querySelectorAll('#photos nav');

function photosfadein() {
    
    "use strict";
    var opcValue = 0,
        opcPlus = 1/150,
        time = 0;
    
    photos.style.visibility = "visible";
    
    var interval = window.setInterval(function() {
        
        if(time >= 150) {
            window.clearInterval(interval);
        }
        
        opcValue += opcPlus;
        photos.style.opacity = opcValue;
        
        time += 1;
        
    }, 1);
}

function showFigure(num) {
    
    "use strict";
    var name = "images/fulls/" + num + ".jpg",
        prec = "%",
        time = 0,
        width = 0,
        inc = 90/150,
        opcValue = 0,
        opcPlus = 1/150;
    
    image.setAttribute('src', name);
    figure.style.display = 'flex';
    
    var interval = window.setInterval(function() {
        if(time >= 150) {
            box.style.width = 'auto';
            window.clearInterval(interval);
        }
        
        width += 90/150;
        opcValue += opcPlus;
        
        box.style.width = width + prec;
        box.style.opacity = opcValue;
        
        time += 1;
        
    }, 1);
}

function exit() {
    
    "use strict";
    figure.style.display = 'none';
    box.style.width = 0;
    box.style.opacity = 0;
}

function selecting(name) {
    
    "use strict";
    var i,
        arr = ['all', 'people', 'places', 'things'];
    
    for(i=0; i<4; i++) {
        if(arr[i] === name) {
            document.getElementById(name).classList.add('active');
        }
        
        else {
            document.getElementById(arr[i]).classList.remove('active');
        }
    }
    
    photos.style.opacity = 0;
    
    for(i=0 ; i<12 ; i++) {
        
        if(name === 'all') {
            images[i].style.display = 'block';
        }
        
        else if(images[i].classList.contains(name)) {
            images[i].style.display = 'block';
        }
        
        else {
            images[i].style.display = 'none';
        }
    }
    
    photosfadein();
}



window.addEventListener('load', photosfadein);