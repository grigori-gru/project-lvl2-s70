import yaml from 'js-yaml';
import * as fs from 'fs';
import path from 'path';

export default (item) => {
  const itemData = fs.readFileSync((path
      .join(__dirname, '..', '__tests__', '__fixtures__', item)), 'utf8');

  const ext = item.split('.')[1];

  let parseItemData;
  if (ext === 'yml') parseItemData = yaml.safeLoad(itemData);
  if (ext === 'json') parseItemData = JSON.parse(itemData);

  return parseItemData;
};
