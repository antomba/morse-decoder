const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  var result = "";
  let j = 0;
  for (let i = 0; i < expr.length / 10; i++) {
    expr.substr(j, 10) === "**********"
      ? (result = result.concat(" "))
      : (result = result.concat(numberToLetter(expr.substr(j, 10))));

    j = j + 10;
  }
  console.log(result);
  return result;
}

function numberToLetter(number) {
  var result = "";
  let j = 0;
  for (let i = 0; i < number.length; i++) {
    switch (number.substr(j, 2)) {
      case "10":
        result = result.concat(".");
        break;
      case "11":
        result = result.concat("-");
        break;
    }
    j = j + 2;
  }
  return MORSE_TABLE[result];
}

module.exports = {
    decode
}
