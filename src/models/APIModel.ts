import { Metaform3 } from '@maxqwars/metaform/metaform3';

/*
 * Data types
 */

export type UpdatedReleasesType = {
  code?: string;
  id?: number;
  imageUrl?: string;
  name?: string;
};

/*
 * Interfaces
 */

export interface IAPIModel {
  getUpdatedReleases(): Promise<UpdatedReleasesType[]> | Error;
}

/*
 * Model
 */

class APIModel implements IAPIModel {
  private _metaform3: Metaform3;

  constructor() {
    this._metaform3 = new Metaform3();
  }

  async getUpdatedReleases(): Promise<UpdatedReleasesType[]> {
    const { error, data } = await this._metaform3.getTitleUpdates();

    if (error || data === null) {
      throw Error('unknown error');
    }

    // https://anilibria.tv/storage/releases/posters/9486/dutn94QkrB59BxJB__9a90c854814bf9e7c845a10e41ff10c1.jpg

    const updatedReleases = data.list?.map((release) => {
      return {
        code: release.code,
        id: release.id,
        name: release.names?.en,
        imageUrl: `https://anilibria.tv/${release.posters?.original.url as string}`,
      };
    }) as UpdatedReleasesType[];

    return updatedReleases;
  }
}

export default new APIModel();