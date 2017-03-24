// import genDiff from 'gendiff';
import fs from 'fs';
import path from 'path';
import getDifferense from '../src/';

const before = fs
  .readFileSync(path.join(__dirname, '__fixtures__', 'before.json'), 'utf8');
const after = fs
  .readFileSync(path.join(__dirname, '__fixtures__', 'after.json'), 'utf8');

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
