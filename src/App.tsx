/* External modules */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'

/* Mizuhiki */
import i18n from '@/i18n';
import Home from "@/views/Home"

/* Create router */
const router = createBrowserRouter([
  {
    path: '/',
    element: (<Home />)
  }
])

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
}

export default App;
