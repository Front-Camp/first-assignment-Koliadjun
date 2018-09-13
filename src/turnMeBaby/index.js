/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  var strArray = str.split("");
  console.log(strArray);
  for (var i = strArray.length - 1; i >= 0; i--) {
   var res =[];
   res.push(strArray[i]);
   }
  var resStr = res.join('');
  console.log(res);
  return resStr
};

export default turnMeBaby;
