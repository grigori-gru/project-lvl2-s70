import _ from 'lodash';

export default (first, second) => {
  const before = JSON.parse(first);
  const after = JSON.parse(second);

  const common = _.keys(before).filter(item => before[item] === after[item]);

  const addSign = (obj, sign) =>
    _.mapKeys(obj, (value, key) =>
      ((!common.includes(key)) ? `${sign} ${key}` : `  ${key}`));

  const newObj = _.merge(addSign(before, '-'), addSign(after, '+'));

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
