import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCurrentCode, setLoaded, setRelease } from './';

import ApiModel from '@/models/APIModel';

import './DisplayRelease.css';

type DisplayReleaseProps = {
  code: string;
};

const DisplayRelease = ({ code }: DisplayReleaseProps) => {
  const dispatch = useAppDispatch();
  const { currentCode, releaseData, loaded } = useAppSelector((state) => state.DisplayReleaseReducer);

  useEffect(() => {
    dispatch(setCurrentCode(code));

    if (releaseData === null) {
      ApiModel.getReleaseByCode(code).then((release) => {
        dispatch(
          setRelease({
            code: release.code || '',
            name: release.names?.ru || '',
            desc: release.description || '',
            genres: release.genres || '',
            inFavorites: release.in_favorites || 0,
            changedAt: release.last_change || 0,
          }),
        );

        dispatch(setLoaded(true));
      });
    }

    if (releaseData !== null) {
      if (releaseData.code !== currentCode) {
        dispatch(setLoaded(false));
        ApiModel.getReleaseByCode(code).then((release) => {
          dispatch(
            setRelease({
              code: release.code || '',
              name: release.names?.ru || '',
              desc: release.description || '',
              genres: release.genres || '',
              inFavorites: release.in_favorites || 0,
              changedAt: release.last_change || 0,
            }),
          );

          dispatch(setLoaded(true));
        });
      }
    }
  }, [code, currentCode, dispatch, releaseData]);

  return <div>{!loaded ? 'Loading...' : currentCode}</div>;
};

export default DisplayRelease;
