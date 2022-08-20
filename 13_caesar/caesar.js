const caesar = function(text, num) {
    let t = '';
    for (let i = 0; i < text.length; i++) {
        let cur = text.charCodeAt(i);
        if ( cur>=65 && cur<=90 || cur>=97 && cur<=122) {
            t += String.fromCharCode(cur + num);
        } else {
            t += String.fromCharCode(cur);
        }
    }
    return t;
};

// Do not edit below this line
module.exports = caesar;
