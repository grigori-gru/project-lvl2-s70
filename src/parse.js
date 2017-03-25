import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import ini from 'ini';

const parseData = {
  yml: item => yaml.safeLoad(item),
  json: item => JSON.parse(item),
  ini: item => ini.parse(item),
};

export default (item) => {
  const ext = path.extname(item).slice(1);
  const itemData = fs.readFileSync(
    (path.isAbsolute(item)) ? item : (path.resolve(process.cwd(), item)), 'utf8');

  return parseData[ext](itemData);
};
