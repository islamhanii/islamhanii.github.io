var body = document.getElementById("questions").firstElementChild;
var wrong = [];
var data;

function random() {
    "use strict";
    let array = [];
    let question = document.getElementsByClassName("question-box");
    for(let i=0; i<question.length; i++) {
        array.push(question[i]);
    }
    
    body.innerHTML = "";
    
    let count = 1;
    while(array.length > 0) {
        let rand = Math.floor(Math.random() * array.length);
        let question = array[rand];
        question.firstElementChild.innerHTML = count + ". " + question.firstElementChild.innerHTML
        body.innerHTML += question.outerHTML;
        array.splice(rand, 1);
        count++;
    }
    console.log(body);
    body.innerHTML += "<button class='public-button' onclick='filter()'>Remove Correct Questions</button>";
    wrong = [];
}

function getData(name) {
    "use strict";
    data = name;
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

function filter(){
    "use strict";
    body.innerHTML = "";

    let questions = window.database[data];
    for (let id in wrong) {
        let header = questions[wrong[id]].question;
        let image = questions[wrong[id]].image;
        let ans = questions[wrong[id]].answers;
        let correct = questions[wrong[id]].correct;

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
                str += "<input type='checkbox' name='" + wrong[id] + "'/><span>" + ans[i] + "</span></div>"
            }
            else {
                str += "<input type='radio' name='" + wrong[id] + "'/><span>" + ans[i] + "</span></div>"
            }
        }

        div.innerHTML += str;

        if(type) {
            div.innerHTML += "<div><button onclick=\"correctQues(this, '"+ wrong[id] + "')\">Submit</button></div>"
        }

        body.appendChild(div);
        window.answers[wrong[id]] = correct;
    }

    random();
}