class Exam {
    #questions = [];
    #name = "";
    #exams = [];

    constructor(name) {
        this.#name = name;
        this.initialExam();
    }

    initialExam() {
        this.#exams = this.#name.split("|");
        for(let i=0; i<this.#exams.length; i++) {
            this.getQuestions(this.#exams[i]);
        }
    }

    getQuestions(exam) {
        let questions = window.database[exam];

        for(let question in questions) {
            let header = questions[question].question;
            let images = questions[question].images;
            let answers = questions[question].answers;
            let correct = questions[question].correct;

            let newquestion = new Question(header, images, answers, correct);
            this.#questions.push(newquestion);
        }
    }

    displayExam() {
        body.innerHTML = "";
        this.#questions = shuffle(this.#questions);
        for(let i=0; i<this.#questions.length; i++) {
            this.#questions[i].setID("q"+(i+1));
            this.#questions[i].displayQuestion(i+1);
        }
    }

    getCorrectOptions(id) {
        let corrects = this.#questions[id-1].getCorrectOptions();
        return corrects;
    }

    addWrongList(id) {
        this.#questions[id-1].setWrong(1);
    }

    addCorrectList(id) {
        this.#questions[id-1].setWrong(0);
    }

    displayWrong() {
        body.innerHTML = "";
        this.#questions = shuffle(this.#questions);
        let count = 0;
        for(let i=0; i<this.#questions.length; i++) {
            if(this.#questions[i].getWrong() != 0) {
                count++;
                this.#questions[i].setID("q"+(i+1));
                this.#questions[i].displayQuestion(count);
            }
        }
    }

    resetQuestions() {
        for(let i=0; i<this.#questions.length; i++) {
            this.#questions[i].setWrong(-1);
        }
        this.displayExam();
    }
}