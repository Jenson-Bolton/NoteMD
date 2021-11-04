
// Code by Dmitry Soshnikov https://youtu.be/0ZDPvdp2uFk

/**
 * Tokenizer class.
 * 
 * Lazily pulls a taken from a stream.
 */
 class Tokenizer {
    /**
     * Initializes the string.
     */
    init(string) {
        this._string = string;
        this._cursor = 0;
    }

    /**
     * Whether we still have more tokens.
     */
    hasMoreTokens() {
        return this._cursor < this._string.length;
    }

    /**
     * Obtain next token.
     */
    getNextToken() {
        if (!this.hasMorTokens()) {
            return null;
        }

        const string = this._string.slice(this._cursor);

        // Numbers:
        if (!Number.isNaN(string[0])) {
            let number = '';
            while (!Number.isNaN(string[this._cursor])) {
                number += string[this._cursor++];
            }
            return {
                type: 'NUMBER',
                value: number,
            }
        }
    }
}