const ftoc = function(f) {
  return Math.round((((f-32)/9)*5)*10)/10;
};

const ctof = function(c) {
  return Math.round((((9*c)/5)+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
