import nx from '@jswork/next';

const defaults = {
  joinChar: ''
};

nx.repeat = function (inChar, inCount, inOptions) {
  const options = nx.mix(null, defaults, inOptions);
  if (!inCount) return '';
  const arr = new Array(inCount + 1);
  const char = inChar + options.joinChar;
  const joinChatLength = options.joinChar.length;
  const result = arr.join(char);
  const sliceCount = result.length - joinChatLength;
  return result.slice(0, sliceCount);
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.repeat;
}

export default nx.repeat;
