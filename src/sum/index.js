/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
const sum = (a, b) => {
  if (isInteger(a) || isInteger(b) || b == '' || a == '') {
    console.log(isInteger(a));
    throw new Error();
  }
  if (!isNaN(a) || !isNaN(b)) {
    throw new Error();
  }
  if (!isFinite(a) || !isFinite(b)) {
    throw new Error();
  }
  if(isFinite(a) && isFinite(b)){
    return a+b;
  }

};

export default sum;
