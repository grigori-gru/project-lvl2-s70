// import genDiff from 'gendiff';
import path from 'path';
import getDifferense from '../src/';

const result =
`{
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('JSON equal expected data', () => {
  expect(getDifferense(path.resolve(__dirname, '__fixtures__', 'before.json'),
                       path.resolve(__dirname, '__fixtures__', 'after.json')))
    .toEqual(result);
});

test('YAML equal expected data', () => {
  expect(getDifferense(path.resolve(__dirname, '__fixtures__', 'before.yml'),
                       path.resolve(__dirname, '__fixtures__', 'after.yml')))
    .toEqual(result);
});

test('ini equal expected data', () => {
  expect(getDifferense(path.resolve(__dirname, '__fixtures__', 'before.ini'),
                       path.resolve(__dirname, '__fixtures__', 'after.ini')))
    .toEqual(result);
});
