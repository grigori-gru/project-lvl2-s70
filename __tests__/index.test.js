// import genDiff from 'gendiff';
import fs from 'fs';
import getDifferense from '../src/';

const fixDir = '/home/grigory/project2/__tests__/__fixtures__/';
const before = fs.readFileSync(`${fixDir}before.json`, 'utf8');
const after = fs.readFileSync(`${fixDir}after.json`, 'utf8');

const result =
`{
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('JSON equal expected data', () => {
  expect(getDifferense(before, after)).toEqual(result);
});
