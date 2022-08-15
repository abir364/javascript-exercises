const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	if (a>b) {
    return a - b;
  } else {
    return b - a;
  }
};

const sum = function(a) {
  let sum = 0;
	for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
};

const multiply = function(a) {
  let result = 1;
  for (let i = 0; i < a.length; i++) {
    result *= a[i];
  }
  return result;
};

const power = function(a,b) {
  let res = a;
	for (let i = 2; i <= b; i++) {
    res *= a;
  }
  return res;
};

const factorial = function(a) {
  if (a===0) {
    return 1;
  } else {
    let res = 1;
    for (let i = a; i >= 1; i--) {
      res *= i
    }
    return res;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
