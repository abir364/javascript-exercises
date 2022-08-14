const leapYears = function(year) {
    let r = false;
    if (year%4==0 && (year%100!==0 || year%400==0)) {
        r = true;
    }
    return r;
};

// Do not edit below this line
module.exports = leapYears;
