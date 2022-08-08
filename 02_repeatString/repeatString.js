const repeatString = function(s, num) {
    let r = '';
    if (num<0) {
        r = 'ERROR';
    } else {
        for (let i = 1; i <= num; i++) {
            r += s;
        }
    }
    return r;
};

// Do not edit below this line
module.exports = repeatString;
