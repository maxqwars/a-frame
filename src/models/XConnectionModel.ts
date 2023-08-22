import * as Metaform3 from '@maxqwars/metaform/metaform3';
import type { ReleaseOnlyPosterAndCodeType } from '@/types/XConnectionTypes';

type XConnectionModelApiCallResult<T> = {
  error: boolean;
  data: T | null;
};

export class XConnectionModel {
  private readonly _api3: Metaform3.Metaform3;

  constructor(domain: string) {
    this._api3 = new Metaform3.Metaform3({
      apiVer: 'v3',
      apiDomain: domain,
      https: true,
      timeout: 1000,
    });
  }
}

export const xConnectionModel = new XConnectionModel('api.wwnd.space/');
