class Question {
    #id = "";
    #header = "";
    #images = [];
    #options = [];
    #type = false;
    #noCorrect = 0;
    #ansWrong = -1;

    constructor(header, images, options, correct) {
        this.#header = header;
        if(Array.isArray(images)) {
            for(let i=0; i< images.length; i++) {
                this.#images.push(images[i]);
            }
        }
        else {
            this.#images.push(images);
        }

        if(Array.isArray(correct)) {
            this.#type = true;
            this.#noCorrect = correct.length;
        }
        else this.#noCorrect = 1;

        for(let i=0; i<options.length; i++) {
            let answer = 0;
            if((this.#type && correct.indexOf(i+1)>=0) || correct === i+1) {
                answer = 1;
            }
            this.#options.push(new Option(options[i], answer));
        }
    }

    setID(id) {
        this.#id = id;
    }

    setWrong(value) {
        this.#ansWrong = value;
    }

    getWrong() {
        return this.#ansWrong;
    }

    displayQuestion(displayNumber) {
        let div = document.createElement('div');
        div.classList.add("question-box");
        div.innerHTML = "<h2 class='question'>" + displayNumber + ". " + this.#header + "</h2>";

        for(let i=0; i< this.#images.length; i++) {
            if(this.#images[i] !== undefined) {
                div.innerHTML += "<img src=\"" + this.#images[i] + "\"/>";
            }
        }

        let str = "";
        this.#options = shuffle(this.#options);
        for(let i=0; i<this.#options.length; i++) {
            str += "<div onclick=\"toggleInput(this," + (i+1) + ")\">";
            if(this.#type) {
                str += "<input type='checkbox' name='" + this.#id + "'/><span>" + this.#options[i].getOption() + "</span></div>"
            }
            else {
                str += "<input type='radio' name='" + this.#id + "'/><span>" + this.#options[i].getOption() + "</span></div>"
            }
        }

        div.innerHTML += str;

        if(this.#type) {
            div.innerHTML += "<div><button onclick=\"correctQuestion(this, '"+ this.#id + "')\">Submit</button></div>"
        }

        body.appendChild(div);
    }

    getCorrectOptions() {
        let corrects = [];
        for(let i=0; i<this.#options.length; i++) {
            if(this.#options[i].getCorrect() === 1) {
                corrects.push(i+1);
            }
        }
        return corrects;
    }
}