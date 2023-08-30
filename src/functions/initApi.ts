import { Metaform3 } from '@maxqwars/metaform/metaform3';
import { appModel } from '@/models/AppModel/AppModel';
import { DEFAULT_API_SERVER } from '@/constants/DEFAULT_API_SERVER';

export default function (): Metaform3 {
  return new Metaform3({
    apiVer: 'v3',
    apiDomain: appModel.apiServerUrl === 'default' ? DEFAULT_API_SERVER : (appModel.customApiServerUrl as string),
    https: true,
    timeout: 100000,
  });
}
