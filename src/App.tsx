/* External modules */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/* Addons */
import useBrowserTheme from '@/hooks/useBrowserTheme';
import useBrowserControls from '@/hooks/useBrowserControls';
import { useAppSelector } from '@/store/hooks';
import { ThemeContext } from '@/context/ThemeContext';

/* Views */
import HomeView from '@/views/HomeView';
import DebugView from '@/views/DebugView';
import SettingsView from '@/views/SettingsView';
import BookmarksView from '@/views/BookmarksView';
import CatalogView from '@/views/CatalogView';
import SearchView from '@/views/SearchView';

/* Create router */
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  },
  {
    path: '/debug',
    element: <DebugView />,
  },
  {
    path: '/settings',
    element: <SettingsView />,
  },
  {
    path: '/bookmarks',
    element: <BookmarksView />,
  },
  {
    path: '/catalog',
    element: <CatalogView />,
  },
  {
    path: '/release/:code',
    element: <>Release view</>,
  },
  {
    path: '/search',
    element: <SearchView />,
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
