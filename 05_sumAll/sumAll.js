const sumAll = function(a,b) {
    let sum = 0;
    let start = 0;
    let end = 0;
    if (a>=b) {
        start = b;
        end = a;
    } else {
        start = a;
        end = b;
    }
    if (a<0 || b<0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    } else {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
