/*!
 * name: @feizheng/next-repeat
 * description: Repeat for next.
 * url: https://github.com/afeiship/next-repeat
 * version: 1.0.0
 * date: 2020-01-06 12:44:28
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.repeat = function(inChar, inCount) {
    var arr = new Array(inCount + 1);
    return arr.join(inChar);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.repeat;
  }
})();

//# sourceMappingURL=next-repeat.js.map
