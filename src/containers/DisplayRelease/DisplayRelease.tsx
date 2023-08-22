import { useEffect, useCallback } from 'react';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCurrentCode, setLoaded, setRelease } from '.';
import { Typography } from '@/components/Typography';
import ApiModel from '@/models/APIModel';
import DisplayReleaseSection from './DisplayReleaseSection';

import './DisplayRelease.css';

type DisplayReleaseProps = {
  code: string;
};

const DisplayRelease = ({ code }: DisplayReleaseProps) => {
  const dispatch = useAppDispatch();
  const { currentCode, releaseData, loaded } = useAppSelector((state) => state.displayReleaseReducer);

  /* Define update data callback */
  const update = useCallback(() => {
    ApiModel.getReleaseByCode(code).then((release) => {
      dispatch(
        setRelease({
          code: release.code || '',
          name: release.names?.ru || '',
          desc: release.description || '',
          genres: release.genres || '',
          inFavorites: release.in_favorites || 0,
          changedAt: release.last_change || 0,
          posterImageUrl: `https://static.wwnd.space${release.posters?.original?.url as string}`,
        }),
      );

      dispatch(setLoaded(true));
    });
  }, [code, dispatch]);

  useEffect(() => {
    dispatch(setCurrentCode(code));

    if (releaseData === null) update();

    if (releaseData !== null && releaseData.code !== currentCode) {
      dispatch(setLoaded(false));
      update();
    }
  }, [code, currentCode, dispatch, releaseData, update]);

  if (!loaded) {
    return (
      <div className="display-release">
        <div className={cn('display-release__loading')}>Loading</div>
      </div>
    );
  }

  return (
    <div className="display-release">
      <div className={cn('display-release__short')}>
        <img className={cn('display-release__poster-image')} src={releaseData?.posterImageUrl} alt="" />
      </div>

      <div className={cn('display-release__common')}>
        <DisplayReleaseSection>
          <Typography variant="h6">{releaseData?.name}</Typography>
        </DisplayReleaseSection>

        <DisplayReleaseSection>
          <Typography variant="body1">{releaseData?.desc}</Typography>
        </DisplayReleaseSection>
      </div>
    </div>
  );
};

export default DisplayRelease;
