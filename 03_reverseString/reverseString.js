const reverseString = function(s) {
    let num = s.length-1;
    let r = '';
    while (num >= 0) {
        r += s.charAt(num);
        num--;
    }
    return r;
};

// Do not edit below this line
module.exports = reverseString;
