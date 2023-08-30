/* External modules */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/* Addons */
import useBrowserTheme from '@/hooks/useBrowserTheme';
import useBrowserControls from '@/hooks/useBrowserControls';
import { useAppSelector } from '@/store/hooks';
import { ThemeContext } from '@/context/ThemeContext';
import ApiServerContext from './context/ApiServerContext';
import StaticServerContext from './context/StaticServerContext';

/* Views */
import HomePage from '@/pages/HomePage';
import SettingsPage from '@/pages/SettingsPage';
import BookmarksPage from '@/pages/BookmarksPage';
import CatalogPage from '@/pages/CatalogPage';
import SearchPage from '@/pages/SearchPage';
import ReleasePage from '@/pages/ReleasePage';
import { DEFAULT_API_SERVER } from './constants/DEFAULT_API_SERVER';
import { DEFAULT_STATIC_SERVER } from './constants/DEFAULT_STATIC_SERVER';

/* Create router */
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
  const { theme, apiServerUrl, customApiServerUrl, staticServerUrl, customStaticServerUrl } = useAppSelector(
    (state) => state.app,
  );
  const { t } = useTranslation(); // WARN: This component use useTranslation()
  const { setBodyTheme, setDocumentTitle } = useBrowserControls();

  /* Change document title */
  setDocumentTitle(`${t('announce_app-name')} | ${t('announce_subtitle')}`);

  /* Change body theme */
  setBodyTheme(theme === 'auto' ? browserTheme : theme);

  return (
    <ThemeContext.Provider value={theme === 'auto' ? browserTheme : theme}>
      <ApiServerContext.Provider
        value={apiServerUrl === 'default' ? DEFAULT_API_SERVER : (customApiServerUrl as string)}
      >
        <StaticServerContext.Provider
          value={staticServerUrl === 'default' ? DEFAULT_STATIC_SERVER : (customStaticServerUrl as string)}
        >
          <RouterProvider router={router} />
        </StaticServerContext.Provider>
      </ApiServerContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
