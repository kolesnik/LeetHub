/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let res = 0;
  let num = 0;
  let len = columnTitle.length;
  for (let i = 0; i < len; i++) {
    num = getNum(columnTitle[len - 1 - i]);
    res += Math.pow(26, i) * num;
  }
  return res;
};

var getNum = function (char) {
  var start = 'A'.charCodeAt(0) - 1;
  return char.charCodeAt(0) - start;
};

