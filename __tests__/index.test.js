// import genDiff from 'gendiff';
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
  expect(getDifferense('before.json', 'after.json')).toEqual(result);
});

test('YAML equal expected data', () => {
  expect(getDifferense('before.yml', 'after.yml')).toEqual(result);
});
