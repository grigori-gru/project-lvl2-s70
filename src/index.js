import _ from 'lodash';
import parse from './parsers';

const iter = (file1, file2) => {
  const common = _.keys(file1).filter(item =>
    (typeof file2[item] === 'object') || (file1[item] === file2[item]));

  const addSign = (obj, sign) =>
  _.mapKeys(obj, (value, key) =>
    // console.log(typeof value);
    // if (typeof value === 'object') {
    //   console.log(file1[key]);
    //   iter(file1[key], file2[key]);
    // }
    ((!common.includes(key)) ? `${sign} ${key}` : `  ${key}`));

  const newObj = _.merge(addSign(file1, '-'), addSign(file2, '+'));

  const sortedKeys = _.keys(newObj)
  .sort((a, b) => a.slice(2) > b.slice(2));

  return sortedKeys.reduce((acc, key) => {
    const newAcc = `  ${key}: ${newObj[key]}`;
    return [...acc, newAcc];
  }, []).join('\n');
};

export default (first, second) => {
  const [file1, file2] = [first, second].map(parse);
  const result = iter(file1, file2);

  return `{\n${result}\n}`;
};
