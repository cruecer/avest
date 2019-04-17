function isNumber(str) {
  return !isNaN(parseFloat(str) && isFinite(str))
};

export default isNumber;