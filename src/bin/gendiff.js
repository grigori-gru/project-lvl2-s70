#!/usr/bin/env node
import program from 'commander';
import result from '..';
import before from '../../tests/json/before.json';
import after from '../../tests/json/after.json';

// let path1;
// let path2;

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<first_config> <second_config>')
  .action((first, second) => {
    // path1 = `../../tests/json/${first}`;
    // path2 = `../../tests/json/${second}`;
    if (typeof first === 'undefined' || typeof second === 'undefined') {
      console.error('no command given!');
      process.exit(1);
    }
  });

program.parse(process.argv);

// Promise.all([path1, path2]
//   .map(x => System.import(x)))
//   .then(([first, second]) => {
//     console.log(result(first, second));
//   });

console.log(result(before, after));
