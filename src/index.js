import _ from 'lodash';
import parse from './parsers';
import getData from './reader';

const getCommon = (file1, file2) => _.keys(file1).reduce((acc, key) => {
  const newAcc = {};
  if (typeof file1[key] !== 'object') {
    if (file1[key] === file2[key]) {
      newAcc[key] = file1[key];
    }
  }
  if (typeof file2[key] === 'object') {
    newAcc[key] = file1[key];
    // return { ...acc, ...getCommon(file1[key], file2[key]) };
  }
  return { ...acc, ...newAcc };
}, {});

const iter = (file1, file2) => {
  const common = getCommon(file1, file2);
  // console.log(common);
  const addSign = (obj, sign) =>
  _.mapKeys(obj, (value, key) =>
    ((!(key in common)) ? `${sign} ${key}` : `  ${key}`));

  const newObj = _.merge(addSign(file1, '-'), addSign(file2, '+'));

  const sortedKeys = _.keys(newObj)
  .sort((a, b) => a.slice(2) > b.slice(2));

  return sortedKeys.reduce((acc, key) => {
    const newAcc = `  ${key}: ${newObj[key]}`;
    return [...acc, newAcc];
  }, []).join('\n');
};

export default (firstName, secondName) => {
  const file1 = parse(firstName, getData(firstName));
  const file2 = parse(secondName, getData(secondName));
  const result = iter(file1, file2);

  return `{\n${result}\n}`;
};
