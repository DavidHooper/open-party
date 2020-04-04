import { development } from './development';
import { production } from './production';
import { ISettings } from './ISettings';

const envs = {
  development,
  production,
};

export const settings: ISettings = envs[process.env.NODE_ENV] || development;
export default settings;
