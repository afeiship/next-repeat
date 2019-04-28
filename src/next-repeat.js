(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.repeat = function(inChar,inCount){
    var arr = new Array( inCount + 1 );
    return arr.join(inChar);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.repeat;
  }

}());
