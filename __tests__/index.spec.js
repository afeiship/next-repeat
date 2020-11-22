(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.repeat should return the right string', function () {
      var str1 = 'abc';
      var res = nx.repeat(str1, 2);
      expect(res).toBe('abcabc');
    });

    test('nx.repeat when count = 0 should return EMPTY_STR', function () {
      var str1 = 'abc';
      var res = nx.repeat(str1, 0);
      expect(res).toBe('');
    });
  });

})();
