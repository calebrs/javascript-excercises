function isNotANumber(value) {
  let nanCheck = 1 * value;
  console.log(nanCheck);
  if (typeof value === 'object') {
    return true;
  } else if (!nanCheck) {
    return true;
  } else {
    return false;
  }
  
}

console.log(isNotANumber('hello'));