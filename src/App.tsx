/* External modules */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

/* Mizuhiki */
import i18n from '@/i18n';
import Home from '@/views/Home';
import store from '@/store/store';

/* Create router */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
