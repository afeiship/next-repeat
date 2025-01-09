# next-repeat
> Repeat for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-repeat
```

## usage
```js
import '@jswork/next-repeat';

nx.repeat('abc', 2);
// => 'abcabc'

nx.repeat('abc', 2, { joinChar: '-'});
// => 'abc-abc'
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-repeat/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-repeat
[version-url]: https://npmjs.org/package/@jswork/next-repeat

[license-image]: https://img.shields.io/npm/l/@jswork/next-repeat
[license-url]: https://github.com/afeiship/next-repeat/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-repeat
[size-url]: https://github.com/afeiship/next-repeat/blob/master/dist/next-repeat.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-repeat
[download-url]: https://www.npmjs.com/package/@jswork/next-repeat
