import { Metaform3 } from '@maxqwars/metaform/metaform3';

export default function (): Metaform3 {
  return new Metaform3({
    apiVer: 'v3',
    apiDomain: 'api.wwnd.space/',
    https: true,
    timeout: 9000,
  });
}
