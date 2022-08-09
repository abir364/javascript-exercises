const removeFromArray = function(...arg) {
    const array = arg[0];
    const values = arg.slice(1);
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!values.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
