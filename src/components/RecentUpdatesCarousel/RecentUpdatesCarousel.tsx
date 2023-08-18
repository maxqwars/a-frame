import { useEffect } from 'react';

import { ReleasesCarousel } from '@/components/ReleasesCarousel';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setLoaded, setReleases, ReleaseType } from './RecentUpdatesCarouselSlice';

import API from '@/models/APIModel';

const RecentUpdatesCarousel = () => {
  const dispatch = useAppDispatch();
  const isLoaded = useAppSelector((state) => state.RecentUpdatesCarouselReducer.loaded);
  const releases = useAppSelector((state) => state.RecentUpdatesCarouselReducer.releases);

  useEffect(() => {
    if (!isLoaded) {
      API.getUpdatedReleases().then((releases) => {
        // console.log(releases);
        dispatch(setReleases(releases as ReleaseType[]));
        dispatch(setLoaded(true));
      });
    }
  }, [dispatch, isLoaded]);

  return <ReleasesCarousel items={releases} />;
};

export default RecentUpdatesCarousel;
