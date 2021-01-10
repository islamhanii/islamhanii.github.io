/*global document, window*/
/*jslint plusplus:true, unused:false*/

var answers = {"q1":2, "q2":1, "q3":2, "q4":2, "q5":1, "q6":2, "q7":1, "q8":1, "q9":2, "q10":1, "q11":2, "q12":2, "q13":1, "q14":1,  "q15":1, "q16":2, "q17":1, "q18":2, "q19":2, "q20":1, "q21":2, "q22":1, "q23":1, "q24":1, "q25":1, "q26":1, "q27":2, "q28":2, "q29":2, "q30":2, "q31":1, "q32":2, "q33":2, "q34":1, "q35":2, "q36":2, "q37":1, "q38":1, "q39":1, "q40":1, "q41":1, "q42":1, "q43":2, "q44":2, "q45":1, "q46":2, "q47":2, "q48":1, "q49":2, "q50":1, "q51":1, "q52":1, "q53":1, "q54":1, "q55":1, "q56":2, "q57":1, "q58":2, "q59":2, "q60":2, "q61":3};

var question = document.getElementsByClassName("question");

function random() {
    "use strict";
    let array = [];
    let question = document.getElementsByClassName("question-box");
    for(let i=0; i<question.length; i++) {
        array.push(question[i].outerHTML);
    }
    
    let container = question[0].parentElement;
    container.innerHTML = "";
    
    while(array.length > 0) {
        let rand = Math.floor(Math.random() * array.length);
        container.innerHTML = container.innerHTML + array[rand];
        array.splice(rand, 1);
    }
}

function search() {
    let value = this.value.toLowerCase();

    for(let i=0; i<question.length; i++) {
        if(question[i].innerText.toLowerCase().indexOf(value)>=0) {
            question[i].parentElement.style.display = "block";
        }
        else {
            question[i].parentElement.style.display = "none";
        }
    }
}

function checkAnswer(num, ques) {
    "use strict";
    if(ques.firstElementChild.disabled !== true) {
        ques.firstElementChild.classList.add("color-input");
        
        let name = ques.firstElementChild.getAttribute("name");
        let choices = document.getElementsByName(name);
        for(let i=0; i<choices.length; i++) {
            choices[i].disabled = true;
            if(i+1 !== num){choices[i].classList.add("finish");}
            choices[i].parentElement.style.cursor = "auto";
        }
        
        if(num === answers[name]) {ques.parentElement.style.borderLeftColor = "#03c603";}
        else {ques.parentElement.style.borderLeftColor = "#f00";}
    }
}


window.onload = random();

let searchWord = document.getElementById("search-box").firstElementChild;
searchWord.onkeyup = search;