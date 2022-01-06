class Option {
    #option = "";
    #correct = 0;

    constructor(option, correct) {
        this.#option = option;
        this.#correct = correct;
    }

    getOption() {
        return this.#option;
    }

    getCorrect() {
        return this.#correct;
    }
}