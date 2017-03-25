import _ from 'lodash';
import parse from './parse';

export default (first, second) => {
  const [file1, file2] = [first, second].map(parse);

  const common = _.keys(file1).filter(item => file1[item] === file2[item]);

  const addSign = (obj, sign) =>
    _.mapKeys(obj, (value, key) =>
      ((!common.includes(key)) ? `${sign} ${key}` : `  ${key}`));

  const newObj = _.merge(addSign(file1, '-'), addSign(file2, '+'));

  const sortedKeys = _.keys(newObj)
                .sort((a, b) => a[2].localeCompare(b[2]));

  const result = sortedKeys
    .reduce((acc, key) => {
      const newAcc = `  ${key}: ${newObj[key]}`;
      return [...acc, newAcc];
    }, [])
    .join('\n');

  return `{\n${result}\n}`;
};
