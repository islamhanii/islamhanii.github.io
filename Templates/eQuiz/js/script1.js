var body = document.getElementById("questions").firstElementChild;
var exam;

function makeExam(name) {
    exam = new Exam(name);
    exam.displayExam();
    overButtons();
}

function removeCorrect() {
    exam.displayWrong();
    overButtons();
}

function resetAll() {
    exam.resetQuestions();
    overButtons();
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function toggleInput(option, number) {
    "use strict";
    let choice = option.firstElementChild;
    if(choice.getAttribute("type") == "checkbox") {
        choice.classList.toggle("color-input");
        if(choice.classList.contains("color-input")) {choice.checked = true;}
        else {choice.checked = false;}
    }
    else {
        choice.checked = true;
        choice.classList.add("color-input");

        let id = choice.getAttribute("name");
        let choices = document.getElementsByName(id);
        killChoices(choices);

        id = parseInt(id.substring(1));
        let correctAnswer = exam.getCorrectOptions(id)[0];
        if(correctAnswer == number) {
            choices[number-1].classList.add("correct");
            option.parentElement.style.borderColor = "#04AA6D";
            exam.addCorrectList(id);
        }
        else {
            option.parentElement.style.borderColor = "#d40a0a";
            choices[correctAnswer-1].classList.add("correct");
            exam.addWrongList(id);
        }
    }
}

function correctQuestion(button, id) {
    "use strict";
    button.innerHTML = "Done";
    button.style.color = "#fff";
    button.style.backgroundColor = "#333";
    button.style.cursor = "auto";
    button.removeAttribute("onclick");

    let choices = document.getElementsByName(id);
    id = parseInt(id.substring(1));
    let answers = exam.getCorrectOptions(id);
    let nAns = answers.length;
    let count = 0;
    
    killChoices(choices);

    for(let i=0; i<choices.length; i++) {
        if(choices[i].checked == 1) {
            if(answers.includes(i+1)) {
                choices[i].classList.add("correct");
                count++;
            }
            else {
                choices[i].classList.add("wrong");
            }
        }
        else {
            if(answers.includes(i+1)) {
                choices[i].classList.add("correct");
            }
        }
    }

    if(count==nAns) {
        button.parentElement.parentElement.style.borderColor = "#04AA6D";
        exam.addCorrectList(id);
    }
    else {
        button.parentElement.parentElement.style.borderColor = "#d40a0a";
        exam.addWrongList(id);
    }
}

function killChoices(choices) {
    for(let i=0; i<choices.length; i++) {
        choices[i].disabled = true;
        choices[i].classList.add("finish");
        choices[i].parentElement.style.cursor = "auto";
        choices[i].parentElement.removeAttribute("onclick");
    }
}

function overButtons() {
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    button1.setAttribute("onclick", "removeCorrect()");
    button2.setAttribute("onclick", "resetAll()");
    button1.innerHTML = "Remove Correct Answers / Randomize";
    button2.innerHTML = "Reset All Questions";

    body.appendChild(button1);
    body.appendChild(button2);
}