const reverseString = function(str) {
    let reversedStr ="";
    let length = str.length; 
    for ( i = length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
};


/**shorter way down below
 * .split("") turns it into array
 * .reverse() turns it upside down
 * join("") get array members all 
 * together without any space
 */
/*
const reverseString = function (string) {
  return string.split("").reverse().join("");
};
*/

// Do not edit below this line
module.exports = reverseString;
