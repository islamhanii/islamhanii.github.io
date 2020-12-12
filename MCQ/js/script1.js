/*global document, $*/
/*jslint plusplus:true, unused:false*/

"use strict";

var answers = {"q1":2, "q2":1, "q3":2, "q4":2, "q5":1, "q6":2, "q7":1, "q8":1, "q9":2, "q10":1, "q11":2, "q12":2, "q13":1, "q14":1, "q15":1,
               "q16":2, "q17":1, "q18":2, "q19":2, "q20":1, "q21":2, "q22":1, "q23":1, "q24":1, "q25":1, "q26":1, "q27":2, "q28":2, "q29":2, "q30":2, "q31":1, "q32":2, "q33":2, "q34":1, "q35":2, "q36":2, "q37":1, "q38":1, "q39":1, "q40":1, "q41":1, "q42":1, "q43":2, "q44":2, "q45":1, "q46":2, "q47":2, "q48":1}

function checkAnswer(num, ques) {
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