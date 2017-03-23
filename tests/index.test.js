// import genDiff from 'gendiff';
import compare from '../src';
import before from './json/before.json';
import after from './json/after.json';

const result =
`{
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('JSON equal expected data', () => {
  expect(compare(before, after)).toEqual(result);
});
