/*!
 * name: @jswork/next-repeat
 * description: Repeat for next.
 * homepage: https://github.com/afeiship/next-repeat
 * version: 1.0.0
 * date: 2020-11-22 18:16:28
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.repeat = function (inChar, inCount) {
    if (!inCount) return '';
    var arr = new Array(inCount + 1);
    return arr.join(inChar);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.repeat;
  }
})();
