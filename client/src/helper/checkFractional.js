 function checkFractional(array) {
  const length = array.length;
  if (array.indexOf('.') === -1) {
    return true
  } else  if(array.slice(array.indexOf('.'), length).length > 2) {
    return false
  } else {
    return true
  }
};

export default checkFractional;