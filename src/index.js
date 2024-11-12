import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './styles/theme';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>

    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
