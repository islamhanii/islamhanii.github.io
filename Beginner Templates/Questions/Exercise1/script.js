/*global document*/
/*jslint plusplus: true*/

var array = [1, 1, 0, 0, 2, 3, 0],
    correct = document.getElementById("button"),
    warning = document.getElementById("warning_div"),
    result = document.getElementById("result"),
    count = 0;

function checked() {

    "use strict";

    var i, j, name, question, bool;

    for (i = 0; i < 7; i++) {

        name = "q" + (i + 1).toString();
        question = document.getElementsByClassName(name);
        bool = false;

        for (j = 0; j < 4; j++) {

            if (question[j].checked === true) {

                bool = true;
                break;

            }

        }

        if (bool === false) {

            warning.style.display = "block";
            break;

        }
    }

    return bool;

}

function correctAnswers() {

    "use strict";

    var i, j, name, question;

    for (i = 0; i < 7; i++) {

        name = "q" + (i + 1).toString();
        question = document.getElementsByClassName(name);

        for (j = 0; j < 4; j++) {

            if ((question[j].checked === true) && (j === array[i])) {

                count++;
                question[j].className += " correct";
                break;

            } else if ((question[j].checked === true) && (j !== array[i])) {

                question[j].className += " wrong";
                question[array[i]].className += " corrector";
                break;
            }
        }
        
        for (j = 0; j < 4; j++) {
            question[j].className += " close";
        }
    }

}

correct.onclick = function () {

    "use strict";

    var bool = checked();

    if (bool === true) {
        
        warning.style.display = "none";
        correctAnswers();
        correct.style.display = "none";
        result.innerHTML = "لقد قمت بحل " + count + " أسئلة من " + array.length + " صحيحة";
        result.style.display = "block";
    }

};
