/*global document, window*/
/*jslint plusplus:true, unused:false*/

var answers = {"q1":2, "q2":3, "q3":2, "q4":1, "q5":1, "q6":[1,4], "q7":1, "q8":2, "q9":2, "q10":2, "q11":1, "q12":1, "q13":2, "q14":2, "q15":1, "q16":1, "q17":2, "q18":1, "q19":2, "q20":2, "q21":2, "q22":2, "q23":1, "q24":2, "q25":1, "q26":2, "q27":1, "q28":[1,2,3], "q29":2, "q30":1, "q31":1, "q32":1, "q33":[1], "q34":2, "q35":[2], "q36":1, "q37":2, "q38":1, "q39":1, "q40":1, "q41":[1,3], "q42":[1]};

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

/*
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
*/

function toggleInput(ques, num) {
    let choice = ques.firstElementChild;
    if(choice.getAttribute("type") == "checkbox") {
        choice.classList.toggle("color-input");
        if(choice.classList.contains("color-input")) {choice.checked = true;}
        else {choice.checked = false;}
    }
    else {
        choice.checked = true;
        choice.classList.add("color-input");

        let name = choice.getAttribute("name");
        let choices = document.getElementsByName(name);
        for(let i=0; i<choices.length; i++) {
            choices[i].disabled = true;
            choices[i].classList.add("finish");
            choices[i].parentElement.style.cursor = "auto";
        }
        if(num === answers[name]) {
            choices[num-1].classList.add("correct");
            ques.parentElement.style.borderColor = "#03c603";
        }
        else {
            ques.parentElement.style.borderColor = "#f00";
            choices[answers[name]-1].classList.add("correct");
        }
    }
}

function correctQues(button, ques) {
    button.innerHTML = "Done";
    button.style.color = "#fff";
    button.style.backgroundColor = "#333";
    button.style.cursor = "auto";
    button.removeAttribute("onclick");

    let choices = document.getElementsByName(ques);
    let answer = answers[ques];
    let nAns = answer.length;
    let count = 0;
    
    for(let i=0; i<choices.length; i++) {
        choices[i].disabled = true;
        choices[i].classList.add("finish");
        choices[i].parentElement.style.cursor = "auto";
        choices[i].parentElement.removeAttribute("onclick");
    }

    for(let i=0; i<choices.length; i++) {
        console.log(choices[i].checked);
        if(choices[i].checked == 1) {
            if(answer.includes(i+1)) {
                choices[i].classList.add("correct");
                count++;
            }
            else {choices[i].classList.add("wrong");}
        }
        else {
            if(answer.includes(i+1)) {
                choices[i].classList.add("correct");
            }
        }
    }

    if(count>nAns || count==0) {button.parentElement.parentElement.style.borderColor = "#f00";}
    else if(count==nAns) {button.parentElement.parentElement.style.borderColor = "#03c603";}
    else {button.parentElement.parentElement.style.borderColor = "#ffe423";}
}


window.onload = random;
/*
let searchWord = document.getElementById("search-box").firstElementChild;
searchWord.onkeyup = search;*/