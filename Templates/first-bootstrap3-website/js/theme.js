function changeColor() {
    "use strict";
    
    let link = document.querySelector("link[href*=theme]"),
        value = this.getAttribute("data-value");

    link.setAttribute('href', value);
}

let theme = document.querySelectorAll('.tool-box .color-option ul li');

theme[0].onclick = changeColor;
theme[1].onclick = changeColor;
theme[2].onclick = changeColor;
theme[3].onclick = changeColor;
theme[4].onclick = changeColor;