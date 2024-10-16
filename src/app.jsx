/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { store, persistor } from './features/api/store';
import { AppProvider } from './AppContext';
import 'react-toastify/dist/ReactToastify.css';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <AppProvider>
            <ToastContainer />
            <Router />

          </AppProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
