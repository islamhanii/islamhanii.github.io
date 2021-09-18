/*global document, window*/
/*jslint plusplus:true, unused:false*/

var answers = {}

var question = document.getElementsByClassName("question");

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
    "use strict";
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
            choices[i].parentElement.removeAttribute("onclick");
        }
        if(num === answers[name]) {
            choices[num-1].classList.add("correct");
            ques.parentElement.style.borderColor = "#03c603";
        }
        else {
            ques.parentElement.style.borderColor = "#f00";
            choices[answers[name]-1].classList.add("correct");
            window.wrong.push(name);
        }
    }
}

function correctQues(button, ques) {
    "use strict";
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

/*
let searchWord = document.getElementById("search-box").firstElementChild;
searchWord.onkeyup = search;*/