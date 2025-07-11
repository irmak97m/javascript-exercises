/** shorter method
const removeFromArray = function(arr,...args) {
    return arr.filter(val => !args.includes(val));
};
*/

// longer method via creating new array

const removeFromArray = function (arr,...args) {
    const modedArray = [];
    arr.forEach(val => {
        if(!args.includes(val)) {
            modedArray.push(val);
        }
    });
    return modedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
