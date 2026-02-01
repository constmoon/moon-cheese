import { RouterProvider } from 'react-router';
import GlobalProvider from './providers/GlobalProvider';
import router from './router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <GlobalProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}

export default App;
