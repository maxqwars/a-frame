import { useEffect, useCallback } from 'react';

import { ReleasesCarousel } from '@/components/ReleasesCarousel';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setLoaded, setReleases, ReleaseType } from './RecentUpdatesCarouselState';
import { recentUpdates } from '@/api/anilibria';

const RecentUpdatesCarousel = () => {
  const dispatch = useAppDispatch();
  const isLoaded = useAppSelector((state) => state.recentUpdatesCarouselReducer.loaded);
  const releases = useAppSelector((state) => state.recentUpdatesCarouselReducer.releases);

  const fetchUpdates = useCallback(() => {
    recentUpdates()
      .then((response) => {
        const releases: ReleaseType[] = [];
        response.data?.list?.map((release) => {
          releases.push({
            id: release.id || 0,
            name: release.names?.ru || '',
            code: release.code || '',
            imageUrl: release.posters?.original?.url || '',
          });
        });

        dispatch(setReleases(releases));
        dispatch(setLoaded(true));
      })
      .catch((e) => console.log(e));
  }, [dispatch]);

  useEffect(() => {
    if (!isLoaded) {
      fetchUpdates();
    }
  }, [fetchUpdates, isLoaded]);

  return <ReleasesCarousel items={releases} />;
};

export default RecentUpdatesCarousel;
