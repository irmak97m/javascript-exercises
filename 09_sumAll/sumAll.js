const sumAll = function(first,second) {
    if(first < 0 || first % 1 !== 0 || second < 0 || second % 1 !== 0 
        || typeof(first) !== "number" || typeof(second) !== "number" ) {
        return "ERROR";
    } else {
        let total = 0;
        let small;
        let big;
        if (first > second) {
            big = first;
            small = second;
        } else {
            big = second;
            small = first;
        }
        
        for(i = small; i <= big; i++) {
            total = total + i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
