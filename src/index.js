import nx from '@jswork/next';

nx.repeat = function (inChar, inCount) {
  if (!inCount) return '';
  var arr = new Array(inCount + 1);
  return arr.join(inChar);
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.repeat;
}

export default nx.repeat;
