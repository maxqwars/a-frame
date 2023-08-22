import { useTranslation } from 'react-i18next';
import { Home, Film, Bookmark, Settings } from 'react-feather';

import { BottomNavigation, BottomNavigationItem } from '@/components/BottomNavigation';

const BottomNavigationLayout = () => {
  const { t } = useTranslation('NavigationLayout'); // WARN: This component use useTranslation()

  return (
    <BottomNavigation>
      <BottomNavigationItem to="/" label={t('home_view_label')} icon={<Home />} />
      <BottomNavigationItem to="/catalog" label={t('catalog_view_label')} icon={<Film />} />
      <BottomNavigationItem to="/bookmarks" label={t('bookmarks_view_label')} icon={<Bookmark />} />
      <BottomNavigationItem to="/settings" label={t('settings_view_label')} icon={<Settings />} />
    </BottomNavigation>
  );
};

export default BottomNavigationLayout;
