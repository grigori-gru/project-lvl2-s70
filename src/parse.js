import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import ini from 'ini';
import _ from 'lodash';

export default (item) => {
  console.log(path.resolve(process.cwd(), item));
  const itemData = fs.readFileSync(
    (path.isAbsolute(item)) ? item : (path.resolve(process.cwd(), item)), 'utf8');
  const ext = _.last(item.split('.'));

  let parseItemData;
  if (ext === 'yml') parseItemData = yaml.safeLoad(itemData);
  if (ext === 'json') parseItemData = JSON.parse(itemData);
  if (ext === 'ini') parseItemData = ini.parse(itemData);

  return parseItemData;
};
