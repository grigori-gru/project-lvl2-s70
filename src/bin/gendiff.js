#!/usr/bin/env node
import program from 'commander';
import * as fs from 'fs';
import getDifferense from '..';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<first_config> <second_config>')
  .action((first, second) => {
    // if (typeof first === 'undefined' || typeof second === 'undefined') {
    //   console.error('no command given!');
    //   process.exit(1);
    // }
    const before = fs
      .readFileSync(`/home/grigory/project2/src/json/${first}`, 'utf8');
    const after = fs
      .readFileSync(`/home/grigory/project2/src/json/${second}`, 'utf8');
    console.log(getDifferense(before, after));
  });

program.parse(process.argv);
