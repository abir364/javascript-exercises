const caesar = function(text, n) {
    let num = 0;
    if (n>26) {
        num = n % 26;
    } else {
        num = n;
    }
    let t = '';
    for (let i = 0; i < text.length; i++) {
        let cur = text.charCodeAt(i);
        if ( cur>=65 && cur<=90 || cur>=97 && cur<=122) {
            let code = cur + num;
            if (code>90 && cur<=90) {
                code = code - 90 + 65 -1;
            } else if (code>122 && cur<=122) {
                code = code - 122 +97 - 1;
            } else if  (code<65) {
                code = 90 - 65 + code + 1;
            } else if (code<97 && cur>=97) {
                code = 122 - 97 + code + 1;
            }
            t += String.fromCharCode(code);
        } else {
            t += String.fromCharCode(cur);
        }
    }
    return t;
};

// Do not edit below this line
module.exports = caesar;
