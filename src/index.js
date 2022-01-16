const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let newArr = [];

    for (let i = 0; i < expr.length; i += 10) {
        let slice = expr.slice(i, i + 10);
        let str = slice.replace(/^0+/, "");
        let newStr = str.replace(/10/g, ".");
        let n = newStr.replace(/11/g, "-");

        newArr.push(n)
    }

    let result = newArr.map(el => {
        if (el === "**********") {
            return " "
        } else {
            return MORSE_TABLE[el]
        }
    })
    return result.join('')


}

module.exports = {
    decode

}