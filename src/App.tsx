/* External modules */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

/* Views */
import AnnounceView from '@/views/AnnounceView';
import HomeView from '@/views/HomeView';

/* Addons */
import i18n from '@/i18n';
import store from '@/store/store';

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
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </Provider>
  );
}

export default App;
