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
