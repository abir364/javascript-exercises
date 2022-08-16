const palindromes = function (s) {
    let word = s.replace(/[^a-zA-Z]/g,"").toLowerCase();
    for (let i = 0, j = word.length-1; i < word.length/2, j >= word.length/2+1; i++,j--) {
        if (word[i]!==word[j]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
