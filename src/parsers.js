import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import ini from 'ini';

const parseData = {
  yml: item => yaml.safeLoad(item),
  json: item => JSON.parse(item),
  ini: item => ini.parse(item),
};

const getData = item => fs.readFileSync(
  (path.isAbsolute(item)) ? item : (path.resolve(process.cwd(), item)), 'utf8');

const getExt = item => path.extname(item).slice(1);

export default item =>
  parseData[getExt(item)](getData(item));
