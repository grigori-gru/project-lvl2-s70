import yaml from 'js-yaml';
import path from 'path';
import ini from 'ini';

const parseData = {
  yml: item => yaml.safeLoad(item),
  json: item => JSON.parse(item),
  ini: item => ini.parse(item),
};

const getExt = item => path.extname(item).slice(1);

export default (fileName, data) => parseData[getExt(fileName)](data);
