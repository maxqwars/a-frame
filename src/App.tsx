/* External modules */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/* Addons */
import useBrowserTheme from '@/hooks/useBrowserTheme';
import useBrowserControls from '@/hooks/useBrowserControls';
import { useAppSelector } from '@/store/hooks';
import { ThemeContext } from '@/context/ThemeContext';

/* Views */
import AnnounceView from '@/views/AnnounceView';
import HomeView from '@/views/HomeView';

/* Create router */
const router = createBrowserRouter([
  {
    path: '/',
    element: <AnnounceView />,
  },
  {
    path: '/home',
    element: <HomeView />,
  },
]);

function App() {
  const browserTheme = useBrowserTheme();
  const appTheme = useAppSelector((state) => state.appConfigReducer.theme);
  const { t } = useTranslation();
  const [setTitle] = useBrowserControls();

  setTitle(`${t('announce_app-name')} | ${t('announce_subtitle')}`);

  return (
    <ThemeContext.Provider value={appTheme === 'system' ? browserTheme : appTheme}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;
