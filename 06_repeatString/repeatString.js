const repeatString = function(word,times) {
    let string = "";
    if (times < 0) {string = "ERROR";};
    for (let i = 0; i < times; i++) {
        string+= word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
