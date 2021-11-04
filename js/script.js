var input = document.getElementById('input');
var output = document.getElementById('output');

var stream = input.value;
var tokenizer = new Tokenizer();

addEventListener('keyup', () => {
    stream = input.value;

});

class Tokenizer {
    constructor() {
        this.string = stream;
        this.cursor = 0;
    }

    updateString() {
        this.string = stream;
    }

    hasMoreTokens() {
        return this.cursor < this.string.length;
    }

    getNextToken() {

    }
}