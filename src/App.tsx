/* External modules */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/* Addons */
import useBrowserTheme from '@/hooks/useBrowserTheme';
import useBrowserControls from '@/hooks/useBrowserControls';
import { useAppSelector } from '@/store/hooks';
import { ThemeContext } from '@/context/ThemeContext';

/* Views */
import HomePage from '@/pages/HomePage';
import DebugPage from '@/pages/DebugPage';
import SettingsPage from '@/pages/SettingsPage';
import BookmarksPage from '@/pages/BookmarksPage';
import CatalogPage from '@/pages/CatalogPage';
import SearchPage from '@/pages/SearchPage';
import ReleasePage from '@/pages/ReleasePage';

/* Create router */
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/debug',
    element: <DebugPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '/bookmarks',
    element: <BookmarksPage />,
  },
  {
    path: '/catalog',
    element: <CatalogPage />,
  },
  {
    path: '/release/:code',
    element: <ReleasePage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
]);

function App() {
  const browserTheme = useBrowserTheme();
  const appTheme = useAppSelector((state) => state.appConfigReducer.theme);
  const { t } = useTranslation(); // WARN: This component use useTranslation()
  const { setBodyTheme, setDocumentTitle } = useBrowserControls();

  /* Prepare browser */
  setDocumentTitle(`${t('announce_app-name')} | ${t('announce_subtitle')}`);
  setBodyTheme(appTheme === 'system' ? browserTheme : appTheme); // Define UI theme

  return (
    <ThemeContext.Provider value={appTheme === 'system' ? browserTheme : appTheme}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;
