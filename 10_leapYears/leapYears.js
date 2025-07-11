/*const leapYears = function(year) {
    if(year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
        return true;
    } else { 
        return false;
    };
};*/

//short version

const leapYears = year => (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) ? true: false;

// Do not edit below this line
module.exports = leapYears;
