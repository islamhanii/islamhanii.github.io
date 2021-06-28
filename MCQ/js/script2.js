var body = document.getElementById("questions").firstElementChild;

function random() {
    "use strict";
    let array = [];
    let question = document.getElementsByClassName("question-box");
    for(let i=0; i<question.length; i++) {
        array.push(question[i].outerHTML);
    }
    
    body.innerHTML = "";
    
    while(array.length > 0) {
        let rand = Math.floor(Math.random() * array.length);
        body.innerHTML += array[rand];
        array.splice(rand, 1);
    }
}

function getData(name) {
    "use strict";
    body.innerHTML = "";

    let questions = window.database[name];

    for(let question in questions) {
        let header = questions[question].question;
        let image = questions[question].image;
        let ans = questions[question].answers;
        let correct = questions[question].correct;

        let type = (correct.constructor === Array);
        let div = document.createElement('div');
        div.classList.add("question-box");
        div.innerHTML = "<h2 class='question'>" + header + "</h2>";

        if(image !== undefined) {
            div.innerHTML += "<img src=\"" + image + "\" style=\"max-width: 100%;\"/>";
        }

        let str = "";
        for(let i=0; i<ans.length; i++) {
            str += "<div onclick=\"toggleInput(this," + (i+1) + ")\">";
            if(type) {
                str += "<input type='checkbox' name='" + question + "'/><span>" + ans[i] + "</span></div>"
            }
            else {
                str += "<input type='radio' name='" + question + "'/><span>" + ans[i] + "</span></div>"
            }
        }

        div.innerHTML += str;

        if(type) {
            div.innerHTML += "<div><button onclick=\"correctQues(this, '"+ question + "')\">Submit</button></div>"
        }

        body.appendChild(div);
        window.answers[question] = correct;
    }

    random();
}