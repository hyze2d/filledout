import { Route, RouterProvider } from 'atomic-router-react';
import * as ReactDOM from 'react-dom/client';
import { SimpleFormPage } from './pages/simple-form';
import { router } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router}>
    <Route view={SimpleFormPage} route={} />
  </RouterProvider>
);